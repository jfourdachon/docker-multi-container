const keys = require('./keys');

// Express setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const valuesRouter = require('./routes/values.route');


const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mongoose Client Setup

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => {
  console.log('Connection Established');
});

mongoose.connection.on('reconnected', () => {
  console.log('Connection Reestablished');
});

mongoose.connection.on('disconnected', () => {
  console.log('Connection Disconnected');
});

mongoose.connection.on('close', () => {
  console.log('Connection Closed');
});

mongoose.connection.on('error', (error) => {
  console.log(`ERROR: ${error}`);
});

const dbConnect = async () => {
  await mongoose.connect(process.env.COMPLEX_DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

dbConnect().catch((error) => console.error({ error }));

// - ROUTES

app.get('/', (req, res) => {
    res.send('Hello world')
}) 
app.use('/values', valuesRouter);


//  - START SERVER
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});

