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




import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";
import { useSelector } from "react-redux"; // Use Redux instead of UserContext
import { formatDistanceToNow } from "date-fns";

const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
};

const PostCard = ({ post, setPosts }) => {
  const user = useSelector((state) => state.user); // Access the entire user object from Redux store
  const { username, companyName, profilePic } = user || {}; // Safely destructure with fallback

  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [localLikes, setLocalLikes] = useState(post.likes || 0);
  const [localComments, setLocalComments] = useState(post.comments || []);
  const [commentText, setCommentText] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  // Use the username or companyName from Redux store
  const displayName = username || companyName || "Unknown User";
  const avatar = profilePic || "https://placehold.co/40/008080/FFF?text=U";

  // Format timestamp
  const timeAgo = post.createdAt
    ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
    : "Unknown time";

  // Check if post is already liked
  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
    setIsLiked(likedPosts.includes(post._id));
  }, [post._id]);

  // Handle Like
  const handleLike = async () => {
    if (isLiked) return;

    setLocalLikes((prev) => prev + 1);
    setIsLiked(true);

    try {
      const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to like post");

      const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
      likedPosts.push(post._id);
      localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    } catch (error) {
      setLocalLikes((prev) => prev - 1);
      setIsLiked(false);
    }
  };

  // Handle Adding Comment
  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    try {
      const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: commentText }),
      });

      if (!response.ok) throw new Error("Failed to add comment");

      setLocalComments((prevComments) => [...prevComments, commentText]);
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  // Handle Delete Post
  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const response = await fetch(`${API_BASE_URL}/${post._id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete post");
      setPosts((prev) => prev.filter((p) => p._id !== post._id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={avatar} alt={displayName} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h3 className="font-semibold">{displayName}</h3>
            <p className="text-sm text-gray-500">{timeAgo}</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={() => setShowOptions(!showOptions)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <MoreVertical size={20} className="text-gray-500" />
          </button>
          {showOptions && (
            <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md py-2 z-10">
              <button
                onClick={handleDelete}
                className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      <p className="mt-4">{post.description}</p>
      {post.mediaUrl && (
        <div className="mt-4 -mx-4">
          {post.mediaType?.startsWith("image") ? (
            <img src={post.mediaUrl} alt="Post Media" className="w-full" />
          ) : (
            <video controls className="w-full">
              <source src={post.mediaUrl} type={post.mediaType} />
            </video>
          )}
        </div>
      )}

      <div className="mt-4 flex items-center gap-6">
        <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
          <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
          <span>{localLikes}</span>
        </button>
        <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
          <MessageCircle size={20} />
          <span>{localComments.length}</span>
        </button>
        <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
          <Share2 size={20} />
        </button>
      </div>

      {showComments && (
        <div className="mt-4">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            className="border p-2 w-full rounded-md"
          />
          <button onClick={handleAddComment} className="mt-2 bg-teal-600 text-white px-4 py-2 rounded-md">
            Comment
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default Post;