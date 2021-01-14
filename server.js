require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./dbinit");
const books = require("./api/books");
const errorHandler = require("./middleware/error");
const app = express();
const PORT = 5000;

connectDB();

console.log(connectDB());

app.use(cors());
app.use(express.json());

app.use("/books", books);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
