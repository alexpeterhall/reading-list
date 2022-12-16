export default class OverallStats implements overallStats{
  constructor(allStatsByYear: allYearStats) {
    this.totalYearsReading = Object.keys(allStatsByYear).length

    for (const [year, stats] of <[string, yearStats][]>Object.entries(allStatsByYear)) {
      Object.defineProperty(this.numberOfBooksReadByYear, year, { value: stats.numberOfBooksRead, enumerable: true })
      this.totalBooksRead += stats.numberOfBooksRead
      this.totalPagesRead += stats.pagesRead
    }
  }
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
}