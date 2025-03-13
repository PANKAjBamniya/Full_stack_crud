const express = require("express");
const connectDB = require("./config/db_config");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4040;

// DB connect
connectDB();

// Body-Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Crud Api");
});

//  todo Route

app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
