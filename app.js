const express = require("express");
const bodyParse = require("body-parser");
const usersRoutes = require("./routes/userRoutes");
const mongodbConnection = require("./models/index");
const app = express();

app.use(bodyParse.json());
app.use(usersRoutes);

// server start
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
