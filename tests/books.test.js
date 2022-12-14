'use strict'
const BookStats = require('../scripts/BookStats.js')

const sunnyDay = [
  {
    title: 'Homo Deus',
    tagline: 'A Brief History of Tomorrow',
    author: 'Yuval Noah Harari',
    pages: 100,
    dates_read: [{ month: 1, year: 2010 }],
  },
  {
    title: "Zen Mind, Beginner's Mind",
    tagline: 'Informal Talks on Zen Meditation and Practice',
    author: 'Shunryu Suzuki',
    pages: 200,
    dates_read: [{ month: 1, year: 2010 }],
  },
  {
    title: 'The Clean Coder',
    tagline: 'A Code of Conduct for Professional Programmers',
    author: 'Robert C. Martin',
    pages: 300,
    dates_read: [{ month: 1, year: 2010 }],
  },
  {
    title: 'The Pragmatic Programmer',
    tagline: 'Your Journey to Mastery',
    author: ['David Thomas', 'Andrew Hunt'],
    pages: 400,
    dates_read: [{ month: 1, year: 2010 }],
  },
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
    title: 'JavaScript: The Definitive Guide',
    tagline: "Master the World's Most-Used Programming Language",
    author: 'David Flanagan',
    pages: 200,
    dates_read: [
      { month: 12, year: 2012 },
      { month: 1, year: 2013 },
    ],
  },
  {
    pages: 300,
    dates_read: [
      {
        title: 'Clean Code',
        tagline: 'A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        month: 3,
        year: 2014,
      },
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
  test('Sums pages when some books have null data inputs', () => {
    expect(BookStats.getTotalPagesRead(nullInputs)).toBe(200)
  })
})

describe('Pages by Year', () => {
  test('Sums pages for reads of multiple books', () => {
    expect(BookStats.getPagesReadByYear(sunnyDay, 2010)).toBe(1000)
  })
  test('Sums pages returns zero for year with no data', () => {
    expect(BookStats.getPagesReadByYear(sunnyDay, 2009)).toBe(0)
  })
  test('Sum pages for year with one book', () => {
    expect(BookStats.getPagesReadByYear(multipleReads, 2013)).toBe(200)
  })
  test('Sum pages for year with multiple reads of same book', () => {
    expect(BookStats.getPagesReadByYear(multipleReads, 2014)).toBe(600)
  })
  test('Sums pages when some books have null data inputs', () => {
    expect(BookStats.getPagesReadByYear(nullInputs, 2021)).toBe(100)
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
  test('Sums number of books read with null data inputs', () => {
    expect(BookStats.getNumberOfBooksReadByYear(nullInputs, [2021, 2022])).toEqual({ 2021: 1, 2022: 1 })
  })
})

describe('Books Read in Year', () => {
  test('Returns book information for multiple books read in the same year', () => {
    expect(BookStats.getBooksReadByYear(sunnyDay, 2010)).toEqual([
      'Homo Deus - A Brief History of Tomorrow by Yuval Noah Harari',
      "Zen Mind, Beginner's Mind - Informal Talks on Zen Meditation and Practice by Shunryu Suzuki",
      'The Clean Coder - A Code of Conduct for Professional Programmers by Robert C. Martin',
      'The Pragmatic Programmer - Your Journey to Mastery by David Thomas,Andrew Hunt',
    ])
  })
  test('Returns book information for single book read when multiple years present', () => {
    expect(BookStats.getBooksReadByYear(multipleReads, 2012)).toEqual([
      "JavaScript: The Definitive Guide - Master the World's Most-Used Programming Language by David Flanagan",
    ])
  })
})
