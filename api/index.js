const express = require("express");
const path = require('path');


const mongoose = require("mongoose");
const dontenv=require("dotenv")
const productRouter=require("./routes/product")
const listRouter=require("./routes/list")
const userRouter=require("./routes/user")
const app = express();
const PORT=process.env.PORT||8600

dontenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connecit apii");
  })
  .catch((err) => {
    console.log(err);
  });
  app.use(express.json());
  app.use("/api/user",userRouter);

  app.use("/api/product",productRouter);
  app.use("/api/list" ,listRouter);

//הוספתי את זה לפי המדריךך

if(process.env.NODE_ENV==='production')
{
  app.use(express.static('solappnwe/build'))
}
 /* app.use(express.static(path.join(__dirname, "/solappnew/build")));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/solappnew/build', 'index.html'));
  });+*/

app.listen(PORT, () => {});
