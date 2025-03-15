// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const Post = require("../models/Post");

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure multer
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "video/mp4", "audio/mpeg"];
//     if (allowedMimeTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only jpg, jpeg, png, mp4, and mp3 files are allowed"), false);
//     }
//   },
// });

// // POST route to create a post
// router.post("/", upload.single("media"), async (req, res) => {
//   try {
//     console.log("Incoming Request Body:", req.body);
//     console.log("Incoming File:", req.file);

//     const { description } = req.body;

//     // Validate fields
//     if (!description || !req.file) {
//       return res.status(400).json({ error: "Description and media file are required" });
//     }

//     // Upload file to Cloudinary
//     const uploadToCloudinary = () =>
//       new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           { resource_type: "auto", folder: "worknix_posts" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         uploadStream.end(req.file.buffer);
//       });

//     const cloudinaryResult = await uploadToCloudinary();

//     // Save post to database
//     const newPost = new Post({
//       description,
//       mediaUrl: cloudinaryResult.secure_url,
//       mediaType: req.file.mimetype,
//     });

//     await newPost.save();

//     console.log("Post saved successfully:", newPost);

//     res.status(201).json({ message: "Post created successfully", post: newPost });
//   } catch (error) {
//     console.error("Error creating post:", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

// // PATCH route to like a post
// router.patch("/:id/like", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the post by ID and increment likes
//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { $inc: { likes: 1 } }, // Increment likes by 1
//       { new: true } // Return the updated document
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error("Error liking post:", error.message);
//     res.status(500).json({ error: "Failed to like the post" });
//   }
// });

// // POST route to add a comment to a post
// router.post("/:id/comment", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { user, text } = req.body;

//     if (!text || !user) {
//       return res.status(400).json({ error: "User and comment text are required" });
//     }

//     // Find the post by ID and add a comment
//     const post = await Post.findById(id);
//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     post.comments.push({ user, text });
//     await post.save();

//     res.status(201).json(post);
//   } catch (error) {
//     console.error("Error adding comment:", error.message);
//     res.status(500).json({ error: "Failed to add comment" });
//   }
// });

// // GET route to fetch all posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 }); // Fetch posts in descending order of creation
//     res.status(200).json(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error.message);
//     res.status(500).json({ error: "Failed to fetch posts" });
//   }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const Post = require("../models/Post");

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "video/mp4", "audio/mpeg"];
//     if (allowedMimeTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only jpg, jpeg, png, mp4, and mp3 files are allowed"), false);
//     }
//   },
// });

// // POST route to create a new post
// router.post("/", upload.single("media"), async (req, res) => {
//   try {
//     console.log("Incoming Request Body:", req.body);
//     console.log("Incoming File:", req.file);

//     const { description, username } = req.body;

//     // Validate required fields
//     if (!description || !req.file || !username) {
//       return res.status(400).json({ error: "Description, username, and media file are required" });
//     }

//     // Upload media to Cloudinary
//     const uploadToCloudinary = () =>
//       new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           { resource_type: "auto", folder: "worknix_posts" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         uploadStream.end(req.file.buffer);
//       });

//     const cloudinaryResult = await uploadToCloudinary();

//     // Save post to database
//     const newPost = new Post({
//       description,
//       mediaUrl: cloudinaryResult.secure_url,
//       mediaType: req.file.mimetype,
//       user: { name: username }, // Store username
//       likes: 0, // Default value
//       comments: [], // Default empty array
//     });

//     await newPost.save();

//     console.log("Post saved successfully:", newPost);
//     res.status(201).json({ message: "Post created successfully", post: newPost });
//   } catch (error) {
//     console.error("Error creating post:", error.message);
//     res.status(500).json({ error: "Failed to create post" });
//   }
// });

// // PATCH route to like a post
// router.patch("/:id/like", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the post by ID and increment likes
//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { $inc: { likes: 1 } }, // Increment likes by 1
//       { new: true }
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error("Error liking post:", error.message);
//     res.status(500).json({ error: "Failed to like the post" });
//   }
// });

// // POST route to add a comment to a post
// router.post("/:id/comment", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { user, text } = req.body;

//     if (!text || !user) {
//       return res.status(400).json({ error: "User and comment text are required" });
//     }

