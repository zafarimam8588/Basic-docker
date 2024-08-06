import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.json({
    message: "Everything is working fine",
  });
});

app.listen(3000, () => {
  console.log("Connect to port 3000");
});
