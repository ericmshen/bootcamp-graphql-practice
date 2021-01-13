const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    welcome: String!
    authorById(id: ID!): Author!
    bookById(id: ID!): Book!
    publisherById(id: ID!): Publisher!
  }
  type Mutation {
    addAuthor(input: AddAuthorInput): Author!
    addPublisher(input: AddPublisherInput): Publisher!
    addBook(input: AddBookInput): Book!
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
  type Book {
    id: ID!
    title: String!
    language: String!
    numPages: Int!
    datePublished: Date
    bestSeller: Boolean
    author: Author!
    publisher: Publisher!
  }
  input AddBookInput {
    title: String!
    language: String!
    numPages: Int!
    datePublished: Date
    bestSeller: Boolean
    author: AddAuthorInput!
    publisher: AddPublisherInput!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: Address!
  }
  input AddPublisherInput {
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    address: AddAddressInput!
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
  scalar Date
`