//     // Find the post by ID and add a comment
//     const post = await Post.findById(id);
//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     post.comments.push({ user, text });
//     await post.save();

//     res.status(201).json(post);
//   } catch (error) {
//     console.error("Error adding comment:", error.message);
//     res.status(500).json({ error: "Failed to add comment" });
//   }
// });

// // GET route to fetch all posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 }); // Fetch posts in descending order
//     res.status(200).json(posts);
//   } catch (error) {
//     console.error("Error fetching posts:", error.message);
//     res.status(500).json({ error: "Failed to fetch posts" });
//   }
// });

// module.exports = router;
// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const Post = require("../models/Post");

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Configure multer for file uploads
// const storage = multer.memoryStorage();
// const upload = multer({
//   storage,
//   fileFilter: (req, file, cb) => {
//     const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg", "video/mp4", "audio/mpeg"];
//     if (allowedMimeTypes.includes(file.mimetype)) {
//       cb(null, true);
//     } else {
//       cb(new Error("Only jpg, jpeg, png, mp4, and mp3 files are allowed"), false);
//     }
//   },
// });

// // ✅ POST route to create a new post
// router.post("/", upload.single("media"), async (req, res) => {
//   try {
//     console.log("Incoming Request Body:", req.body);
//     console.log("Incoming File:", req.file);

//     const { description, username } = req.body;

//     // Validate required fields
//     if (!description || !req.file || !username) {
//       return res.status(400).json({ error: "Description, username, and media file are required" });
//     }

//     // Upload media to Cloudinary
//     const uploadToCloudinary = () =>
//       new Promise((resolve, reject) => {
//         const uploadStream = cloudinary.uploader.upload_stream(
//           { resource_type: "auto", folder: "worknix_posts" },
//           (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//           }
//         );
//         uploadStream.end(req.file.buffer);
//       });

//     const cloudinaryResult = await uploadToCloudinary();

//     // Save post to database
//     const newPost = new Post({
//       description,
//       mediaUrl: cloudinaryResult.secure_url,
//       mediaType: req.file.mimetype,
//       user: { name: username }, // Store username
//       likes: 0, // Default value
//       comments: [], // Default empty array
//     });

//     await newPost.save();

//     console.log("✅ Post saved successfully:", newPost);
//     res.status(201).json({ message: "Post created successfully", post: newPost });
//   } catch (error) {
//     console.error("❌ Error creating post:", error.message);
//     res.status(500).json({ error: "Failed to create post" });
//   }
// });

// // ✅ PATCH route to like a post
// router.patch("/:id/like", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find the post by ID and increment likes
//     const updatedPost = await Post.findByIdAndUpdate(
//       id,
//       { $inc: { likes: 1 } }, // Increment likes by 1
//       { new: true }
//     );

//     if (!updatedPost) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     console.error("❌ Error liking post:", error.message);
//     res.status(500).json({ error: "Failed to like the post" });
//   }
// });

// // ✅ POST route to add a comment to a post
// router.post("/:id/comment", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { user, text } = req.body;

//     if (!text || !user) {
//       return res.status(400).json({ error: "User and comment text are required" });
//     }

//     // Find the post by ID and add a comment
//     const post = await Post.findById(id);
//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     post.comments.push({ user, text });
//     await post.save();

//     res.status(201).json(post);
//   } catch (error) {
//     console.error("❌ Error adding comment:", error.message);
//     res.status(500).json({ error: "Failed to add comment" });
//   }
// });

// // ✅ GET route to fetch all posts
// router.get("/", async (req, res) => {
//   try {
//     const posts = await Post.find().sort({ createdAt: -1 }); // Fetch posts in descending order
//     res.status(200).json(posts);
//   } catch (error) {
//     console.error("❌ Error fetching posts:", error.message);
//     res.status(500).json({ error: "Failed to fetch posts" });
//   }
// });

// // ✅ DELETE route to remove a post
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find and delete the post
//     const deletedPost = await Post.findByIdAndDelete(id);
//     if (!deletedPost) {
//       return res.status(404).json({ error: "Post not found" });
//     }

//     res.status(200).json({ message: "✅ Post deleted successfully", deletedPost });
//   } catch (error) {
//     console.error("❌ Error deleting post:", error.message);
//     res.status(500).json({ error: "Failed to delete post" });
//   }
// });

// module.exports = router;


