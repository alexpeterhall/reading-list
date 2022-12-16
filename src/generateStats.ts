/**
 * * Copyright 2022 Alex Hall - https://alexpeterhall.com
 * TODO Top (arg) longest books
 * TODO Most read authors
 * TODO Top 10 most read books
 * TODO Must-Read books (by tag)
 */

import Books from '../ReadingList.json'
import Stats from './classes/Stats.class'

const stats = new Stats(Books)

// Accept optional year argument at the command line for additional stats on a particular year.
stats.printStats(process.argv[2])
