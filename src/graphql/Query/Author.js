/* eslint-disable no-unused-vars */
const Author = require('../../models/Author')
const Book = require('../../models/Book')
const Address = require('../../models/Address')

const authorById = async (obj, { id }, context) => {
  const a = await Author.query().findOne('id', id)
  return a
}

const allAuthors = async () => {
  try {
    const authors = await Author.query()
    return authors
  } catch (err) {
    throw new Error('Could not get all authors')
  }
}

const booksByAuthor = async (obj, { id }, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const books = async ({ id }, params, context) => {
  const b = await Book.query().where('authorId', id)
  return b
}

const address = async ({ addressId }, params, context) => {
  const a = await Address.query().findOne('id', addressId)
  return a
}

const resolver = {
  Query: {
    authorById,
    allAuthors,
    booksByAuthor,
  },
  Author: {
    books,
    address,
  },
}

module.exports = resolver
