export default class YearStats implements yearStats{
  pagesRead = 0
  numberOfBooksRead = 0
  bookTitles = new Set<string>()

  getAvgPagesBy(interval: timeInterval): number {
    const timeInterval = { days: 365, weeks: 52, months: 12, year: 1 } as const
    return Math.round(this.pagesRead / timeInterval[interval])
  }
}
