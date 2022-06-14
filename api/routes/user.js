const router = require("express").Router();
const User = require("../models/User");
//register( craetin=post, update=put ,fetch=get)
router.post("/", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password:req.body.password
  });
  try {
    const user = await newUser.save();

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get
router.get("/", async (req, res) => {
    
  try {
      const user = await User.find();
      res.status(200).json(user.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
 

});

module.exports = router;
