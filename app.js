const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const multer = require("multer");

const app = express();

const PORT = 5000;

// app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(
  "assets/uploads",
  express.static(path.join(__dirname + "assets/uploads"))
);

const adminRouter = require("./routes/adminRouter");
const guestRouter = require("./routes/guestRouter");

app.use("/admin", adminRouter);
app.use("/", guestRouter);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/assets/uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = new Date.getTime() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

app.use(multer({ storage: storage }).single("file"));

// mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/porto", { useNewUrlParser: true })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("failed", err);
  });

app.listen(PORT, () => {
  console.log(`listen on port : ${PORT}`);
});
