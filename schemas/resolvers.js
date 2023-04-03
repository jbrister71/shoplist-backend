const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password');
        },
        /* listItems: async (parent, { username }) => {
            const params = username ? { username } : {};
            return ShopList.find(params);
        } */
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            
            return { user };
        },
        /* addListItem: async (parent, args, context) => {
            const listItem = await ShopList.create({ ...args });

            await User.findByIdAndUpdate
        } */
    }
}

module.exports = resolvers;