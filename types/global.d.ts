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
  getAvgPagesBy: (interval: timeInterval) => number
}

interface allYearStats {
  [year: string]: yearStats
}

interface stats {
  allYearStats: allYearStats
  totalYearsReading: number
  totalBooksRead: number
  totalPagesRead: number
  numberOfBooksReadByYear: { [year: string]: number }
  getAvgPagesBy: (interval: timeInterval) => number
  printStats: () => void
}

const timeIntervals = { days: 365, weeks: 52, months: 12, year: 1 } as const
type timeInterval = keyof typeof timeIntervals
