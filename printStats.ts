
import * as BookStats from './scripts/BookStats'
import READING_LIST from './ReadingList.json'
const BOOKS: book[] = READING_LIST,
  firstYear = BookStats.getFirstYearRead(BOOKS),
  lastYear = BookStats.getLastYearRead(BOOKS),
  yearsReading = BookStats.getYearsReading(firstYear, lastYear),
  totalYearsReading = lastYear - firstYear,
  totalPagesRead = BookStats.getTotalPagesRead(BOOKS),
  numberOfBooksReadByYear = BookStats.getNumberOfBooksReadByYear(BOOKS, yearsReading),
  averageYear = totalPagesRead / totalYearsReading,
  averageWeek = totalPagesRead / (totalYearsReading * 52),
  averageDay = totalPagesRead / (totalYearsReading * 365)

function printStats(year?: number) {
  console.log('Total Books Read: ' + BOOKS.length)
  console.log('Total Years Reading: ' + totalYearsReading)
  console.log('Total Pages Read: ' + totalPagesRead)
  console.log('Average Pages Per Year: ' + averageYear.toFixed(2))
  console.log('Average Pages Per Week: ' + averageWeek.toFixed(2))
  console.log('Average Pages Per Day: ' + averageDay.toFixed(2))
  console.log('Number of Books Read by Year:')
  // Prints the object because it looks better than a concatenated string in console.
  console.log(numberOfBooksReadByYear)
  // If optional year is provided and there is data for that year, print the yearly stats.
  if (year && yearsReading.includes(year)) {
      const booksReadInYear = BookStats.getBooksReadByYear(BOOKS, year)
      const totalPagesForYear = BookStats.getPagesReadByYear(BOOKS, year)
      const averageWeekForYear = totalPagesForYear / 52
      const averageDayForYear = totalPagesForYear / 365
      console.log('Total Pages Read for Year ' + year + ': ' + totalPagesForYear)
      console.log('Average Pages Per Week for Year ' + year + ': ' + averageWeekForYear.toFixed(2))
      console.log('Average Pages Per Day for Year ' + year + ': ' + averageDayForYear.toFixed(2))
      console.log('Books Read in Year ' + year + ': ')
      // Prints the array because it looks better than a concatenated string in console.
      console.log(booksReadInYear)
    } else {
      console.log('Year provided does not have any data.')
    }
  }

// Provide optional number year for additional stats on a particular year.
printStats(2021)
