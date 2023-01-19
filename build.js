/* eslint-disable no-console */
const express = require("express");
const next = require("next");

const NODE_ENV = "production"; //development
const PORT = 3000;

const port = parseInt(PORT, 10) || 3000;
const app = next({
  dir: ".", // base directory where everything is, could move to src later
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();
    // Default catch-all handler to allow Next.js to handle all other routes
    server.all("*", (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err) {
        throw err;
      }
      console.log(`> Ready on port ${port} [${NODE_ENV}]`);
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
