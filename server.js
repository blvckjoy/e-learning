require("dotenv").config();
const express = require("express");
const connectDB = require("./src/config/db");
const PORT = process.env.PORT;

connectDB;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send("Welcome to E-LEARNING API");
});

const authRouter = require("./src/routes/auth");
const courseRouter = require("./src/routes/courses");

app.use("/api/auth", authRouter);
app.use("/api/courses", courseRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
