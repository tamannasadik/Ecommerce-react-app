// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(bodyParser.json());
// app.use(cors());

// In-memory array to store products
// let products = [
//   {
//     id: 1,
//     name: 'Gaming Laptop',
//     quantity: 10,
//     price: 1500,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Laptops', 'Gaming'],
//   },
//   {
//     id: 2,
//     name: 'Wireless Mouse',
//     quantity: 10,
//     price: 50,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Accessories', 'Peripherals'],
//   },
//   {
//     id: 3,
//     name: 'Mechanical Keyboard',
//     quantity: 10,
//     price: 100,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Accessories', 'Peripherals'],
//   },
//   {
//     id: 4,
//     name: 'External Hard Drive',
//     quantity: 10,
//     price: 120,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Storage', 'Accessories'],
//   },
//   {
//     id: 5,
//     name: 'Graphics Card',
//     quantity: 10,
//     price: 500,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Components', 'Gaming'],
//   },
//   {
//     id: 6,
//     name: 'Portable SSD',
//     quantity: 10,
//     price: 200,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Storage', 'Accessories'],
//   },
//   {
//     id: 7,
//     name: 'Gaming Monitor',
//     quantity: 10,
//     price: 300,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Monitors', 'Gaming'],
//   },
//   {
//     id: 8,
//     name: 'All-in-One Printer',
//     quantity: 10,
//     price: 150,
//     image: 'https://via.placeholder.com/150',
//     categories: ['Peripherals', 'Printers'],
//   },
// ];
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

