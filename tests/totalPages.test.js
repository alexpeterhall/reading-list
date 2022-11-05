'use strict'
const BookStats = require('../scripts/BookStats.js')

const sunnyDay = [{ pages: 100 }, { pages: 200 }, { pages: 300 }, { pages: 400 }]

describe('Total Pages Suite', () => {
  test('Sums page numbers from 4 books to equal 1000', () => {
    expect(BookStats.getTotalPagesRead(sunnyDay)).toBe(1000)
  })
})
