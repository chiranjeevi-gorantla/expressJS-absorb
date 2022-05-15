const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Routes
const travelRouter = require("./routes/tarvels");
app.use("/travels", travelRouter);

app.listen(3000, () => {
  console.log("Server Running");
});