let products= [

    {
      id: 15,
      name: 'Party Wear Gown',
    price: 1430,
     image: '/assets/dress2.PNG',
      categories: ['Women'],
    },
    {
          id: 1,
         name: 'Formal Shirt',
          price: 1500,
          image: '/assets/shirt-1.PNG',
          categories: ['Men'],
        },
  
        {
          id: 29,
          name: 'Sneakers',
        price: 2000,
         image: '/assets/shoes1.PNG',
          categories: ['Shoe'],
        },
         {
            id: 4,
            name: 'Casual Shirt',
            price: 1300,
            image: '/assets/shirt-3.PNG',
            categories: ['Men'],
          },
  
          {
            id: 5,
            name: 'Party Wear Saree',
            price: 4500,
            image: '/assets/saree1.PNG',
            categories: ['Women'],
          },
  
          {
            id: 8,
            name: 'panjabi',
            price: 1500,
            image: '/assets/panjabi1.PNG',
            categories: ['Men'],
          },
  
          {
            id: 9,
            name: 'Apple Watch',
          price: 6000,
           image: '/assets/appleWatch.PNG',
            categories: ['Electronics'],
          },
          {
            id: 10,
            name: 'BookShelf',
          price: 1400,
           image: '/assets/bookshelf.PNG',
            categories: ['Home Decor'],
          },
          {
            id: 11,
            name: 'Borqua',
          price: 1500,
           image: '/assets/borqua1.PNG',
            categories: ['Women'],
          },
          {
            id: 3,
            name: 'Casual Shirt',
            price: 1000,
            image: '/assets/shirt-3.PNG',
            categories: ['Men'],
          },
          {
            id: 7,
            name: 'Party Wear Saree',
            price: 3500,
            image: '/assets/saree3.PNG',
            categories: ['Women'],
          },
          {
            id: 19,
            name: 'Shirt & Pant',
          price: 1350,
           image: '/assets/kid3.PNG',
            categories: ['Kids'],
          },
          {
            id: 12,
            name: 'Abaya',
          price: 1900,
           image: '/assets/borqua2.PNG',
            categories: ['Women'],
          },
          {
            id: 13,
            name: 'CeraVe Moisturizer',
          price: 2200,
           image: '/assets/CeraVe.PNG',
            categories: ['Skin Care'],
          },
          {
            id: 14,
            name: 'Gown',
          price: 1500,
           image: '/assets/dress1.PNG',
            categories: ['Women'],
          },
          {
            id: 19,
            name: 'Party Frock',
          price: 1350,
           image: '/assets/kid2.PNG',
            categories: ['Kids'],
          },    
          {
            id: 17,
            name: 'Gown',
          price: 1500,
           image: '/assets/dress4.PNG',
            categories: ['Women'],
          },

          {
            id: 24,
            name: 'dell laptop',
          price: 85000,
           image: '/assets/laptop1.PNG',
            categories: ['Electronics'],
          },
          
          {
            id: 23,
            name: 'Panjabi for kid',
          price: 1000,
           image: '/assets/kid6.PNG',
            categories: ['Kids'],
          },
          
          {
            id: 25,
            name: 'macFoundation',
          price: 3500,
           image: '/assets/macFoundation.PNG',
            categories: ['Make Up'],
          },
          {
            id: 6,
            name: 'Party Wear Saree',
            price: 5000,
            image: '/assets/saree2.PNG',
            categories: ['Women'],
          },
          {
            id: 20,
            name: 'Shirt-Pant',
          price: 1400,
           image: '/assets/kid3.PNG',
            categories: ['Kids'],
          },
          {
            id: 26,
            name: 'LipStick set',
          price: 650,
           image: '/assets/handaiyan.PNG',
            categories: ['Make Up'],
          },
          {
            id: 16,
            name: 'Kurti',
          price: 1050,
           image: '/assets/dress3.PNG',
            categories: ['Women'],
          },
          {
            id: 27,
            name: 'Maskara',
          price: 600,
           image: '/assets/maskara.PNG',
            categories: ['Make Up'],
          },
          {
            id: 28,
            name: 'Ordinary Sirum',
          price: 2000,
           image: '/assets/ordinary.PNG',
            categories: ['Skin Care'],
          },
 
          {
            id: 21,
            name: 'Shirts',
          price: 1550,
           image: '/assets/kid4.PNG',
            categories: ['Kids'],
          },
          {
            id: 31,
            name: 'Shoes',
          price: 1500,
           image: '/assets/shoes3.PNG',
            categories: ['Shoe'],
          },
          {
            id: 32,
            name: 'Snail96',
          price: 1800,
           image: '/assets/snail96.PNG',
            categories: ['Skin Care'],
          },
          {
            id: 33,
            name: 'Samsung Tv',
          price: 40000,
           image: '/assets/tv1.PNG',
            categories: ['Electronics'],
          },
          {
            id: 34,
            name: 'SWall Hanging',
          price: 350,
           image: '/assets/wallHanging.PNG',
            categories: ['Home Decor'],
          },
          
          {
            id: 22,
            name: 'Ramper',
          price: 1500,
           image: '/assets/kid5.PNG',
            categories: ['Kids'],
          },
          {
            id: 30,
            name: 'Party Shoes',
          price: 1200,
           image: '/assets/shoes2.PNG',
            categories: ['Shoe'],
          },
          {
            id: 2,
        name: 'Casual Shirt',
        price: 1200,
        image: '/assets/shirt-2.PNG',
        categories: ['Men'],
          },
    
          {
            id: 35,
            name: 'WoodenCave',
          price: 400,
           image: '/assets/woodenCave.PNG',
            categories: ['Home Decor'],
          },
          {
            id: 18,
            name: 'Dress for kids',
          price: 900,
           image: '/assets/kid1.PNG',
            categories: ['Kids'],
          },
  ];
   
