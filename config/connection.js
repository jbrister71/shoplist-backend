const mongoose = require('mongoose');

mongoose.conntect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shoplist', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;