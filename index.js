const BookModel = require("./models/Book-model"); ///////////////////<<<<<<<<<<<<<<<<<<
const arrayO = require("./booksArray"); ///////////////////<<<<<<<<<<<<<<<<<<
const express = require("express");
const cors = require("cors");
const booksRouter = require("./routes/books-routes");
const adminRouter = require("./routes/admins-routes");
const userRouter = require("./routes/user-routes");
const sessionRouter = require("./routes/sessionManagement-routes");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// connnecting to database
mongoose
  .connect(process.env.MONGO_URL)
  .then((_) => {
    console.log("connecting to database is successful");
    // server listening
    app.listen(process.env.APP_PORT, (_) => {
      console.log("server is up");
    });
  })
  .catch((error) => {
    console.log("error in database connection : ", error);
  });
// ----------------------------
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://your-vercel-backend-url.vercel.app",
    ], // Specify allowed origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
    credentials: true, // If you need to handle cookies or authentication
  })
);
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/book", booksRouter);
app.use("/", sessionRouter);
