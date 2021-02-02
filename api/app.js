const keys = require('./keys');

// Express setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const compression = require('compression');

dotenv.config();


const valuesRouter = require('./routes/values.route');


const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(morgan('combined'));
app.use(compression());

// Mongoose Client Setup

// mongoose.Promise = Promise;

// mongoose.connection.on('connected', () => {
//   console.log('Connection Established');
// });

// mongoose.connection.on('reconnected', () => {
//   console.log('Connection Reestablished');
// });

// mongoose.connection.on('disconnected', () => {
//   console.log('Connection Disconnected');
// });

// mongoose.connection.on('close', () => {
//   console.log('Connection Closed');
// });

// mongoose.connection.on('error', (error) => {
//   console.log(`ERROR: ${error}`);
// });

// const dbConnect = async () => {
//   await mongoose.connect(process.env.COMPLEX_DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   });
// };

// dbConnect().catch((error) => console.error({ error }));

// - ROUTES

const allowedOrigins = ['https://j-unix.com']
const corsOptions = {
    origin: function (origin, callback) {
        console.log({origin})

        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true)
        } else {
          callback(new Error('Not allowed by CORS'))
        }
      }
};

if (process.env.NODE_ENV === 'development') {
    allowedOrigins.push('http://localhost:8080')
}

app.get('/', (req, res) => {
    res.send('Hello world')
}) 
app.use('/values', cors(corsOptions), valuesRouter);


//  - START SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});



