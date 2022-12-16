import { YearStats } from "./classes/YearStats.class"

export default function getStatsByYear(books: book[]) { 
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
