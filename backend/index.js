const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoute = require("./route/authRoute");

dotenv.config();

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("JWT Auth API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

