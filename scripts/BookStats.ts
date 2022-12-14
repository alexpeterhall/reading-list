/**
 * * Copyright 2022 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Top 10 most read books
 * TODO Must-Read books (by tag)
 */

export function getFirstAndLastYears(books: book[]): number[] {
  const years = new Set<number>()
  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null) years.add(date.year)
    })
  })
  const yearsInOrder = Array.from(years).sort((a,b) => a - b)
  return [yearsInOrder[0], yearsInOrder[yearsInOrder.length - 1]]
}

export function getAllYears(firstYear: number, lastYear: number): number[] {
  let yearsReading: number[] = []
  for (let i = firstYear; i <= lastYear; i++) {
    yearsReading.push(i)
  }
  return yearsReading
}

export function getTotalPagesRead(books: book[]): number {
  let totalPages = 0
  books.forEach((book) => {
    if (book.dates_read != null) {
      book.dates_read.forEach((date) => {
        if (date?.year != null) totalPages += book.pages
      })
    }
  })
  return totalPages
}

export function getPagesReadByYear(books: book[], year: number): number {
  let totalPagesForYear = 0
  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null && date.year === year) totalPagesForYear += book.pages
    })
  })
  return totalPagesForYear
}

export function getBooksReadByYear(books: book[], year: number): string[] {
  let booksReadInYear: string[] = []
  books.forEach((book) => {
    for (const date of book.dates_read) {
      if (date?.year === year) {
        // TODO Handle multiple authors (string array)
        if (book.tagline) booksReadInYear.push(`${book.title} - ${book.tagline} by ${book.author}`)
        else booksReadInYear.push(`${book.title} by ${book.author}`)
        break
      }
    }
    })
  return booksReadInYear
}

// Returns an object containing "year":"number of books read" properties for every year a book was read
export function getNumberOfBooksReadByYear(books: book[], years: number[]) {
  const numberOfBooksReadByYear = {}
  years.forEach((year) => {
    let booksRead = 0
    books.forEach((book) => {
      book.dates_read.forEach((date) => {
        if (date?.year != null && date.year === year) booksRead += 1
      })
    })
    Object.defineProperty(numberOfBooksReadByYear, year, { value: booksRead, enumerable: true });
  })
  return numberOfBooksReadByYear
}
