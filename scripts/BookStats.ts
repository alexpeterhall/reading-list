/**
 * * Copyright 2022 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Top 10 most read books
 * TODO Must-Read books (by tag)
 */

function getFirstAndLastYears(books: book[]): number[] {
  const years = new Set<number>()
  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null) years.add(date.year)
    })
  })
  const yearsInOrder = Array.from(years).sort((a,b) => a - b)
  return [yearsInOrder[0], yearsInOrder[yearsInOrder.length - 1]]
}

export function getTotalYearsReading(books: book[]): number {
  const [firstYear, lastYear] = getFirstAndLastYears(books)
  return lastYear - firstYear
}

export function getAllYears(books: book[]): number[] {
  const [firstYear, lastYear] = getFirstAndLastYears(books)
  const yearsReading: number[] = []
  for (let i = firstYear; i <= lastYear; i++) {
    yearsReading.push(i)
  }
  return yearsReading
}

export function getTotalPagesRead(books: book[]): number {
  let totalPages = 0
  books.forEach((book) => {
    book.dates_read.forEach((date) => {
      if (date?.year != null) totalPages += book.pages
    })
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
export function getNumberOfBooksReadByYear(books: book[]) {
  const numberOfBooksReadByYear = new Map<number, number>()
  books.forEach((book) => {
      book.dates_read.forEach((date) => {
        if (date?.year != null) {
          if (numberOfBooksReadByYear.get(date.year) != undefined) {
            let currentCount = numberOfBooksReadByYear.get(date.year)
            //@ts-ignore
            numberOfBooksReadByYear.set(date.year, currentCount += 1)
          } else {
            numberOfBooksReadByYear.set(date.year, 1)
          }
        }
      })
    })
    
    // Fill in any gap years with 0
    const sortedYears = []
    for (const key of numberOfBooksReadByYear.keys()) {
      sortedYears.push(key)
    }
    sortedYears.sort((a, b) => a - b)
    for (let i = 0; i < sortedYears.length-1; i++) {
      if (sortedYears[i + 1] - sortedYears[i] !== 1) {
        numberOfBooksReadByYear.set(sortedYears[i] + 1, 0)
      }
    }
  
  return Object.fromEntries(numberOfBooksReadByYear)
  // return numberOfBooksReadByYear
}
