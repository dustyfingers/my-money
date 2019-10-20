const express = require("express"),
  helmet = require("helmet"),
  cors = require("cors"),
  mongoose = require("mongoose");

const server = express();

// * server middleware
server.use(express.json());
server.use(helmet());
server.use(cors());

// db connection
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// sanity route
server.get("/", (req, res) => {
  res.send(`
    <h2>BUDGET THAT MONEY BOI 🤑</h2>
    `);
});

module.exports = server;
