// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const postRoutes = require("./routes/postRoutes");

// const app = express();

// // Middleware
// app.use(express.json({ limit: "50mb" })); // For JSON payloads
// app.use(express.urlencoded({ extended: true, limit: "50mb" })); // For URL-encoded form data
// app.use(cors()); // Enable CORS

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));

// // Routes
// app.use("/api/posts", postRoutes);

// // Server Initialization
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const postRoutes = require("./routes/postRoutes");

// const app = express();

// // Middleware
// app.use(express.json({ limit: "50mb" })); // For JSON payloads
// app.use(express.urlencoded({ extended: true, limit: "50mb" })); // For URL-encoded form data
// app.use(cors()); // Enable CORS

// // MongoDB Connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("Connected to MongoDB Atlas"))
//   .catch((error) => console.error("Error connecting to MongoDB:", error));

// // Routes
// app.use("/api/posts", postRoutes);

// // Server Initialization
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");
const authRoutes = require("./routes/authRoutes"); // Add this
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const app = express();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage configuration for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "worknix_posts",
    allowed_formats: ["jpg", "png", "jpeg", "mp4"],
  },
});
const upload = multer({ storage });

// Middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Routes
app.use("/api/posts", upload.single("media"), postRoutes);
app.use("/api/auth", authRoutes); // Add this

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});