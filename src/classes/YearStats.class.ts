export class YearStats implements yearStats{
  pagesRead = 0
  numberOfBooksRead = 0
  bookTitles = new Set<string>()

  getAvgPagesPerWeek() {
    return Math.round(this.pagesRead / 52)
  }

  getAvgPagesPerDay() {
    return Math.round(this.pagesRead / 365)
  }
}