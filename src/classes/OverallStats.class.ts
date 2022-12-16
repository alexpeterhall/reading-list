import YearStats from "./YearStats.class"

export default class OverallStats implements stats{
  constructor(books: book[]) {
    // Generate stats for each year
    this.allYearStats = {}
    books.forEach((book) => {
      book.dates_read.forEach((date) => {
        if (date?.year != null) {
          if (!this.allYearStats.hasOwnProperty(date.year)) {
            Object.defineProperty(this.allYearStats, date.year, { value: new YearStats(), enumerable: true })
          }
          this.allYearStats[date.year].pagesRead += book.pages
          this.allYearStats[date.year].numberOfBooksRead += 1
          this.allYearStats[date.year].bookTitles.add(
            book.tagline ? `${book.title} - ${book.tagline} by ${book.author}` : `${book.title} by ${book.author}`
          )
        }
      })
    })
    
    // Generate Overall stats
    this.totalYearsReading = Object.keys(this.allYearStats).length
    for (const [year, stats] of <[string, yearStats][]>Object.entries(this.allYearStats)) {
      Object.defineProperty(this.numberOfBooksReadByYear, year, { value: stats.numberOfBooksRead, enumerable: true })
      this.totalBooksRead += stats.numberOfBooksRead
      this.totalPagesRead += stats.pagesRead
    }
  }

  allYearStats: allYearStats = {}
  totalYearsReading = 0
  totalPagesRead = 0
  totalBooksRead = 0
  numberOfBooksReadByYear = {}

  getAvgPagesPerYear() {
    return Math.round(this.totalPagesRead / this.totalYearsReading)
  }

  getAvgPagesPerMonth() {
    return Math.round(this.totalPagesRead / (this.totalYearsReading * 12))
  }

  getAvgPagesPerWeek() {
    return Math.round(this.totalPagesRead / (this.totalYearsReading * 52))
  }

  getAvgPagesPerDay() {
    return Math.round(this.totalPagesRead / (this.totalYearsReading * 365))
  }

  printStats(year?: number) {
    console.log('Total Years Reading:', this.totalYearsReading)
    console.log('Total Books Read:', this.totalBooksRead)
    console.log('Total Pages Read:', this.totalPagesRead)
    console.log('Average Pages Per Year:', this.getAvgPagesPerYear())
    console.log('Average Pages Per Month:', this.getAvgPagesPerMonth())
    console.log('Average Pages Per Week:', this.getAvgPagesPerWeek())
    console.log('Average Pages Per Day:', this.getAvgPagesPerDay())
    console.log('Number of Books Read by Year:', this.numberOfBooksReadByYear)

    // If optional year is provided and there is data for that year, print the yearly stats.
    if (year && this.allYearStats[year]) {
      const totalPagesForYear = this.allYearStats[year].pagesRead
      console.log(`Total Pages Read for Year ${year}:`, totalPagesForYear)
      console.log(`Total Books Read for Year ${year}:`, this.allYearStats[year].numberOfBooksRead)
      console.log(`Average Pages Per Month for Year ${year}:`, this.allYearStats[year].getAvgPagesPerMonth())
      console.log(`Average Pages Per Week for Year ${year}:`, this.allYearStats[year].getAvgPagesPerWeek())
      console.log(`Average Pages Per Day for Year ${year}:`, this.allYearStats[year].getAvgPagesPerDay())
      console.log(`Books Read in Year ${year}:`, this.allYearStats[year].bookTitles)
    } else {
      console.warn('Year provided does not have any data.')
    }
  }
}
