# My Reading List

I had the idea awhile back to start keeping track of all the books I read. I decided to put the list into JSON format so I can run some simple stats and play around with the data for fun. I've tried to put together a list going back to about 2013 based on purchase history and my bookshelf/kindle but I'm sure I've missed a lot. Not important, this is really just for me anyway. The data for the years 2019 and 2020 is pretty accurate. I also included some titles from older reading of my favorite series (ie: A Song of Ice and Fire, Harry Potter, The Lord of the Rings). I plan to keep the list up to date for my own tracking going forward and maybe add a list of my favorite essays as well.

> “In my whole life, I have known no wise people (over a broad subject matter area) who didn’t read all the time – none, zero.” — Charlie Munger

## Notes on Reading

- I have tried to become more discerning on what I spend my time reading. That being said, sometimes I just want to read a book (fiction, "bad", popular, or otherwise) and I don't think there always needs to be some massive ROI calculated.
- Sometimes I will read a book a second time closely following the fist read-through.
- Some books I will read over and over again, because they are that good and it helps refresh important ideas. A perfect example is [The War of Art](https://www.amazon.com/gp/product/1936891026) by Steven Pressfield.
- Going meta. Reading about reading.
  - [Reading Better by Farnam Street](https://fs.blog/reading)
  - [How to Read a Book: The Classic Guide to Intelligent Reading](https://www.amazon.com/gp/product/0671212095)
  - [Why Books Don't Work](https://andymatuschak.org/books/) by Andy Matuschak
- How I have been choosing books to read lately...
  - Read books that have been around a long time and everybody agrees are great books.
    - Anything over 100 years old that is still widely read.
    - [The Great Books](https://fs.blog/2013/10/great-books) - Farnam Street
    - See Appendix A: A Recommended Reading List from "How to Read a Book" linked above.
  - If somebody you have a lot of respect for or is super successful recommends a book (especially if the book is related to their area of expertise), take their word for it and read the book.
    - Ex: Warren Buffet repeatedly recommends [The Intelligent Investor](https://www.amazon.com/dp/0060555661). I'll take Warren's word for it.
  - Follow people/podcasters on the internet who read a lot and have smart guests on their shows and look for trends. I get email newsletters from the below people and also listen to their podcasts once in awhile.
    - [The Tim Ferris Show](https://tim.blog/podcast/) and his website [Tim Ferris](https://tim.blog/)
      - Tim has been interviewing "top performers" and all around smart people for a long time and he always asks them about their "most-gifted" or recommended books. Their answers are also all compiled in his book [Tools of Titans](https://www.amazon.com/dp/1328683788). If a particular book is repeatedly mentioned by his guests I will probably read it.
    - [The Art of Manliness Podcast with Brett McKay](https://www.artofmanliness.com/podcast/) and his website [Art of Manliness](https://www.artofmanliness.com/)
      - Brett put together a solid list of his own. - [100 Books Every Man Should Read](https://www.artofmanliness.com/articles/100-books-every-man-read/)
      - Most of the guests on Brett's podcast are there to talk about their new book. You probably don't need to read new books. Just listen to the podcast episode and you'll get the idea.
    - [The Knowledge Project Podcast with Shane Parrish](https://fs.blog/knowledge-project/) and his website [Farnam Street](https://fs.blog/)
    - **Note:** These are just a few of the ways I hear about books. You can quickly go down a rabbit hole and end up with a reading list of 1000 books you'll never have time to read. Don't do that.

## Notes on the Data

- Year and Page values are stored as numbers to allow easier computing.
- ISBN (International Standard Book Number) numbers are stored a strings because they tend to have leading zeros which is not supported by JSON numbers.
- ASIN (Amazon Standard Identification Number) numbers are only included for books where it differs from the ISBN10.
- Amazon product links are for the latest versions of books and may be different than the version and ISBNs of the particular copy I read and include in ISBN10/ISBN13 fields.
- I have tried to use the actual number of pages from the physical books I have for the page count. Where I no longer have the book or have a kindle version I use the page numbers from the Amazon product listing which I've noticed is wrong about 99% of the time and is always too high. Often times substantially higher. Obviously the number of pages will vary depending on the print medium and versions but it just seems so far off all the time. Oh well, I guess it helps pad my stats.
- I have not yet gone crazy filling in tags, reviews, notes, etc. Don't know if that will ever happen.

## Notes on the Code

- Initial code is just to log some simple stats to console. I am running the JavaScript file locally via nodejs (node printStats).
- I added some tests to experiment with Jest but I have not bothered checking for non-existent data or errors in many cases at this point because I directly control the data. For example, I would never add a book I read to the list without a title and number of pages. Famous last words...
- Future project idea would be to build a front-end application to display and interact with the data.
