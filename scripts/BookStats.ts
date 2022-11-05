/**
 * * Copyright 2022 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Must-Read books (by tag)
 */

export function getTotalPagesRead(books: book[]): number {
  let totalPages = 0
  books.forEach((book) => totalPages += book.pages)
  return totalPages
}

export function getYearsReading(firstYear: number, lastYear: number): number[] {
  let yearsReading: number[] = []
  for (let i = firstYear; i <= lastYear; i++) {
    yearsReading.push(i)
  }
  return yearsReading
}

export function getFirstYearRead(books: book[]): number {
  let earliestYear = 9999
  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null && date.year < earliestYear) earliestYear = date.year
    })
  })
  return earliestYear
}

//TODO This function basically duplicates getFirstYearRead. Try to remove duplication.
export function getLastYearRead(books: book[]): number {
  let latestYear = 0
  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null && date.year > latestYear) latestYear = date.year
    })
  })
  return latestYear
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
