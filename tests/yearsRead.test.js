'use strict';
const BookStats = require('../scripts/BookStats');

const yearsArray = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      sunnyDay = [
        { read: { year: 1911 } },
        { read: { year: 1986 } },
        { read: { year: 2005 } },
        { read: { year: 2009 } },
      ],
      yearsAsStrings = [
        { read: { year: "1911" } },
        { read: { year: "1986" } },
        { read: { year: "2005" } },
        { read: { year: "2009" } },
      ],
      badInputs = [
        { read: { year: null } },
        { read: { year: undefined } },
        { read: { year: true } },
        { read: { year: false } },
        { read: { year: [ "2009" ] } },
        { read: { year: { year: "2009" } } },
        { read: { year: "2009" } },
        { read: { year: 2011 } },
        { read: { year: "2014" } },
        { read: { year: 1911 } },
      ];

describe('First Year Read Suite', () => {
  test('Finds earliest year in nested object to equal 1911', () => {
    expect(BookStats.getFirstYearRead(sunnyDay)).toBe(1911);
  });
  test('Finds earliest year in nested object and returns a number', () => {
    expect(BookStats.getFirstYearRead(yearsAsStrings)).toBe(1911);
  });
  test('Finds earliest year and returns a number when given improper inputs', () => {
    expect(BookStats.getFirstYearRead(badInputs)).toBe(1911);
  });  
});

describe('Last Year Read Suite', () => {
  test('Finds latest year in nested object to equal 2009', () => {
    expect(BookStats.getLastYearRead(sunnyDay)).toBe(2009);
  });
  test('Finds latest year in nested object and returns a number', () => {
    expect(BookStats.getLastYearRead(yearsAsStrings)).toBe(2009);
  });
  test('Finds latest year and returns a number when given improper inputs', () => {
    expect(BookStats.getLastYearRead(badInputs)).toBe(2014);
  });
});

describe('All Years Read Suite', () => {
  test('Returned array contains all expected values between provided numbers', () => {
    expect(BookStats.getYearsReading(2010, 2020)).toEqual(yearsArray);
  });
});