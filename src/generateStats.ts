/**
 * * Copyright 2022 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Most read authors
 * TODO Top 10 most read books
 * TODO Must-Read books (by tag)
 */

import Books from '../ReadingList.json'
import getStatsByYear from './Year'
import OverallStats from './classes/OverallStats.class'

const allStatsByYear = getStatsByYear(Books)
const overallStats = new OverallStats(allStatsByYear)


function printStats(year?: number) {
  console.log('Total Years Reading:', overallStats.totalYearsReading)
  console.log('Total Books Read:', overallStats.totalBooksRead)
  console.log('Total Pages Read:', overallStats.totalPagesRead)
  console.log('Average Pages Per Year:', overallStats.getAvgPagesPerYear())
  console.log('Average Pages Per Month:', overallStats.getAvgPagesPerMonth())
  console.log('Average Pages Per Week:', overallStats.getAvgPagesPerWeek())
  console.log('Average Pages Per Day:', overallStats.getAvgPagesPerDay())
  console.log('Number of Books Read by Year:', overallStats.numberOfBooksReadByYear)

  // If optional year is provided and there is data for that year, print the yearly stats.
  if (year && allStatsByYear[year]) {
    const totalPagesForYear = allStatsByYear[year].pagesRead
    console.log(`Total Pages Read for Year ${year}:`, totalPagesForYear)
    console.log(`Total Books Read for Year ${year}:`, allStatsByYear[year].numberOfBooksRead)
    console.log(`Average Pages Per Month for Year ${year}:`, allStatsByYear[year].getAvgPagesPerMonth())
    console.log(`Average Pages Per Week for Year ${year}:`, allStatsByYear[year].getAvgPagesPerWeek())
    console.log(`Average Pages Per Day for Year ${year}:`, allStatsByYear[year].getAvgPagesPerDay())
    console.log(`Books Read in Year ${year}:`, allStatsByYear[year].bookTitles)
  } else {
    console.warn('Year provided does not have any data.')
  }
}

//* Provide optional number year for additional stats on a particular year.
printStats(2022)
