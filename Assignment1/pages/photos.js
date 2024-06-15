const express = require('express');
const router = express.Router();
const Photo = require('../models/photo');

// Get all photos
router.get('/', async (req, res) => {
  try {
    const photos = await Photo.find();
    res.render('photos', { title: 'Photos', photos });
  } catch (err) {
    res.status(500).send(err);
  }
});

// Add a new photo
router.post('/add', async (req, res) => {
  const { title, description, price, url, category, stock } = req.body;
  const photo = new Photo({ title, description, price, url, category, stock });

  try {
    await photo.save();
    res.redirect('/photos');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
