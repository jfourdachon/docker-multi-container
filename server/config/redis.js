const redis = require('redis');
const keys = require('../keys')

const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_stategy: () => 1000,
  });
 const redisPublisher = redisClient.duplicate();

 module.exports = {
     redisClient,
     redisPublisher
 }