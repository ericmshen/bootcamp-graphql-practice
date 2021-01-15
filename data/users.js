const casual = require('casual')

casual.define('myUser', () => ({
  id: casual.uuid,
  email: casual.email,
  password: casual.password,
}))

const users = []

for (let i = 0; i < 5; ++i) {
  users.push(casual.myUser)
}

module.exports = users
