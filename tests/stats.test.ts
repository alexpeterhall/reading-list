import getStatsByYear from '../src/Year'
import OverallStats from '../src/classes/OverallStats.class'
import testData from './testData.json'

const allStatsByYear = getStatsByYear(testData)
const overallStats = new OverallStats(allStatsByYear)

describe('Stats for year 2021', () => {
  test('Sums number of books read for year 2021', () => {
    expect(allStatsByYear[2021].numberOfBooksRead).toBe(3)
  })
  test('Sum pages for books read in year 2021', () => {
    expect(allStatsByYear[2021].pagesRead).toBe(1200)
  })
  test('Returns titles for books read in year 2021', () => {
    expect(allStatsByYear[2021].bookTitles).toEqual(new Set([
      'The Clean Coder - A Code of Conduct for Professional Programmers by Robert C. Martin',
      'Clean Code - A Handbook of Agile Software Craftsmanship by Robert C. Martin',
      "JavaScript: The Definitive Guide - Master the World's Most-Used Programming Language by David Flanagan",
    ]))
  })
  test('Returns average number of pages per month read in year 2021', () => {
    expect(allStatsByYear[2021].getAvgPagesPerMonth()).toBe(100)
  })
  test('Returns average number of pages per week read in year 2021', () => {
    expect(allStatsByYear[2021].getAvgPagesPerWeek()).toBe(23)
  })
  test('Returns average number of pages per day read in year 2021', () => {
    expect(allStatsByYear[2021].getAvgPagesPerDay()).toBe(3)
  })
})

describe('Stats for year 2022', () => {
  test('Sums number of books read for year 2022', () => {
    expect(allStatsByYear[2022].numberOfBooksRead).toBe(6)
  })
  test('Sum pages for books read in year 2022', () => {
    expect(allStatsByYear[2022].pagesRead).toBe(1400)
  })
  test('Returns titles for books read in year 2022', () => {
    expect(allStatsByYear[2022].bookTitles).toEqual(new Set([
      'The Clean Coder - A Code of Conduct for Professional Programmers by Robert C. Martin',
      'Clean Code - A Handbook of Agile Software Craftsmanship by Robert C. Martin',
      'The Pragmatic Programmer - Your Journey to Mastery by David Thomas,Andrew Hunt',
    ]))
  })
  test('Returns average number of pages per month read in year 2022', () => {
    expect(allStatsByYear[2022].getAvgPagesPerMonth()).toBe(117)
  })
  test('Returns average number of pages per week read in year 2022', () => {
    expect(allStatsByYear[2022].getAvgPagesPerWeek()).toBe(27)
  })
  test('Returns average number of pages per day read in year 2022', () => {
    expect(allStatsByYear[2022].getAvgPagesPerDay()).toBe(4)
  })
})

describe('Overall Stats', () => {
  test('Returns total number of years reading', () => {
    expect(overallStats.totalYearsReading).toBe(2)
  })
  test('Sums total number of pages read', () => {
    expect(overallStats.totalPagesRead).toBe(2600)
  })
  test('Sums total number of books read', () => {
    expect(overallStats.totalBooksRead).toBe(9)
  })
  test('Returns object with total number of books read by year', () => {
    expect(overallStats.numberOfBooksReadByYear).toEqual({
      2021: 3,
      2022: 6
    })
  })
  test('Returns average number of pages read per day', () => {
    expect(overallStats.getAvgPagesPerDay()).toBe(4)
  })
  test('Returns average number of pages read per week', () => {
    expect(overallStats.getAvgPagesPerWeek()).toBe(25)
  })
  test('Returns average number of pages read per year', () => {
    expect(overallStats.getAvgPagesPerYear()).toBe(1300)
  })
})
