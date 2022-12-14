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
      { month: 12, year: 1986 },
    ],
  },
  {
    pages: 200,
    dates_read: [
      { month: 12, year: 1786 },
      { month: 1, year: 1515 },
    ],
  },
  {
    pages: 300,
    dates_read: [
      { month: 3, year: 1882 },
      { month: 4, year: 1500 },
      { month: 12, year: 1670 },
    ],
  },
]
const badInputs = [
  {
    pages: 100,
    dates_read: [
      { month: 1, year: 2022 },
      { month: 14, year: 3 },
      { month: null, year: null },
      { month: undefined, year: undefined },
    ],
  },
  {
    pages: 200,
    dates_read: null,
  },
  {
    pages: 300,
    dates_read: undefined,
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
    expect(BookStats.getTotalPagesRead(badInputs)).toBe(200)
  })
})
