import Stats from '../src/classes/Stats.class'
import testData from './testData.json'

const stats = new Stats(testData)

describe('Stats for year 2021', () => {
  test('Sums number of books read for year 2021', () => {
    expect(stats.allYearStats[2021].numberOfBooksRead).toBe(3)
  })
  test('Sum pages for books read in year 2021', () => {
    expect(stats.allYearStats[2021].pagesRead).toBe(1200)
  })
  test('Returns titles for books read in year 2021', () => {
    expect(stats.allYearStats[2021].bookTitles).toEqual(new Set([
      'The Clean Coder - A Code of Conduct for Professional Programmers by Robert C. Martin',
      'Clean Code - A Handbook of Agile Software Craftsmanship by Robert C. Martin',
      "JavaScript: The Definitive Guide - Master the World's Most-Used Programming Language by David Flanagan",
    ]))
  })
  test('Returns average number of pages per month read in year 2021', () => {
    expect(stats.allYearStats[2021].getAvgPagesBy('months')).toBe(100)
  })
  test('Returns average number of pages per week read in year 2021', () => {
    expect(stats.allYearStats[2021].getAvgPagesBy('weeks')).toBe(23)
  })
  test('Returns average number of pages per day read in year 2021', () => {
    expect(stats.allYearStats[2021].getAvgPagesBy('days')).toBe(3)
  })
})

describe('Stats for year 2022', () => {
  test('Sums number of books read for year 2022', () => {
    expect(stats.allYearStats[2022].numberOfBooksRead).toBe(6)
  })
  test('Sum pages for books read in year 2022', () => {
    expect(stats.allYearStats[2022].pagesRead).toBe(1400)
  })
  test('Returns titles for books read in year 2022', () => {
    expect(stats.allYearStats[2022].bookTitles).toEqual(new Set([
      'The Clean Coder - A Code of Conduct for Professional Programmers by Robert C. Martin',
      'Clean Code - A Handbook of Agile Software Craftsmanship by Robert C. Martin',
      'The Pragmatic Programmer - Your Journey to Mastery by David Thomas,Andrew Hunt',
    ]))
  })
  test('Returns average number of pages per month read in year 2022', () => {
    expect(stats.allYearStats[2022].getAvgPagesBy('months')).toBe(117)
  })
  test('Returns average number of pages per week read in year 2022', () => {
    expect(stats.allYearStats[2022].getAvgPagesBy('weeks')).toBe(27)
  })
  test('Returns average number of pages per day read in year 2022', () => {
    expect(stats.allYearStats[2022].getAvgPagesBy('days')).toBe(4)
  })
})

describe('Overall Stats', () => {
  test('Returns total number of years reading', () => {
    expect(stats.totalYearsReading).toBe(2)
  })
  test('Sums total number of pages read', () => {
    expect(stats.totalPagesRead).toBe(2600)
  })
  test('Sums total number of books read', () => {
    expect(stats.totalBooksRead).toBe(9)
  })
  test('Returns object with total number of books read by year', () => {
    expect(stats.numberOfBooksReadByYear).toEqual({
      2021: 3,
      2022: 6
    })
  })
  test('Returns average number of pages read per day', () => {
    expect(stats.getAvgPagesBy('days')).toBe(4)
  })
  test('Returns average number of pages read per week', () => {
    expect(stats.getAvgPagesBy('weeks')).toBe(25)
  })
  test('Returns average number of pages read per month', () => {
    expect(stats.getAvgPagesBy('months')).toBe(108)
  })
  test('Returns average number of pages read per year', () => {
    expect(stats.getAvgPagesBy('year')).toBe(1300)
  })
})
