const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// const { authMiddleware }
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
    typeDefs,
    resolvers
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*if(process.env.NODE_ENV === 'production' ) {
    app.use(express.static(path.join(__dirname, '../shoplist-frontend/build')));
}*/

/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../shoplist-frontend/build/index.html'));
});*/

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start();

    server.applyMiddleware({ app });

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`Connected on port ${PORT}`);
        });
    });
};

startApolloServer(typeDefs, resolvers);