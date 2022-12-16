/**
 * * Copyright 2022 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Most read authors
 * TODO Top 10 most read books
 * TODO Must-Read books (by tag)
 */

class YearStats implements yearStats{
  pagesRead = 0
  numberOfBooksRead = 0
  bookTitles = new Set<string>()

  getAvgPagesPerWeek() {
    return (this.pagesRead / 52).toFixed(2)
  }

  getAvgPagesPerDay() {
    return (this.pagesRead / 365).toFixed(2)
  }
}

export function getStatsByYear(books: book[]) { 
  const allYearStats: allYearStats = {}

  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null) { 

        if (!allYearStats.hasOwnProperty(date.year)) {
          Object.defineProperty(allYearStats, date.year, { value: new YearStats(), enumerable: true })
        }

        allYearStats[date.year].pagesRead += book.pages
        allYearStats[date.year].numberOfBooksRead += 1
        allYearStats[date.year].bookTitles.add(
          book.tagline ? `${book.title} - ${book.tagline} by ${book.author}` : `${book.title} by ${book.author}`
        )

      }
    })
  })
  
  return allYearStats
}
