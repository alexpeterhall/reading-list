interface book {
  title: string
  tagline?: string | null
  series?: string | null
  series_number?: number | null
  author: string | string[]
  year_published: number
  edition?: number | null
  ISBN10: string
  ISBN13: string
  pages: number
  cover_image?: string | null
  url: string
  genre?: string | null
  tags: string[]
  dates_read: { month: number | null, year: number | null}[]
  stars?: number | null
  review?: string | null
}

interface yearStats {
  pagesRead: number
  numberOfBooksRead: number
  bookTitles: Set<string>
  getAvgPagesPerMonth: () => number
  getAvgPagesPerWeek: () => number
  getAvgPagesPerDay: () => number
}

interface allYearStats {
  [year: number]: yearStats
}

interface stats {
  allYearStats: { [year: number]: yearStats }
  totalYearsReading: number
  totalBooksRead: number
  totalPagesRead: number
  numberOfBooksReadByYear: { [year: number]: number }
  getAvgPagesPerYear: () => number
  getAvgPagesPerMonth: () => number
  getAvgPagesPerWeek: () => number
  getAvgPagesPerDay: () => number
  printStats: () => void
}