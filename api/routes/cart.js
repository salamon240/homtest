const router = require("express").Router();
const Cart = require("../models/Cart ");

//CREATE

router.post("/", async (req, res) => {
  
    const newCart = new Cart(req.body);
    try {
      const saveCart = await newCart.save();
      res.status(201).json(saveCart);
    } catch (err) {
      res.status(500).json(err);
    }

});

//UPDATE

router.put("/:id", async (req, res) => {
 
    try {
      const updatedCart = await car.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

//DELETE

router.delete("/:id",  async (req, res) => {
  
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("The Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } 
);
