const express = require("express");
const app = express();

/**
 * Get All Users
 * @name List Users
 * @path {GET} /api/users
 */
app.get("/api/users", (req, res) => {
  res.json({ users: [] });
});

app.get("/api/products", (req, res) => {
  res.json({ products: [] });
});

app.get("/api/auth", (req, res) => {
  res.json({ token: "xyz123" });
});

app.listen(3000);
console.log("Server on port", 3000);
