/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
const Address = require('../../models/Address')

const addAddress = async (obj, { input: { street, city, state, zip } }, context) => {
  const add = await Address.query().insertAndFetch({
    street,
    city,
    state,
    zip,
  }).returning('*')
  return add
}

const resolver = {
  Mutation: {
    addAddress,
  },
}

module.exports = resolver
