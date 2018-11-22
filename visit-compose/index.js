const express = require("express");
const app = express();
const redis = require("redis");

/* init */
const port = 8081;
const redisClient = redis.createClient({
  host: "redis-server"
});
redisClient.set("visit", "0");

const _getCurrVisit = () => {
  return new Promise(resolve => {
    redisClient.get("visit", (err, prevCount) => {
      resolve(parseInt(prevCount));
    });
  });
};

const _setCurrVisit = count => {
  redisClient.set("visit", count.toString());
};

app.get("/", async (req, res, next) => {
  count = await _getCurrVisit();

  // the curr visit will be added count to be 1
  count += 1;

  // save to redis
  _setCurrVisit(count);

  res.status(200).send({ count });
});

app.listen(port, () => {
  console.log("server up");
});
