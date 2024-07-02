const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Create an item
router.post('/', async (req, res) => {
    const item = new Item({
        name: req.body.name,
        description: req.body.description,
        district: req.body.district,
        city: req.body.city,
        time: req.body.time,
        price: req.body.price,
        image: req.body.image,
        category:req.body.version,
        user: req.body.user,
        num: req.body.num,
        uid:req.body.userID,
    });
    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { category } = req.body;
  
      const item = await Item.findByIdAndUpdate(
        id,
        { category },
        { new: true }
      );
  
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update item' });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      await Item.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });
 

module.exports = router;
