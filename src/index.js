const express = require("express");
const axios = require("axios");
const app = express();
const responseTime = require("response-time");
const Redis = require("ioredis");
const { promisify } = require("util");

const client = new Redis({
  host: "localhost",
  port: 6379,
});

const GET_ASYN = promisify(client.get).bind(client);
const SET_ASYN = promisify(client.set).bind(client);

client.on("error", function (err) {
  console.error("Error de Redis:", err);
});

app.use(responseTime());

app.get("/character", async (req, res) => {
  try {
    // Response from cache
    const reply = await GET_ASYN("characters");
    if (reply) {
      return res.json(JSON.parse(reply));
      const response = await axios.get("https://rickandmortyapi.com/api/character");
    } else {
      await SET_ASYN("characters", JSON.stringify(response.data));
      console.log(reply);

      res.json(response.data);
    }
  } catch (error) {
    console.log(error);
  }
});

app.get("/character/:id", async (req, res) => {

  console.log(req.originalUrl);

  try {
    const reply = await GET_ASYN(req.originalUrl);

  if (reply) {
    return res.json(JSON.parse(reply));
  }

  const response = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.id}`);

  await SET_ASYN(req.originalUrl, JSON.stringify(response.data));

  return res.json(response.data);
  } catch (error) {
    return res.status(error.response.status).json({message: error.message})
  }

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
