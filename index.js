const BookModel = require('./models/Book-model');  ///////////////////<<<<<<<<<<<<<<<<<<
const arrayO = require("./booksArray");  ///////////////////<<<<<<<<<<<<<<<<<<
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
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/book", booksRouter);
app.use("/",sessionRouter);

