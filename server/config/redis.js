const redis = require('redis');

export const redisClient = redis.createClient({
    host: keys.redisHost,
    port: keys.redisPort,
    retry_stategy: () => 1000,
  });
  export const redisPublisher = redisClient.duplicate();