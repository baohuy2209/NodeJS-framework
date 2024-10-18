const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes/index.routes");
const db = require("./config/db/index");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET, // secret key for session
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db.connectDB();
routes(app);
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:{PORT}`);
});
