const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id: ID!): Author!
  }
  type Mutation {
    addAuthor(input: AddAuthorInput): Author!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    address: Address!
  }
  input AddAuthorInput {
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    address: AddAddressInput!
  }
  type Publisher {
  }
  type Address {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
  }
  input AddAddressInput {
    street: String!
    city: String!
    state: String!
    zip: String!
  }
`
