'use strict';
/**
 * * Copyright 2021 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Must-Read books (by tag)
 */

function getFirstYearRead(books) {
  let earliestYear = 9999;
  books.forEach((el) => {
    if (typeof(el.read.year) !== 'number' && typeof(el.read.year) !== 'string') /* Do nothing */ ;
    else if (el.read.year < earliestYear) {
      earliestYear = el.read.year;
    }
  });
  return parseInt(earliestYear);
};

function getLastYearRead(books) {
  let latestYear = 0;
  books.forEach((el) => {
    if (typeof(el.read.year) !== 'number' && typeof(el.read.year) !== 'string') /* Do nothing */ ;
    else if (el.read.year > latestYear) {
      latestYear = el.read.year;
    }
  });
  return parseInt(latestYear);
};

function getYearsReading(firstYear, lastYear) {
  // ! Does not handle gaps in years
  // Returns an array containing number values for each year a book was read.
  const yearsReading = [];
  for (let i = firstYear; i <= lastYear; i++) {
    yearsReading.push(i);
  }
  return yearsReading;
};

function getTotalPagesRead(books) {
  let totalPages = 0;
  books.forEach((el) => {
    if (typeof(el.pages) !== 'number' && typeof(el.pages) !== 'string') /* Do nothing */ ;
    else {
      totalPages += parseInt(el.pages);
    }
  });
  return totalPages;
};

function getPagesReadByYear(books, year) {
  let totalPagesForYear = 0;
  if (typeof year !== 'number') {
    console.log('Year argument needs to be a number');
  } else {
    books.forEach((el) => {
      if (el.read.year === year) {
        totalPagesForYear += el.pages;
      }
    });
  }
  return totalPagesForYear;
};

function getBooksReadByYear(books, year) {
  // Returns the title, tagline (if it has one), and author of all books read in a specified year.
  let booksReadInYear = [];
  if (typeof year !== 'number') {
    console.log('Year argument needs to be a number');
  } else {
    books.forEach((el) => {
      if (el.read.year === year) {
        // == will be truthy for null and undefined
        if (el.tagline == null) {
          booksReadInYear.push(el.title + ' by ' + el.author);
        } else {
          booksReadInYear.push(
            el.title + ' - ' + el.tagline + ' by ' + el.author
          );
        }
      }
    });
  }
  return booksReadInYear;
};

function getNumberOfBooksReadByYear(books, years) {
  // Returns an object containing key:value pairs for the "year":"number of books read" for every year a book was read
  const bookCountByYear = {};
  years.forEach((el) => {
    let booksRead = 0;
    for (let i = 0; i < books.length; i++) {
      // == will be truthy for null and undefined
      if (books[i].read.year == null) /* Do nothing */ ;
      else if (books[i].read.year === el) {
        booksRead += 1;
      }
    }
    bookCountByYear[el] = booksRead;
  });
  return bookCountByYear;
};

module.exports = {
  getFirstYearRead: getFirstYearRead,
  getLastYearRead: getLastYearRead,
  getYearsReading: getYearsReading,
  getTotalPagesRead: getTotalPagesRead,
  getPagesReadByYear: getPagesReadByYear,
  getBooksReadByYear: getBooksReadByYear,
  getNumberOfBooksReadByYear: getNumberOfBooksReadByYear,
};
