const express = require("express");
const axios = require("axios");
var cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
const targetUrl = "https://logspace-langflow.hf.space";

// Enable CORS for all origins (change this in production if needed)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/proxy/api/v1/process/:id", async (req, res) => {
  try {
    const response = await axios.post(
      targetUrl + "/api/v1/process/" + req.params.id,
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error:error.response?.data.detail });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
});
