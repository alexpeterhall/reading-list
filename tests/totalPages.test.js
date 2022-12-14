'use strict'
const BookStats = require('../scripts/BookStats.js')

const sunnyDay = [
  { pages: 100, dates_read: [{ month: 1, year: 2010 }] },
  { pages: 200, dates_read: [{ month: 1, year: 2010 }] },
  { pages: 300, dates_read: [{ month: 1, year: 2010 }] },
  { pages: 400, dates_read: [{ month: 1, year: 2010 }] },
]
const multipleReads = [
  {
    pages: 100,
    dates_read: [
      { month: 1, year: 2010 },
      { month: 12, year: 2010 },
    ],
  },
  {
    pages: 200,
    dates_read: [
      { month: 12, year: 2012 },
      { month: 1, year: 2013 },
    ],
  },
  {
    pages: 300,
    dates_read: [
      { month: 3, year: 2014 },
      { month: 4, year: 2014 },
      { month: 12, year: 2016 },
    ],
  },
]
const nullInputs = [
  {
    pages: 100,
    dates_read: [
      { month: 14, year: 2021 },
      { month: 1, year: 2022 },
      { month: null, year: null },
      { month: undefined, year: undefined },
    ],
  },
]

describe('Total Pages', () => {
  test('Sums pages for books read only once', () => {
    expect(BookStats.getTotalPagesRead(sunnyDay)).toBe(1000)
  })
  test('Sum pages for books read multiple times', () => {
    expect(BookStats.getTotalPagesRead(multipleReads)).toBe(1500)
  })
  test('Sums pages when books have unexpected data inputs', () => {
    expect(BookStats.getTotalPagesRead(nullInputs)).toBe(200)
  })
})

describe('Total Books', () => {
  test('Sums number of books read only once', () => {
    expect(BookStats.getNumberOfBooksReadByYear(sunnyDay, [2010])).toEqual({ 2010: 4 })
  })
  test('Sum number of books read multiple times', () => {
    expect(BookStats.getNumberOfBooksReadByYear(multipleReads, [2010, 2011, 2012, 2013, 2014, 2015, 2016])).toEqual({
      2010: 2,
      2011: 0,
      2012: 1,
      2013: 1,
      2014: 2,
      2015: 0,
      2016: 1,
    })
  })
  test('Sums number of books read with unexpected data inputs', () => {
    expect(BookStats.getNumberOfBooksReadByYear(nullInputs, [2021, 2022])).toEqual({ 2021: 1, 2022: 1 })
  })
})
