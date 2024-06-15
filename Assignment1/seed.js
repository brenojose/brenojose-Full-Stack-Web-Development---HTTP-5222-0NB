// This seed.js populates the database just in case, type -node seed.js- and then -npm start- in case the photos dont show properly
const mongoose = require('mongoose');
const Photo = require('./models/photo');

// variables from .env file
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI);

const seedPhotos = [
  {
    title: "Cute Little Dog",
    description: "Just a dog being cute, sorry about the price, he's just too cute",
    price: 300.00,
    url: "https://i.pinimg.com/564x/36/c4/74/36c47479d18fc06e8babec5eb3f85ddc.jpg",
    // https://br.pinterest.com/pin/414401603214180228/ - Pinterest - The smallest dog breeds in the world
    category: "Cute",
    stock: 10
  },
  {
    title: "Bunch of cats in a basket",
    description: "Another cute photo to show these cute cats",
    price: 40.00,
    url: "https://i.redd.it/8p7ax01uu3n71.jpg",
    //https://www.reddit.com/r/aww/comments/pmwrf2/a_basket_full_of_kittens_to_help_brighten_up_your/ - Reddit - A subreddit for cute and cuddly pictures
    category: "Cute",
    stock: 5
  },
  {
    title: "Aurora in the sky",
    description: "Beautiful view with an aurora borealis",
    price: 15.00,
    url: "https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2Fimages%2Farticle%2Fwhat-is-it-p150014_084rr-2000_0.jpg&w=1920&q=75",

    //https://travel.destinationcanada.com/en-ca/things-to-do/where-see-spectacular-northern-lights-canada - Northern Lights over Vermillion Lakes in Banff National Park - Credit: Travel Alberta
    category: "Nature",
    stock: 15
  },
  {
    title: "Winterwoods",
    description: "Simple yet majestic",
    price: 25.00,
    url: "https://www.plantingtree.com/cdn/shop/articles/winter-4680354_1280.jpg?v=1606233928",
    // https://hungryhippie.com.mt/Trees-To-Plant-In-Winter-Which-Trees-Where-1508049.html - Trees To Plant In Winter, Which Trees & Where
    category: "Nature",
    stock: 8
  }
];

async function seedDB() {
  await Photo.deleteMany({});
  await Photo.insertMany(seedPhotos);
  console.log("Database included :D");
  mongoose.connection.close();
}

seedDB().catch(err => {
  console.error(err);
  mongoose.connection.close();
});
