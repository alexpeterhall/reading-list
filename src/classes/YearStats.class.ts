export class YearStats implements yearStats{
  pagesRead = 0
  numberOfBooksRead = 0
  bookTitles = new Set<string>()

  getAvgPagesPerMonth() {
    return Math.round(this.pagesRead / 12)
  }

  getAvgPagesPerWeek() {
    return Math.round(this.pagesRead / 52)
  }

  getAvgPagesPerDay() {
    return Math.round(this.pagesRead / 365)
  }
}