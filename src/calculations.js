export const defaults = {
    numBooks: 10,
    numDays: 365,
    pagesPerBook: 250,
    wordsPerPage: 250,
    wordsPerMinute: 200,

    // simple
    pagesPerDay: 10,
}

export function minutesPerDay({
    numBooks = defaults.numBooks,
    numDays = defaults.numDays,
    pagesPerBook = defaults.pagesPerBook,
    wordsPerPage = defaults.wordsPerPage,
    wordsPerMinute = defaults.wordsPerMinute,
} = {}) {
    return numBooks * pagesPerBook * wordsPerPage / wordsPerMinute / numDays
}

export function pagesPerDayToBooks({
    pagesPerDay = defaults.pagesPerDay,
    pagesPerBook = defaults.pagesPerBook,
    numDays = defaults.numDays,
} = {}) {
    return pagesPerDay / pagesPerBook * numDays
}