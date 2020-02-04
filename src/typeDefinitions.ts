import gql from 'graphql-tag'

const typeDefinitions = gql`
  type User @key(fields: "id") {
    id: ID!
    username: String
    email: String
    firstName: String
    lastName: String
    telephones: [Telephone]
    otherField: [OtherField]
  }

  type OtherField {
    id: ID!
    name: String
  }

  type Telephone {
    id: ID!
    phone: Int
    description: String
  }

  extend type Query {
    user(username: String!): User
  }
`

export default typeDefinitions