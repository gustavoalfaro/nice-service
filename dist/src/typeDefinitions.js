"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const typeDefinitions = graphql_tag_1.default `
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
`;
exports.default = typeDefinitions;
//# sourceMappingURL=typeDefinitions.js.map