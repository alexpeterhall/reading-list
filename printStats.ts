import * as BookStats from './scripts/BookStats'
import READING_LIST from './ReadingList.json'
const BOOKS: book[] = READING_LIST,
  numberOfBooksReadByYear = BookStats.getNumberOfBooksReadByYear(BOOKS),
  totalPagesRead = BookStats.getTotalPagesRead(BOOKS),
  totalYearsReading = Object.keys(numberOfBooksReadByYear).length
  
//TODO Save stats for each year into a typed object

function printStats(year?: number) {
  console.log('Total Books Read: ' + BOOKS.length)
  console.log('Total Years Reading: ' + totalYearsReading)
  console.log('Total Pages Read: ' + totalPagesRead)
  console.log('Average Pages Per Year: ' + (totalPagesRead / totalYearsReading).toFixed(2))
  console.log('Average Pages Per Week: ' + (totalPagesRead / (totalYearsReading * 52)).toFixed(2))
  console.log('Average Pages Per Day: ' + (totalPagesRead / (totalYearsReading * 365)).toFixed(2))
  console.log('Number of Books Read by Year:')
  // Prints the object because it looks better than a concatenated string in console.
  console.log(numberOfBooksReadByYear)
  // If optional year is provided and there is data for that year, print the yearly stats.
  if (year && numberOfBooksReadByYear[year]) {
      const totalPagesForYear = BookStats.getPagesReadByYear(BOOKS, year)
      console.log('Total Pages Read for Year ' + year + ': ' + totalPagesForYear)
      console.log('Average Pages Per Week for Year ' + year + ': ' + (totalPagesForYear / 52).toFixed(2))
      console.log('Average Pages Per Day for Year ' + year + ': ' + (totalPagesForYear / 365).toFixed(2))
      console.log('Books Read in Year ' + year + ': ')
      // Prints the array because it looks better than a concatenated string in console.
      console.log(BookStats.getBooksReadByYear(BOOKS, year))
    } else {
      console.warn('Year provided does not have any data.')
    }
  }

// Provide optional number year for additional stats on a particular year.
printStats(2022)
