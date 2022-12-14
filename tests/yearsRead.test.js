'use strict'
const BookStats = require('../scripts/BookStats.js')

const sunnyDay = [
  { dates_read: [{ month: 1, year: 2010 }] },
  { dates_read: [{ month: 12, year: 2011 }] },
  { dates_read: [{ month: 3, year: 2012 }] },
  { dates_read: [{ month: 9, year: 2018 }] },
  { dates_read: [{ month: 1, year: 2022 }] },
]
const sunnyDayYears = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]

const randomOrderDates = [
  { dates_read: [{ month: 1, year: 1500 }] },
  { dates_read: [{ month: undefined, year: 1918 }] },
  { dates_read: [{ month: 12, year: 1786 }] },
  { dates_read: [{ month: null, year: 2090 }] },
  { dates_read: [{ month: 3, year: 1882 }] },
  { dates_read: [{ month: 9, year: 1200 }] },
  { dates_read: [{ month: 1, year: 1400 }] },
]
const randomOrderYears = (() => {
  const years = []
  for (let i = 1200; i <= 2090; i++) {
    years.push(i)
  }
  return years
})()

const allCombinations = [
  { dates_read: [{ month: 1, year: 1911 }] },
  { dates_read: [{ month: undefined, year: 1918 }] },
  { dates_read: [{ month: 12, year: 1986 }] },
  { dates_read: [{ month: 3, year: 2005 }] },
  { dates_read: [{ month: 9, year: 2009 }] },
  { dates_read: [{ month: null, year: 2009 }] },
  { dates_read: [{ month: 1, year: 2011 }] },
  { dates_read: [{ month: 1, year: null }] },
  { dates_read: [{ month: 1, year: undefined }] },
  { dates_read: [{ month: undefined, year: undefined }] },
  { dates_read: [{ month: null, year: null }] },
]
const allCombinationsYears = (() => {
  const years = []
  for (let i = 1911; i <= 2011; i++) {
    years.push(i)
  }
  return years
})()

describe('First and Last Years Read', () => {
  test('Sunny Day', () => {
    expect(BookStats.getFirstAndLastYears(sunnyDay)).toEqual([2010, 2022])
  })
  test('Random Order', () => {
    expect(BookStats.getFirstAndLastYears(randomOrderDates)).toEqual([1200, 2090])
  })
  test('All Data Combinations', () => {
    expect(BookStats.getFirstAndLastYears(allCombinations)).toEqual([1911, 2011])
  })
})

describe('All Years Read', () => {
  test('Sunny Day', () => {
    expect(BookStats.getAllYears(2010, 2020)).toEqual(sunnyDayYears)
  })
  test('Random Order', () => {
    expect(BookStats.getAllYears(1200, 2090)).toEqual(randomOrderYears)
  })
  test('All Data Combinations', () => {
    expect(BookStats.getAllYears(1911, 2011)).toEqual(allCombinationsYears)
  })
})
