# 🛍️ Bagghut E-Commerce Platform

Full-stack e-commerce web application for premium bag retail with customer interface and admin dashboard.

## 🚀 Features

- User Authentication (Register/Login with JWT)
- Product Catalog with Advanced Filtering
- Shopping Cart & Checkout Process
- Order Management & Tracking
- Admin Dashboard with Analytics
- Real-time Inventory Management
- Geolocation & Store Locator
- Responsive Design

## 🛠️ Tech Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Fetch API, LocalStorage
- Leaflet.js (Maps)

**Backend:**
- Node.js, Express.js
- MongoDB, Mongoose
- JWT, bcrypt

## 📋 Prerequisites

- Node.js (v14+)
- MongoDB (v4.4+)
- npm

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/bagghut-ecommerce.git
cd bagghut-ecommerce
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Create `.env` file in backend folder
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/bagghut
JWT_SECRET=your_secret_key_here
FRONTEND_URL=http://localhost:5500
```

4. Seed the database
```bash
node scripts/seedProducts.js
```

5. Start the backend server
```bash
npm run dev
```

6. Open frontend
- Use Live Server extension in VS Code
- Right-click on `index.html` → Open with Live Server
- Or open `index.html` directly in browser

## 📂 Project Structure
```
bagghut-ecommerce/
├── frontend/
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── profile.html
│   ├── admin.html
│   └── ...
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── users.js
│   │   └── admin.js
│   ├── middleware/
│   │   └── auth.js
│   ├── scripts/
│   │   └── seedProducts.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🔑 Admin Access
```
Email: admin@bagghut.com
Password: admin123
```

## 📸 Screenshots

(Add screenshots of your website here)

## 👨‍💻 Author

Your Name - [GitHub Profile](https://github.com/YOUR_USERNAME)

## 📄 License

This project is open source and available under the MIT License.
```

---

### **Step 5: Organize Your Project Files**

Create this folder structure:
```
bagghut-ecommerce/
├── frontend/
│   ├── index.html
│   ├── products.html
│   ├── product-detail.html
│   ├── cart.html
│   ├── checkout.html
│   ├── login.html
│   ├── profile.html
│   ├── admin.html
│   ├── contact.html
│   ├── about.html
│   └── policies.html
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── products.js
│   │   ├── orders.js
│   │   ├── users.js
│   │   └── admin.js
│   ├── middleware/
│   │   └── auth.js
│   ├── scripts/
│   │   └── seedProducts.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── .gitignore
└── README.md
