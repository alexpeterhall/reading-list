/**
 * * Copyright 2021 Alex Hall - https://alexpeterhall.com
 * ! calcYearsReading and calcTotalYearsReading functions don't account for gaps in years.
 * TODO All Titles read in a year
 * TODO Average pages per day by year
 * TODO Top 5 longest books
 */

'use strict';
const READING_LIST = require('../ReadingList.json');
const BOOKS = READING_LIST.books;
const firstYear = calcFirstYearRead(BOOKS);
const lastYear = calcLastYearRead(BOOKS);
const yearsReading = calcYearsReading(BOOKS);
const totalYearsReading = calcTotalYearsReading(BOOKS);
const totalPagesRead = calcTotalPagesRead(BOOKS);
const numberOfBooksReadByYear = calcNumberOfBooksReadByYear(BOOKS, yearsReading)

console.log("Total Books Read: " + BOOKS.length);
console.log("Total Years Reading: " + totalYearsReading);
console.log("Total Pages Read: " + totalPagesRead);
console.log("Number of books read by year:");
console.log(numberOfBooksReadByYear);
pageStats(BOOKS);

function calcFirstYearRead(books) {
  let earliestYear = 9999;
  for (let i = 0; i < books.length; i++) {
    if (books[i].read.year === null || books[i].read.year === undefined ) {
      // console.log("Null or Undefined");
    }
    else if (books[i].read.year < earliestYear) {
      earliestYear = books[i].read.year;
    }
  }
  return earliestYear;
}

function calcLastYearRead(books) {
  let latestYear = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].read.year === null || books[i].read.year === undefined ) {
      // console.log("Null or Undefined");
    }
    else if (books[i].read.year > latestYear) {
      latestYear = books[i].read.year;
    }
  }
  return latestYear;
}

function calcTotalYearsReading() {
  const totalYears = lastYear - firstYear;
  return totalYears;
}

function calcYearsReading() {
  // Returns an array containing number values for each year a book was read.
  const yearsReading = [];
  for (let i = firstYear; i <= lastYear; i++) {
    yearsReading.push(i);
  }
  return yearsReading;
}

function calcTotalPagesRead(books) {
  let totalPages = 0;
  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].pages;
  }
  return totalPages;
}

function pageStats() {
  const avgYear = totalPagesRead / totalYearsReading;
  const avgDay = totalPagesRead / (totalYearsReading * 365);
  console.log("Average Pages Per Year: " + avgYear.toFixed(2));
  console.log("Average Pages Per Day: " + avgDay.toFixed(2));
}

function calcNumberOfBooksReadByYear(books, years) {
  // Returns an object containing key:value pairs for the "year":"number of books read" for every year a book was read
  const bookCountByYear = {};
  years.forEach(el => {
    let booksRead = 0;
    for (let i = 0; i < books.length; i++) {
      if (books[i].read.year === null || books[i].read.year === undefined ) {
        // console.log("Null or Undefined");
      }
      else if (books[i].read.year === el) {
        booksRead += 1;
      }
    }
    bookCountByYear[el] = booksRead;
  });
  return bookCountByYear;
}