// Get all products (with category filter)
app.get("/api/products", (req, res) => {
    const { category } = req.query;
    let filters = [];
  
    if (typeof category === "string") {
      filters = [category.toLowerCase()];
    } else if (Array.isArray(category) && category.length) {
      filters = category.map((cat) => cat.toLowerCase());
    }
  
    if (!filters.length) {
      return res.json(products); // ✅ Fixed: Added `return` to prevent double response
    }
  
    const filteredProducts = products.filter((product) =>
      product.categories.some((cat) => filters.includes(cat.toLowerCase()))
    );
  
    return res.json(filteredProducts);
  });
  
  // Get a product by ID
  app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
  
    return res.json(product);
  });
  
  // Create a new product
  app.post("/api/products", (req, res) => {
    const { name, quantity, price, image, categories } = req.body;
    if (!name || !quantity || !price || !categories) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    const newProduct = {
      id: products.length ? products[products.length - 1].id + 1 : 1,
      name,
      quantity,
      price,
      image: image || "https://via.placeholder.com/150",
      categories,
    };
  
    products.push(newProduct);
    return res.status(201).json(newProduct);
  });
  
  // Update an existing product
  app.put("/api/products/:id", (req, res) => {
    const product = products.find((p) => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
  
    const { name, quantity, price, image, categories } = req.body;
  
    product.name = name || product.name;
    product.quantity = quantity || product.quantity;
    product.price = price || product.price;
    product.image = image || product.image;
    product.categories = categories || product.categories;
  
    return res.json(product);
  });
  
  // Delete a product
  app.delete("/api/products/:id", (req, res) => {
    const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
      return res.status(404).json({ message: "Product not found" });
    }
  
    const deletedProduct = products.splice(productIndex, 1);
    return res.json(deletedProduct);
  });
  
  // Search for products
  app.get("/api/search", (req, res) => {
    const { name, category } = req.query;
    let filteredProducts = products;
  
    if (name) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }
  
    if (category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.some((cat) =>
          cat.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
  
    return res.json(filteredProducts);
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
// app.get('/api/products', (req, res) => {
//   const { category } = req.query;
//   let filters = [];
//   if (typeof category === 'string') {
//     filters = [category.toLowerCase()];
//   } else if (Array.isArray(category) && category.length) {
//     filters = category.map((category) => category.toLowerCase());
//   }
//   if (!filters.length) {
//      res.json(products);
//   }
//   res.json(
//     products.filter((product) =>
//       product.categories.some((category) =>
//         filters.includes(category.toLowerCase())
//       )
//     )
//   );
// });

// Get a product by ID
// app.get('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p.id === parseInt(req.params.id));
//   if (!product) return res.status(404).json({ message: 'Product not found' });
//   res.json(product);
// });

// Create a new product
// app.post('/api/products', (req, res) => {
//   const newProduct = {
//     id: products.length ? products[products.length - 1].id + 1 : 1,
//     name: req.body.name,
//     quantity: req.body.quantity,
//     price: req.body.price,
//     vendor: req.body.vendor,
//     category: req.body.category,
//   };

//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// Update an existing product
// app.put('/api/products/:id', (req, res) => {
//   const product = products.find((p) => p.id === parseInt(req.params.id));
//   if (!product) return res.status(404).json({ message: 'Product not found' });

//   product.name = req.body.name || product.name;
//   product.quantity = req.body.quantity || product.quantity;
//   product.price = req.body.price || product.price;
//   product.vendor = req.body.vendor || product.vendor;
//   product.category = req.body.category || product.category;

//   res.json(product);
// });

// Delete a product
// app.delete('/api/products/:id', (req, res) => {
//   const productIndex = products.findIndex(
//     (p) => p.id === parseInt(req.params.id)
//   );
//   if (productIndex === -1)
//     return res.status(404).json({ message: 'Product not found' });

//   const deletedProduct = products.splice(productIndex, 1);
//   res.json(deletedProduct);
// });

// Search for products
// app.get('/api/search', (req, res) => {
//   const { name, vendor, category } = req.query;
//   let filteredProducts = products;

//   if (name) {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.name.toLowerCase().includes(name.toLowerCase())
//     );
//   }

//   if (vendor) {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.vendor.toLowerCase().includes(vendor.toLowerCase())
//     );
//   }

//   if (category) {
//     filteredProducts = filteredProducts.filter((product) =>
//       product.category.toLowerCase().includes(category.toLowerCase())
//     );
//   }

//   res.json(filteredProducts);
// });

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
