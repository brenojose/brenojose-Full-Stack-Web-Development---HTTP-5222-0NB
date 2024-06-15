const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('index', { title: 'Photo Haven', message: 'Welcome to the best PhotoShop website!' });
});

// About Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Us', message: 'Learn more about our Photo Haven.' });
});

// Services Page
router.get('/services', (req, res) => {
  res.render('services', { title: 'Our Services', message: 'These are the services we offer.' });
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Us', message: 'Get in touch with us.' });
});

module.exports = router;
