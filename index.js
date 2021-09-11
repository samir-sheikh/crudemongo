require("dotenv").config();

const express = require("express");

const app = express();

const cors = require("cors");

const port = process.env.PORT;
const database = require('./database')




const userRaout = require('./raouts/User');
//cross origine for chnage the wapsite urls
app.use(cors());
app.use('/api/user' , userRaout);

//other raouts working

// default raout

app.get("/", (req, res) => {
  return res.status(200).json({
    status: true,
    massage: "Default Raout",
  });
});

app.listen(4000, () => {
  console.log(`server is running ${port}`);
});
