const Book = require('../../models/Book')

const addBook = async (obj, {
  input: {
    title, language, numPages, datePublished, bestseller, authorId, publisherId,
  },
}) => {
  const add = await Book.query().insertAndFetch({
    title,
    language,
    numPages,
    datePublished,
    bestseller,
    authorId,
    publisherId,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: {
    addBook,
  },
}

module.exports = resolver
