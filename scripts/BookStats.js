/**
 * * Copyright 2021 Alex Hall - https://alexpeterhall.com
 * ! getYearsReading and getTotalYearsReading functions don't account for gaps in years.
 * TODO Top (arg) longest books
 */

'use strict';
const READING_LIST = require('../ReadingList.json');
const BOOKS = READING_LIST.books;
const firstYear = getFirstYearRead(BOOKS);
const lastYear = getLastYearRead(BOOKS);
const yearsReading = getYearsReading(BOOKS);
const totalYearsReading = lastYear - firstYear;
const totalPagesRead = getTotalPagesRead(BOOKS);
const numberOfBooksReadByYear = getNumberOfBooksReadByYear(BOOKS, yearsReading)
const averageYear = totalPagesRead / totalYearsReading;
const averageWeek = totalPagesRead / (totalYearsReading * 52);
const averageDay = totalPagesRead / (totalYearsReading * 365);

// Provide optional number year for additional stats on a particular year.
printStats(2020);

function printStats(year) {
  console.log("Total Books Read: " + BOOKS.length);
  console.log("Total Years Reading: " + totalYearsReading);
  console.log("Total Pages Read: " + totalPagesRead);
  console.log("Average Pages Per Year: " + averageYear.toFixed(2));
  console.log("Average Pages Per Week: " + averageWeek.toFixed(2));
  console.log("Average Pages Per Day: " + averageDay.toFixed(2));
  console.log("Number of Books Read by Year:");
  // Prints the object because it looks better than a concatenated string in console.
  console.log(numberOfBooksReadByYear);
  // If optional number year is provided as an argument.
  if (year) {
    // If there is data for that year, print the yearly stats.
    if (yearsReading.includes(year)) {
      const booksReadInYear = getBooksReadByYear(BOOKS, year);
      const totalPagesForYear = getPagesReadByYear(BOOKS, year);
      const averageWeekForYear = totalPagesForYear / 52;
      const averageDayForYear = totalPagesForYear / 365;
      console.log("Total Pages Read for Year " + year + ": " + totalPagesForYear);
      console.log("Average Pages Per Week for Year " + year + ": " + averageWeekForYear.toFixed(2));
      console.log("Average Pages Per Day for Year " + year + ": " + averageDayForYear.toFixed(2));
      console.log("Books Read in Year " + year + ": ");
      // Prints the array because it looks better than a concatenated string in console.
      console.log(booksReadInYear);
    } else {
      console.log("Year provided does not have any data.");
    }
  }
};

function getFirstYearRead(books) {
  let earliestYear = 9999;
  books.forEach(el => {
    // == will be truthy for null and undefined
    if (el.read.year == null ) /* Do nothing */ ;
    else if (el.read.year < earliestYear) {
      earliestYear = el.read.year;
    }
  });
  return earliestYear;
};

function getLastYearRead(books) {
  let latestYear = 0;
  books.forEach(el => {
    // == will be truthy for null and undefined
    if (el.read.year == null ) /* Do nothing */ ;
    else if (el.read.year > latestYear) {
      latestYear = el.read.year;
    }
  });
  return latestYear;
};

function getYearsReading() {
  // Returns an array containing number values for each year a book was read.
  const yearsReading = [];
  for (let i = firstYear; i <= lastYear; i++) {
    yearsReading.push(i);
  }
  return yearsReading;
};

function getTotalPagesRead(books) {
  let totalPages = 0;
  books.forEach(el => totalPages += el.pages);
  return totalPages;
};

function getPagesReadByYear(books, year) {
  let totalPagesForYear = 0;
  if (typeof(year) !== "number") {
    console.log("Year argument needs to be a number");
  } else {
    books.forEach(el => {
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
  if (typeof(year) !== "number") {
    console.log("Year argument needs to be a number");
  } else {
    books.forEach(el => {
      if (el.read.year === year) {
        // == will be truthy for null and undefined
        if (el.tagline == null) {
          booksReadInYear.push(el.title + " by " + el.author);
        } else {
          booksReadInYear.push(el.title + " - " + el.tagline + " by " + el.author);
        }
      }
    });
  }
  return booksReadInYear;
};

function getNumberOfBooksReadByYear(books, years) {
  // Returns an object containing key:value pairs for the "year":"number of books read" for every year a book was read
  const bookCountByYear = {};
  years.forEach(el => {
    let booksRead = 0;
    for (let i = 0; i < books.length; i++) {
      // == will be truthy for null and undefined
      if (books[i].read.year == null ) /* Do nothing */ ;
      else if (books[i].read.year === el) {
        booksRead += 1;
      }
    }
    bookCountByYear[el] = booksRead;
  });
  return bookCountByYear;
};