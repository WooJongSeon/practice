const express = require("express");
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;
app.get("/data", async (req, res) => {
  try {
    const result = await axios.get("https://api.spacexdata.com/v3/launches/latest")
    return res.status(200).json({ result: result.data })
  } catch (error) {
    return Promise.reject(error);
  }
});
app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));
