const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server runnin on port: " + port);
});
