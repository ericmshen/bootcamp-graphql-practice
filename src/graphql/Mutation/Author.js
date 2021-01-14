const Author = require('../../models/Author')
const Address = require('../../models/Address')

const addAuthor = async (obj, {
  input: {
    firstName, lastName, age, email, numBooksPublished, address,
  },
}) => {
  try {
    const existingAddress = await Address.query().findOne({
      street: address.street,
      city: address.city,
      state: address.state,
      zip: address.zip,
    })
    if (!existingAddress) {
      const newAddress = await Address.query().insert({
        street: address.street,
        city: address.city,
        state: address.state,
        zip: address.zip,
      })
      const author = await Author.query().insert({
        firstName,
        lastName,
        age,
        numBooksPublished,
        email,
        addressId: newAddress.id,
      }).returning('*')
      return author
    }
    const author = await Author.query().insert({
      firstName,
      lastName,
      age,
      numBooksPublished,
      email,
      addressId: existingAddress.id,
    }).returning('*')
    return author
  } catch (err) {
    throw new Error("Couldn't insert author")
  }
}

const resolver = {
  Mutation: {
    addAuthor,
  },
}

module.exports = resolver
