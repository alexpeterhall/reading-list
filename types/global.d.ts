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
