/* eslint-disable no-unused-vars */
const Publisher = require('../../models/Publisher')
const Book = require('../../models/Book')

const publisherById = async ({ id }) => {
  const p = await Publisher.query().findOne('id', id)
  return p
}

const allPublishers = async () => {
  const p = await Publisher.query()
  return p
}

const booksByPublisher = async (obj, { id }, context) => {
  const b = await Book.query().where('publisherId', id)
  return b
}

const resolver = {
  Query: {
    allPublishers,
    publisherById,
    booksByPublisher,
  },
}

module.exports = resolver
