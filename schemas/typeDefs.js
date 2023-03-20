const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type ShopList {
        _id: ID
        username: String
        name: String
        Price: Float
        Store: String
        Persist: Boolean
        Bought: Boolean
    }

    type User {
        _id: ID
        username: String
        email: String
        shopList: [ShopList]
    }

    type Query {
        users: [User]
        shopList(username: String!): [shopList]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
    }
`;

module.exports = typeDefs;