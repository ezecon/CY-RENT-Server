
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/topUsers');



// Verify Token API
router.post('/', (req, res) => {
  res.json({ valid: true, decoded: { email: req.userEmail } });
});

// Update NID Image URL API
router.put('/',  async (req, res) => {
  const { email, imageUrl } = req.body;
  try {
    const user = await User.findOneAndUpdate({ email }, { nidImage: imageUrl, nidCheck: 1 }, { new: true });
    if (user) {
      res.status(200).json({ message: 'NID image URL updated successfully', user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update NID image URL', error });
  }
});

module.exports = router;
