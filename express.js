let express = require("express");
const path = require("path");
const app = express();
app.listen(8000);
app.use((req, res, next) => {
  next();
});
app.use(express.static("public"));
app.get("/", (req, res) => {
  // res.send("hello NodeJs");
  res.sendFile(path.resolve("public/index.html"));
});
