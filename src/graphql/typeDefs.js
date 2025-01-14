const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    allBooks: [Book!]! 
    allAuthors: [Author!]! 
    allPublishers: [Publisher!]! 
    welcome: String! 
    authorById(id: ID!): Author! 
    bookById(id: ID!): Book! 
    publisherById(id: ID!): Publisher! 
    booksByAuthor(id: ID!): [Book!]!
    booksByPublisher(id: ID!): [Book!]!
  }
  type Mutation {
    addAuthor(input: AddAuthorInput!): Author!
    addPublisher(input: AddPublisherInput!): Publisher!
    addBook(input: AddBookInput!): Book!
    addAddress(input: AddAddressInput!): Address!
    login(input: RegisterInput!): AuthReturn!
  }
  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    age: Int!
    email: String!
    numBooksPublished: Int!
    addressId: ID!
    address: Address
    books: [Book!]
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
    bestseller: Boolean
    authorId: ID!
    author: Author
    publisherId: ID!
    publisher: Publisher
  }
  input AddBookInput {
    title: String!
    language: String!
    numPages: Int!
    datePublished: Date
    bestseller: Boolean
    # author: AddAuthorInput!
    # publisher: AddPublisherInput!
    authorId: ID!
    publisherId: ID!
  }
  type Publisher {
    id: ID!
    company: String!
    phoneNumber: String!
    numBooksPublished: Int!
    addressId: ID!
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
  type User {
    id: ID!
    email: String!
    password: String!
  }
  type AuthReturn {
    token: String!
    user: User!
  }
  input RegisterInput { 
    email: String!
    password: String!
  }
  scalar Date
`
