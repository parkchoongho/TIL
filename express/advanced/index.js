const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user");
const article = require("./routes/article");

const app = express();

app.use((req, res, next) => {
  mongoose
    .connect("mongodb://localhost/express-advanced", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => {
      console.log("DB Connected! ");
      next();
    })
    .catch(error => next(error));
});

app.use(express.json());

app.use("/api/user", user);
app.use("/api/article", article);
app.use(() => {
  mongoose.disconnect().then(() => {
    console.log("DB Disconnected!");
  });
});

app.listen(3000, () => console.log("서버 작동 중..."));
