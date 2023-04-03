const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type ShopList {
        _id: ID
        username: String
        name: String
        price: Float
        store: String
        persist: Boolean
        bought: Boolean
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
        addShopList(name: String!, price: Float!, store: String!, persist: Boolean!): ShopList
    }
`;

module.exports = typeDefs;