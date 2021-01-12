const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const fibonacciValuesSchema = new mongoose.Schema({
    values: {
        type: [number],
      }
});

const FibValues = mongoose.model('Fibonacci_Values', fibonacciValuesSchema);

module.exports = FibValues;