const express = require("express");
const next = require("next");

process.env.NODE_ENV = process.env.NODE_ENV || "production";
process.env.PORT = process.env.PORT || 3000;

const nextApp = next({
  dir: ".",
  dev: process.env.NODE_ENV === "development",
});

nextApp
  .prepare()
  .then(() => {
    const expressApp = express();

    expressApp.all("*", (req, res) => {
      let nextRequestHandler = nextApp.getRequestHandler();
      return nextRequestHandler(req, res);
    });

    expressApp.listen(process.env.PORT, (err) => {
      if (err) {
        throw err;
      }

      console.log(
        "> Ready on http://localhost:" +
          process.env.PORT +
          " [" +
          process.env.NODE_ENV +
          "]"
      );
    });
  })
  .catch((err) => {
    console.log("An error occurred, unable to start the server");
    console.log(err);
  });
