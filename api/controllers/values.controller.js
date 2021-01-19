const FibValues = require('../models/fibonacciValues');
const { redisClient, redisPublisher } = require('../config/redis');
const valuesController = {
  getAllValues: async (_, res) => {
    try {
      const response = await FibValues.find();
      return res.status(200).json({
        data: response,
      });
    } catch (err) {
      console.log({ err });
    }
  },
  getCurrentValue: async (req, res) => {
    redisClient.hgetall('values', (err, values) => {
      return res.status(200).json({
        status: 'success',
        data: values,
      });
    });
  },
  postValue: async (req, res) => {
    const index = req.body.index;
    if (parseInt(index > 40)) {
      return res.status(422).json({
        status: 'failed',
        message: 'Index too high',
      });
    }
    redisClient.hset('values', index, 'Nothing yet');
    redisPublisher.publish('insert', index);
    const updatedDoc = await FibValues.findOneAndUpdate({
      $push: { values: index },
    });
    if (!updatedDoc) {
      await FibValues.create({ values: [index] });
    }
    res.json({
      working: true,
    });
  },
};

module.exports = valuesController;
