const express = require("express");
const PORT = 6446;

const app = express();

app.get("/", (req, res) => {
  try {
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
});

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
