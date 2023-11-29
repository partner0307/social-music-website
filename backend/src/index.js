require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const middlewarePassport = require("./config/passport");

const { LostErrorHandler } = require("./config/exceptionHandlers/handler.js");

const routes = require("./routes");
const dbConnection = require("./dbConn/mongoose");
const corsOptions = require("./config/cors/cors.js");

/* 
  1. INITIALIZE EXPRESS APPLICATION 🏁
*/
const app = express();
const PORT = process.env.PORT || 8000;

/* 
  2. APPLICATION MIDDLEWARES AND CUSTOMIZATIONS 🪛
*/

// app.use(cors(corsOptions)); // Enable Cross Origin Resource Sharing
// app.options("*", cors(corsOptions));
app.use(cors("*"));
app.use(bodyParser.json());
app.use(express.static('upload'));
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
passport.use(middlewarePassport);

// App modular routes
app.use("/api", routes);

app.use(LostErrorHandler); // 404 error handler middleware

dbConnection.then(() => {
  console.log("---Database is connected !!---");
  app.emit("ready");
});

app.get("*", (req, res) => {
  fs.readFile('./client/build/index.html', { encoding: 'utf-8' }, (err, data) => {
    if(!data)
      res.send('Error occurred in client/build/index.html');
    else
      res.send(data);
  })
});

app.on("ready", () => {
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
});
