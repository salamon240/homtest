const router = require("express").Router();
const Product = require("../models/Proudct");

//CREATE

router.post("/", async (req, res) => {
  
    const newProduct = new Product(req.body);
    try {
      const saveProduct = await newProduct.save();
      res.status(201).json(saveProduct);
    } catch (err) {
      res.status(500).json(err);
    }

});

//UPDATE

router.put("/:id", async (req, res) => {
 
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
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




//GET RANDOM


//GET ALL

router.get("/", async (req, res) => {
    
        try {
            const products = await Product.find();
            res.status(200).json(products.reverse());
          } catch (err) {
            res.status(500).json(err);
          }
       
    
});

module.exports = router;