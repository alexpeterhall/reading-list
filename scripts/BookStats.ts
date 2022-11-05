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

export function getFirstYearRead(books: book[]) {
  let earliestYear = 9999
  books.forEach((book) => {
    if (book.dates_read.length > 1) {
      book.dates_read.forEach((date) => {
        if (date?.year != null && date.year < earliestYear) earliestYear = date.year
      })
    }
    else if (book.dates_read[0]?.year != null && book.dates_read[0].year < earliestYear) {
      earliestYear = book.dates_read[0].year
    }
  })
  return earliestYear
}

//TODO This function basically duplicates getFirstYearRead. Try to remove duplication.
export function getLastYearRead(books: book[]) {
  let latestYear = 0
    books.forEach((book) => {
    if (book.dates_read.length > 1) {
      book.dates_read.forEach((date) => {
        if (date?.year != null && date.year > latestYear) latestYear = date.year
      })
    }
    else if (book.dates_read[0]?.year != null && book.dates_read[0].year > latestYear) {
      latestYear = book.dates_read[0].year
    }
  })
  return latestYear
}

export function getPagesReadByYear(books: book[], year: number): number {
  let totalPagesForYear = 0
  books.forEach((book) => {
    if (book.dates_read.length > 1) {
      book.dates_read.forEach((date) => {
        if (date?.year != null  && date.year === year) totalPagesForYear += book.pages
      })
    }
    else if (book.dates_read[0]?.year  != null && book.dates_read[0].year === year) totalPagesForYear += book.pages
  })
  return totalPagesForYear
}

// Returns the title, tagline (if it has one), and author of all books read in a specified year.
export function getBooksReadByYear(books: book[], year: number) {
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

// Returns an object containing key:value pairs for the "year":"number of books read" for every year a book was read
export function getNumberOfBooksReadByYear(books: book[], years: number[]) {
  const numberOfBooksReadByYear = {}
  years.forEach((year) => {
    let booksRead = 0
    books.forEach((book) => {
      if (book.dates_read.length > 1) {
        book.dates_read.forEach((date) => {
          if (date?.year != null && date.year === year) booksRead += 1
        })
      }
      else if (book.dates_read[0]?.year != null && book.dates_read[0].year === year) booksRead += 1
    })
    Object.defineProperty(numberOfBooksReadByYear, year, { value: booksRead, enumerable: true });
  })
  return numberOfBooksReadByYear
}
