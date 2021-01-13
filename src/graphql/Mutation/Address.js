/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
const Address = require('../../models/Address')

const addAddress = async (obj, { street, city, state, zip }, context) => {
  const add = Address.query().insert({
    street: street,
    city: city,
    state: state,
    zip: zip,
  }).returning('*')
}

const resolver = {
  Mutation: {
    addAddress,
  },
}

module.exports = resolver
