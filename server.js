const express = require("express");
const path = require("path");

const app = express();

app.use("/classes", express.static(path.join(__dirname, "classes")));
app.use(express.static(path.join(__dirname, ".")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
