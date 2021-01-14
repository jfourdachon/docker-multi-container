const mongoose = require('mongoose');

const fibonacciValuesSchema = new mongoose.Schema({
    values: {
        type: [Number],
      }
});

const FibValues = mongoose.model('Fibonacci_Values', fibonacciValuesSchema);

module.exports = FibValues;