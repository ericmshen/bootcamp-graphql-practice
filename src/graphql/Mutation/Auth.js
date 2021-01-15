const User = require('../../models/User')
const { comparePassword, createToken } = require('../../lib/auth')

const login = async (_obj, { email, password }) => {
  const user = await User.query().findOne('email', email)
  if (!user) {
    throw new Error('No account matching email address')
  }
  const validPassword = await comparePassword(password, user.password)
  if (!validPassword) {
    throw new Error('Invalid password')
  }
  // successful authentication
  const payload = {
    id: user.id,
  }
  const token = createToken({ payload })
  return { user, token }
}

const resolver = {
  Mutation: {
    login,
  },
}

module.exports = resolver
