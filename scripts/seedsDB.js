const mongoose = require("mongoose");
const db = require("../models");
const fs = require('fs');
// const images = require("../client/public/assets/img/products");
// This file empties the products collection and inserts the products below
//Read product image data
function readImageData(path) {
  return Buffer.from(fs.readFileSync(path)).toString('base64');
}
//Mongoose connection
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/Shopsmart"
);
const productSeed = [
  {
    skunumber: 100000,
    productname: "Prairie Naturals Vitamin D3 1000IU 500 Softgels",
    categoryname: "Health",
    productdescription: "MS. Prairie Naturals Vitamin D3 is made with cholecalciferol, the most readily absorbed form. Be sure you get enough of this low-cost, highly valuable vitamin. You'll soon feel the difference that Vitamin D makes to your health and happiness.",
    price: 19.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/v/i/vit_d3_500_softgels_300ccwb12mb.jpg",
    stockquantity: 200,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 100001,
    productname: "Omega Alpha Vitamin D3 Unflavoured 120mL",
    categoryname: "Health",
    productdescription: "Helps in the normal development and maintenance of bones and teeth. A factor in the maintenance of good health.",
    price: 7.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/a/0/a0014008.jpg",
    stockquantity: 450,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 100002,
    productname: "Dutchman's Gold Raw Honey 1 Kg",
    categoryname: "Health",
    productdescription: "The Dutchman's Gold Raw Honey is our top selling honey product.  This pure, Raw Honey is unheated and unpasteurized. It contains all of the wonderful compounds that nature intended including naturally occurring bee pollen, propolis and beeswax.",
    price: 17.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/a/0/a0010940.jpg",
    stockquantity: 300,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 100003,
    productname: "Vega Sport Protein Chocolate 837g",
    categoryname: "Health",
    productdescription: "Help build and repair your muscles post-workout, and support recovery with Vega Sport® Protein. Next-level performance calls for a next level protein shake.",
    price: 39.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/a/0/a0006220_2.jpg",
    stockquantity: 100,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 100004,
    productname: "Kind Snacks Peanut Butter Dark Chocolate Granola Bars 5 Packs",
    categoryname: "Health",
    productdescription: "A sweet and salty snack that includes whole grains, roasted peanuts and dark chocolate.",
    price: 5.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/h/e/healthygrainsbars_peanutbutterdarkchocolate_5pack_english_side.png",
    stockquantity: 200,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 100005,
    productname: "Jamieson Vitamin B2 100mg 100 Tablets",
    categoryname: "Health",
    productdescription:
      "Jamieson Vitamin B2 (Riboflavin) 100 mg helps to metabolize amino acids and carbohydrates and promotes a healthy nervous system. It is involved in the synthesis of red blood cells, while also aiding in tissue formation.",
    price: 8.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/2/2/2209_vitamin_b2_100mg_en_large.jpg",
    stockquantity: 500,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 200000,
    productname: "The Soap Works Soap Tea Tree Oil 110g",
    categoryname: "Beauty",
    productdescription:
      "An all vegetable soap with famous Australian tea tree oil. Mildly astringent, non-irritating, antiseptic & anti-fungal. Excellent for shaving or shampoo.",
    price: 1.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/t/e/tea_tree_oil-rgb.jpg",    stockquantity: 1000,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 200001,
    productname: "The Soap Works Soap Aloe Vera 110g",
    categoryname: "Beauty",
    productdescription:
      "A pure castille soap that is lightly scented. Aloe Vera and Vitamin E added to heal and soothe the skin – a great all-purpose soap.",
    price: 1.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/a/l/aloe_with_vit._e-rgb.jpg",    stockquantity: 1000,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 200002,
    productname: "Andalou Naturals Full Volume Shampoo Lavender & Biotin 340mL",
    categoryname: "Beauty",
    productdescription:
      "The Lavender & Biotin Full Volume Shampoo is silicone and sulphate free, and uses Lavender to stimulate the hair follicles and Biotin-B Complex to add essential protein for thicker, fuller hair.",
    price: 9.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/s/0/s0200027.jpg",
    stockquantity: 200,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 200003,
    productname: "Derma E Natural Mineral Oil-Free Sunscreen SPF 30 56g",
    categoryname: "Beauty",
    productdescription:
      "Antioxidant Natural Sunscreen SPF 30 Oil-Free Face Lotion helps shield skin from harmful UVA/UVB rays, oxidative damage and premature signs of aging.",
    price: 20.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/a/0/a0011255.jpg",    stockquantity: 200,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 200004,
    productname:
      "Andalou Naturals Hand Cream Lavender Shea Butter + Cocoa Butter 100mL",
    categoryname: "Beauty",
    productdescription:
      "Soothing organic lavender, fair trade shea and cocoa butter absorb quickly, leaving hands nourished, protected, and ready to meet the day.",
    price: 8.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/s/0/s0200046.jpg",
    stockquantity: 100,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 200005,
    productname: "Lily of The Desert 99% Aloe Vera Gelly 342g",
    categoryname: "Beauty",
    productdescription:
      "Replenish moisture and hydrate your skin. Aloe vera has been known as nature's moisturizer for thousands of years, and Lily of the Desert's 99% Aloe Vera Gelly instantly cools the skin while hydrating at least 3 epidermal layers.",
    price: 11.99,
    productimage: "https://www.healthyplanetcanada.com/media/catalog/product/cache/1/image/275x/9df78eab33525d08d6e5fb8d27136e95/j/e/jelly.jpg",
    stockquantity: 100,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 300000,
    productname: "Lenovo IdeaPad 3 15.6 Touchscreen Laptop",
    categoryname: "Electronics",
    productdescription: "1.2 GHz Intel Core i3-1005G1 dual core processor with 8GB RAM provides great performance for your daily tasks.",
    price: 699.99,
    productimage: "https://www.lenovo.com/medias/lenovo-ideapad-3-15-almond-intel-hero.png?context=bWFzdGVyfHJvb3R8Mjc2NTE3fGltYWdlL3BuZ3xoMWUvaDU1LzEwODU5MzUxNDc0MjA2LnBuZ3wwMWIzNGFhY2M1MTljZTNiMzAwYmE3NGFjOWFiNjU2MWIxYzI4Y2I1YmJhOTM1NDVkNmZjNjVlZWYyZGEyNmIx",    stockquantity: 50,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 300001,
    productname: "Sony Over-Ear Noise Cancelling Headphones",
    categoryname: "Electronics",
    productdescription: "Sony Over-Ear Bluetooth headphones. Noise-canceling technology and a 40mm liquid crystal polymer driver.",
    price: 299.99,
    productimage: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/129/12909/12909349.jpg",    stockquantity: 100,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 300002,
    productname: "Sony ZV-1 Wi-Fi 20.1MP 2.9x Optical Zoom Digital Camera",
    categoryname: "Electronics",
    productdescription: "If you're a vlogger or content creator who wants to create quality images and videos, the Sony ZV-1 camera is your ideal companion.",
    price: 999.99,
    productimage: "https://multimedia.bbycastatic.ca/multimedia/products/400x400/146/14666/14666831_1.jpg",    stockquantity: 30,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 300003,
    productname: "Bose SoundLink Colour II Splashproof Bluetooth Wireless Speaker",
    categoryname: "Electronics",
    productdescription: "With a compact, splashproof design, this speaker is made to go where you go. And with enough juice per charge for up to 8 hours of listening.",
    price: 99.99,
    productimage: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/104/10482/10482673.jpg",    stockquantity: 100,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 300004,
    productname: "Lenovo Smart Clock Essential With Google Assistant",
    categoryname: "Electronics",
    productdescription: "Featuring a 4 screen that shows the time in easy-to-read LED digits, keep track of time all day and night thanks to its night light that provides optimal illumination in dark rooms.",
    price: 34.99,
    productimage: "https://www.lenovo.com/medias/lenovo-smart-clock-mini-subseries-hero.png?context=bWFzdGVyfHJvb3R8MjAxMjMzfGltYWdlL3BuZ3xoZDAvaGUzLzExMDEyODk4NzgzMjYyLnBuZ3wyZTY0MjY4OTkwNDA5YjMzMDRmNjZhMzU3ZTQwMGM4YjZlNDQ3OWZmNTUwOGI3MDM1MDllODUzNmM3ODU3ZjMy",    stockquantity: 100,
    productCreated: { type: Date, default: Date.now },
  },
  {
    skunumber: 300005,
    productname: "Insignia Digital Air Fryer - 5L/5.3QT",
    categoryname: "Electronics",
    productdescription: "Enjoy all your favourite fried foods in a healthier way, thanks to this Insignia digital air fryer. This small appliance doesn't require oil when frying.",
    price: 69.99,
    productimage: "https://multimedia.bbycastatic.ca/multimedia/products/400x400/137/13785/13785659.jpg",    stockquantity: 50,
    productCreated: { type: Date, default: Date.now },
  },
];

const cartSeed = [{
  useremail: "username@gmail.com",
  products: []
},
{
  useremail: "username1@gmail.com",
  products: []
},
{
  useremail: "username2@gmail.com",
  products: []
},
{
  useremail: "username3@gmail.com",
  products: []
},
{
  useremail: "username5@gmail.com",
  products: []
},]

db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Cart.remove({}).then(() => db.Cart.collection.insertMany(cartSeed)).then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  });