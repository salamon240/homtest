const router = require("express").Router();
const List = require("../models/List ");

//CREATE

router.post("/", async (req, res) => {
  
    const newList = new List(req.body);
    try {
      const saveList = await newList.save();
      res.status(201).json(saveList);
    } catch (err) {
      res.status(500).json(err);
    }

});

//UPDATE

router.put("/:id", async (req, res) => {
 
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedList);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

//DELETE

router.delete("/:id",  async (req, res) => {
  
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("The Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } 
);
router.get("/", async (req, res) => {
    
  try {
      const list = await List.find();
      res.status(200).json(list.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
 

});

module.exports = router;