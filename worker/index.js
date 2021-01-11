const keys = require('./keys');
const redis = require('redis');
const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const subscription= client.duplicate();

const fib = (index) => {
  if (index < 2) return index;
  return fib(index - 1) + fib(index - 2)
};

subscription.on('message', (_, message) => {
    client.hset('values', message, fib(parseInt(message)))
})
subscription.subscribe('insert')