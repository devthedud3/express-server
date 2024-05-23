const express = require("express");
const PORT = 6446;

const app = express();

app.get("/", (req, res) => {
  return res.json({ success: true });
});

app.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    if (!response.ok) throw Error("Response error");

    return res.json(data);
  } catch (e) {
    return res.json({ message: e.message });
  }
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
