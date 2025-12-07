const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

// Sample products data
const products = [
  {
    name: "Classic Leather Backpack",
    description: "Premium quality leather backpack perfect for daily use. Features multiple compartments, padded laptop sleeve, and durable construction. Water-resistant material ensures your belongings stay safe.",
    price: 2499,
    oldPrice: 3999,
    category: "backpack",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"],
    stock: 15,
    material: "leather",
    color: "brown",
    badge: "SALE",
    rating: 4.5,
    totalReviews: 128,
    featured: true
  },
  {
    name: "Designer Handbag",
    description: "Elegant designer handbag crafted from genuine leather. Perfect for formal occasions and daily use. Includes adjustable strap and multiple pockets for organization.",
    price: 3999,
    oldPrice: 5999,
    category: "handbag",
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"],
    stock: 8,
    material: "leather",
    color: "black",
    badge: "NEW",
    rating: 4.8,
    totalReviews: 95,
    featured: true
  },
  {
    name: "Professional Laptop Bag",
    description: "Sleek professional laptop bag with dedicated compartments for up to 15.6-inch laptops. Padded shoulder straps and multiple organizational pockets make it ideal for work and travel.",
    price: 1899,
    oldPrice: 2999,
    category: "laptop",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"],
    stock: 20,
    material: "nylon",
    color: "black",
    badge: "SALE",
    rating: 4.6,
    totalReviews: 210,
    featured: true
  },
  {
    name: "Travel Duffel Bag",
    description: "Spacious travel duffel bag perfect for weekend getaways. Features reinforced handles, adjustable shoulder strap, and water-resistant fabric. Multiple compartments for easy organization.",
    price: 2999,
    oldPrice: 4499,
    category: "travel",
    images: ["https://images.unsplash.com/photo-1622260614927-e93a9c9c7d0a?w=400"],
    stock: 12,
    material: "polyester",
    color: "blue",
    badge: "HOT",
    rating: 4.7,
    totalReviews: 156,
    featured: true
  },
  {
    name: "Canvas Tote Bag",
    description: "Eco-friendly canvas tote bag perfect for shopping and everyday use. Durable construction with reinforced handles. Lightweight and easy to carry.",
    price: 899,
    oldPrice: 1499,
    category: "tote",
    images: ["https://images.unsplash.com/photo-1590739225017-e383d739e5e4?w=400"],
    stock: 25,
    material: "canvas",
    color: "green",
    badge: "SALE",
    rating: 4.3,
    totalReviews: 89,
    featured: false
  },
  {
    name: "Urban Backpack",
    description: "Modern urban backpack with sleek design. Perfect for students and young professionals. Multiple compartments and padded back panel for comfort.",
    price: 1999,
    oldPrice: 2999,
    category: "backpack",
    images: ["https://images.unsplash.com/photo-1622260614927-e93a9c9c7d0a?w=400"],
    stock: 18,
    material: "nylon",
    color: "black",
    badge: "NEW",
    rating: 4.4,
    totalReviews: 112,
    featured: false
  },
  {
    name: "Executive Leather Briefcase",
    description: "Premium executive briefcase made from genuine leather. Perfect for business professionals. Features dedicated laptop compartment and multiple organizational pockets.",
    price: 4999,
    oldPrice: 7999,
    category: "laptop",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"],
    stock: 5,
    material: "leather",
    color: "brown",
    badge: "PREMIUM",
    rating: 4.9,
    totalReviews: 67,
    featured: true
  },
  {
    name: "Casual Messenger Bag",
    description: "Stylish casual messenger bag perfect for everyday use. Made from durable canvas with adjustable shoulder strap. Multiple pockets for organization.",
    price: 1499,
    oldPrice: 2199,
    category: "messenger",
    images: ["https://images.unsplash.com/photo-1622260614927-e93a9c9c7d0a?w=400"],
    stock: 30,
    material: "canvas",
    color: "blue",
    badge: "SALE",
    rating: 4.2,
    totalReviews: 143,
    featured: false
  },
  {
    name: "Luxury Designer Handbag",
    description: "Exclusive luxury handbag from premium collection. Handcrafted from finest leather with exquisite attention to detail. Limited edition piece.",
    price: 5999,
    oldPrice: 8999,
    category: "handbag",
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"],
    stock: 3,
    material: "leather",
    color: "red",
    badge: "LUXURY",
    rating: 5.0,
    totalReviews: 45,
    featured: true
  },
  {
    name: "Sports Backpack",
    description: "Lightweight sports backpack perfect for gym and outdoor activities. Water-resistant material with multiple compartments. Breathable back panel.",
    price: 1799,
    oldPrice: 2499,
    category: "backpack",
    images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400"],
    stock: 22,
    material: "polyester",
    color: "red",
    badge: "NEW",
    rating: 4.5,
    totalReviews: 98,
    featured: false
  },
  {
    name: "Large Travel Suitcase Bag",
    description: "Extra large travel bag perfect for long trips. Durable polyester construction with reinforced corners. Multiple compartments and wheels for easy mobility.",
    price: 3499,
    oldPrice: 4999,
    category: "travel",
    images: ["https://images.unsplash.com/photo-1622260614927-e93a9c9c7d0a?w=400"],
    stock: 10,
    material: "polyester",
    color: "black",
    badge: "SALE",
    rating: 4.6,
    totalReviews: 134,
    featured: false
  },
  {
    name: "Mini Crossbody Bag",
    description: "Compact crossbody bag perfect for essentials. Stylish design with adjustable strap. Ideal for casual outings and parties.",
    price: 1299,
    oldPrice: 1999,
    category: "handbag",
    images: ["https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400"],
    stock: 15,
    material: "leather",
    color: "brown",
    badge: "SALE",
    rating: 4.4,
    totalReviews: 76,
    featured: false
  }
];

// Connect to MongoDB and seed products
const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bagghut');
    
    console.log('📡 MongoDB Connected');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('🗑️  Existing products cleared');
    
    // Insert new products
    await Product.insertMany(products);
    console.log('✅ Products seeded successfully');
    console.log(`📦 Total products added: ${products.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();