import YearStats from "./YearStats.class"

export default class Stats implements stats{
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

  getAvgPagesBy(interval: timeInterval): number {
    const timeInterval = { days: 365, weeks: 52, months: 12, year: 1 } as const
    return Math.round(this.totalPagesRead / (this.totalYearsReading * timeInterval[interval]))
  }

  printStats(year?: string) {
    console.log('Total Years Reading:', this.totalYearsReading)
    console.log('Total Books Read:', this.totalBooksRead)
    console.log('Total Pages Read:', this.totalPagesRead)
    console.log('Average Pages per Year:', this.getAvgPagesBy('year'))
    console.log('Average Pages per Month:', this.getAvgPagesBy('months'))
    console.log('Average Pages per Week:', this.getAvgPagesBy('weeks'))
    console.log('Average Pages per Day:', this.getAvgPagesBy('days'))
    console.log('Number of Books Read by Year:', this.numberOfBooksReadByYear)

    // If optional year is provided and there is data for that year, print the yearly stats.
    if (year && this.allYearStats[year]) {
      const totalPagesForYear = this.allYearStats[year].pagesRead
      console.log(`Total Pages Read for Year ${year}:`, totalPagesForYear)
      console.log(`Total Books Read for Year ${year}:`, this.allYearStats[year].numberOfBooksRead)
      console.log(`Average Pages per Month for Year ${year}:`, this.allYearStats[year].getAvgPagesBy('months'))
      console.log(`Average Pages per Week for Year ${year}:`, this.allYearStats[year].getAvgPagesBy('weeks'))
      console.log(`Average Pages per Day for Year ${year}:`, this.allYearStats[year].getAvgPagesBy('days'))
      console.log(`Books Read in Year ${year}:`, this.allYearStats[year].bookTitles)
    } else {
      console.log('No data found for optional year stats.')
    }
  }
}
