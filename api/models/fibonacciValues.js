const mongoose = require('mongoose');

const fibonacciValuesSchema = new mongoose.Schema({
    values: {
        type: [Number],
      }
});

const FibValues = mongoose.model('fibonacci_values', fibonacciValuesSchema);

module.exports = FibValues;