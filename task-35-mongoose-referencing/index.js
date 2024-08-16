const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));

// Import routes here
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.get("/", (req, res) => {
  res.json({
    message: "Welcome",
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
