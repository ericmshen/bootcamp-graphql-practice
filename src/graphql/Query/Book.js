/* eslint-disable no-unused-vars */
const Book = require('../../models/Book')
const Publisher = require('../../models/Publisher')
const Author = require('../../models/Author')

const allBooks = async () => {
  const b = Book.query()
  return b
}

const bookById = async ({ id }) => {
  const b = await Book.query().findOne('id', id)
  return b
}

const publisher = async ({ publisherId }) => {
  const p = await Publisher.query().findOne('id', publisherId)
  return p
}

const author = async ({ authorId }) => {
  const a = await Author.query().findOne('id', authorId)
  return a
}

const resolver = {
  Query: {
    allBooks,
    bookById,
  },
  Book: {
    publisher,
    author,
  },
}

module.exports = resolver
