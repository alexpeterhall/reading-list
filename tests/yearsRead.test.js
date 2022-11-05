'use strict'
const BookStats = require('../scripts/BookStats.js')

const yearsArray = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
  sunnyDay = [
    { dates_read: [{ month: 1, year: 1911 }] },
    { dates_read: [{ month: undefined, year: 1918 }] },
    { dates_read: [{ month: 12, year: 1986 }] },
    { dates_read: [{ month: 3, year: 2005 }] },
    { dates_read: [{ month: 9, year: 2009 }] },
    { dates_read: [{ month: null, year: 2009 }] },
    { dates_read: [{ month: 1, year: 2011 }] },
    { dates_read: [{ month: 1, year: null }] },
    { dates_read: [{ month: 1, year: undefined }] },
  ]

describe('Years Read Suite', () => {
  test('Finds earliest year in nested object to equal 1911', () => {
    expect(BookStats.getFirstYearRead(sunnyDay)).toBe(1911)
  })
  test('Finds latest year in nested object to equal 2009', () => {
    expect(BookStats.getLastYearRead(sunnyDay)).toBe(2011)
  })
  test('Returned array contains all expected values between provided numbers', () => {
    expect(BookStats.getYearsReading(2010, 2020)).toEqual(yearsArray)
  })
})
