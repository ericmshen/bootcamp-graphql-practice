const Publisher = require('../../models/Publisher')
const Address = require('../../models/Address')

const addPublisher = async (obj, {
  input: {
    company, phoneNumber, numBooksPublished, address,
  },
}) => {
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
    const publisher = await Publisher.query().insert({
      company,
      phoneNumber,
      numBooksPublished,
      addressId: newAddress.id,
    })
    return publisher
  }
  const publisher = await Publisher.query().insert({
    company,
    phoneNumber,
    numBooksPublished,
    addressId: existingAddress.id,
  })
  return publisher
}

const resolver = {
  Mutation: {
    addPublisher,
  },
}

module.exports = resolver
