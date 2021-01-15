const merge = require('lodash.merge')
const Author = require('./Author')
const Book = require('./Book')
const Publisher = require('./Publisher')
const Address = require('./Address')
// const Auth = require('./Auth')

const resolvers = [Author, Book, Publisher, Address]

module.exports = merge(...resolvers)
