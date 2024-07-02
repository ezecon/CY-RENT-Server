const express = require('express');
const router = express.Router();
const RentHistory = require('../models/rent');

// Create an item
router.post('/', async (req, res) => {
    const item = new RentHistory({
        Rent: req.body.Rent, 
        Hour: req.body.Hour, 
        RenterID: req.body.RenterID, 
        OwnerID:req.body.OwnerID, 
        PostID:req.body.PostID, 
        RenterNum:req.body.RenterNum, 
        OwnerNum:req.body.OwnerNum,
    });
    try {
        const newItem = await item.save();
        res.status(201).json(newItem);
    } catch (err) {
        console.log("janina")
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const items = await RentHistory.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await RentHistory.findById(req.params.id);
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Rent History not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/check/:RenterID', async (req, res) => {
    try {
        const item = await RentHistory.findOne({ RenterID: req.params.RenterID });
        if (item) {
            res.json(item);
        } else {
            res.status(404).json({ message: 'Rent History not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

 
router.delete('/:id', async (req, res) => {
    try {
      await RentHistory.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item deleted' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

  router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await RentHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).send({ message: 'User not found' });
        res.send(updatedUser);
      } catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
      }
});



module.exports = router;
