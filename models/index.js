const mongoose = require("mongoose")
const mongoURI = 'mongodb://localhost:27017/monika';

// stablish a connection
mongoose.connect(mongoURI)
.then(() => {
    console.log('Mongoose connection done');
  })
  .catch((e) => {
    console.log('Mongoose connection error');
    console.error(e);
  });


// When successfully connected
mongoose.connection.on('connected', () => {
  console.debug('Mongoose default connection open to ' + mongoURI);
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.error('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.info('Mongoose default connection disconnected');
});



module.exports = mongoose.connection