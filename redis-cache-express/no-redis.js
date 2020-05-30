const express = require("express");
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors());
app.get("/data", async (req, res) => {
  try {
    const data = {
      "id": 3,
      "name": "이자바",
      "email": "java@gmail.com",
      "iat": 1590767182,
      "exp": 1590770792,
      "jti": "b3b84a09-759e-4ecc-a939-9932eabe0b9f"
    }
    return res.status(200).json({ result: data })
  } catch (error) {
    return Promise.reject(error);
  }
});
app.listen(PORT, () => console.log(`Server up and running on ${PORT}`));
