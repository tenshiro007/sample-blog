const express = require('express')
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
require('dotenv').config()
const authRouter=require('./routers/auth')
const dashboardRouter=require('./routers/dashboard')

const app = express()
app.use(cors());    
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json())

app.use('/',dashboardRouter)
app.use('/auth', authRouter)

app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send({ message: err.message });
});

const port=process.env.PORT||8000
app.listen(port, () => {
    console.log(`server run at port ${port}`);
})
