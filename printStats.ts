import { getStatsByYear } from './scripts/BookStats'
import Books from './ReadingList.json'

const allStatsByYear = getStatsByYear(Books)
const totalYearsReading = Object.keys(allStatsByYear).length
const numberOfBooksReadByYear = {}
let totalBooksRead = 0
let totalPagesRead = 0

for (const [year, stats] of Object.entries(allStatsByYear)) {
  Object.defineProperty(numberOfBooksReadByYear, year, { value: stats.numberOfBooksRead, enumerable: true })
  totalBooksRead += stats.numberOfBooksRead
  totalPagesRead += stats.pagesRead
}

function printStats(year?: number) {
  console.log('Total Books Read:', totalBooksRead)
  console.log('Total Years Reading:', totalYearsReading)
  console.log('Total Pages Read:', totalPagesRead)
  console.log('Average Pages Per Year:', Math.round(totalPagesRead / totalYearsReading))
  console.log('Average Pages Per Week:', Math.round(totalPagesRead / (totalYearsReading * 52)))
  console.log('Average Pages Per Day:', Math.round(totalPagesRead / (totalYearsReading * 365)))
  console.log('Number of Books Read by Year:', numberOfBooksReadByYear)

  // If optional year is provided and there is data for that year, print the yearly stats.
  if (year && allStatsByYear[year]) {
    const totalPagesForYear = allStatsByYear[year].pagesRead
    console.log(`Total Pages Read for Year ${year}:`, totalPagesForYear)
    console.log(`Average Pages Per Week for Year ${year}:`, Math.round(totalPagesForYear / 52))
    console.log(`Average Pages Per Day for Year ${year}:`, Math.round(totalPagesForYear / 365))
    console.log(`Books Read in Year ${year}:`, allStatsByYear[year].bookTitles)
  } else {
    console.warn('Year provided does not have any data.')
  }
}

//* Provide optional number year for additional stats on a particular year.
printStats(2022)
