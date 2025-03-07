// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from 'lucide-react';

// export function Post({ post }) {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState('');
//   const [localLikes, setLocalLikes] = useState(post.likes);
//   const [localComments, setLocalComments] = useState(post.comments);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes(prev => isLiked ? prev - 1 : prev + 1);
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const comment = {
//       id: Date.now(),
//       user: 'Current User',
//       content: newComment,
//       likes: 0,
//     };

//     setLocalComments([...localComments, comment]);
//     setNewComment('');
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="p-4">
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 rounded-full overflow-hidden">
//               <img
//                 src={post.user.avatar}
//                 alt={post.user.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <div>
//               <h3 className="font-semibold">{post.user.name}</h3>
//               <p className="text-sm text-gray-500">{post.timestamp}</p>
//             </div>
//           </div>
//           <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//         </div>

//         <p className="mt-4">{post.content}</p>

//         {post.image && (
//           <div className="mt-4 -mx-4">
//             <img src={post.image} alt="" className="w-full" />
//           </div>
//         )}

//         <div className="mt-4 flex items-center gap-6">
//           <button
//             onClick={handleLike}
//             className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//           >
//             <Heart
//               size={20}
//               className={isLiked ? 'fill-red-500 text-red-500' : ''}
//             />
//             <span>{localLikes}</span>
//           </button>
//           <button
//             onClick={() => setShowComments(!showComments)}
//             className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//           >
//             <MessageCircle size={20} />
//             <span>{localComments.length}</span>
//           </button>
//           <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//             <Share2 size={20} />
//           </button>
//         </div>

//         {showComments && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             className="mt-4 space-y-4"
//           >
//             {localComments.map((comment) => (
//               <div key={comment.id} className="flex items-start gap-3">
//                 <div className="w-8 h-8 rounded-full overflow-hidden">
//                   <img
//                     src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//                     alt={comment.user}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="flex-grow bg-gray-50 rounded-lg p-3">
//                   <h4 className="font-medium">{comment.user}</h4>
//                   <p>{comment.content}</p>
//                   <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
//                     <button className="hover:text-teal-600 transition-colors">Like</button>
//                     <button className="hover:text-teal-600 transition-colors">Reply</button>
//                     <span>{comment.likes} likes</span>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//                   alt="Current user"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="flex-grow relative">
//                 <input
//                   type="text"
//                   placeholder="Write a comment..."
//                   value={newComment}
//                   onChange={(e) => setNewComment(e.target.value)}
//                   className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//                 />
//                 <button
//                   type="submit"
//                   disabled={!newComment.trim()}
//                   className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-teal-600 hover:text-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Send size={20} />
//                 </button>
//               </div>
//             </form>
//           </motion.div>
//         )}
//       </div>
//     </motion.div>
//   );
// }

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from 'lucide-react';

// const Post = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState('');
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1));
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const comment = {
//       id: Date.now(),
//       user: 'Current User',
//       content: newComment,
//       likes: 0,
//     };

//     setLocalComments([...localComments, comment]);
//     setNewComment('');
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full overflow-hidden">
//             <img
//               src={post.user?.avatar || 'https://via.placeholder.com/40'}
//               alt={post.user?.name || 'User'}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div>
//             <h3 className="font-semibold">{post.user?.name || 'Unknown User'}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.content}</p>

//       {post.image && (
//         <div className="mt-4 -mx-4">
//           <img src={post.image} alt="Post" className="w-full" />
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? 'fill-red-500 text-red-500' : ''} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment.id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img src="https://via.placeholder.com/40" alt={comment.user} className="w-full h-full object-cover" />
//               </div>
//               <div className="flex-grow bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.content}</p>
//                 <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
//                   <button className="hover:text-teal-600 transition-colors">Like</button>
//                   <button className="hover:text-teal-600 transition-colors">Reply</button>
//                   <span>{comment.likes} likes</span>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <div className="w-8 h-8 rounded-full overflow-hidden">
//               <img src="https://via.placeholder.com/40" alt="Current user" className="w-full h-full object-cover" />
//             </div>
//             <div className="flex-grow relative">
//               <input
//                 type="text"
//                 placeholder="Write a comment..."
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
//               />
//               <button
//                 type="submit"
//                 disabled={!newComment.trim()}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-teal-600 hover:text-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Send } from "lucide-react";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const user = JSON.parse(sessionStorage.getItem("user")) || {
//     username: "Guest",
//     avatar: "https://via.placeholder.com/40", // Default avatar
//   };

//   // Fetch posts from backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/posts"); // Update API URL if needed
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchPosts();
//   }, []);

//   // Handle Like Functionality
//   const handleLike = async (postId) => {
//     try {
//       const res = await fetch(`http://localhost:5000/posts/${postId}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (res.ok) {
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post._id === postId ? { ...post, likes: post.likes + 1 } : post
//           )
//         );
//       }
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   // Handle Comment Submission
//   const handleComment = async (e, postId, newComment, setNewComment) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const commentData = {
//       user: user.username,
//       content: newComment,
//     };

//     try {
//       const res = await fetch(`http://localhost:5000/posts/${postId}/comment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(commentData),
//       });

//       if (res.ok) {
//         const updatedPost = await res.json();
//         setPosts((prevPosts) =>
//           prevPosts.map((post) =>
//             post._id === postId ? updatedPost : post
//           )
//         );
//         setNewComment("");
//       }
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <motion.div
//           key={post._id}
//           className="bg-white rounded-xl shadow-md p-4 mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           layout
//         >
//           {/* Post Header */}
//           <div className="flex items-center gap-3">
//             <img
//               src={post.user?.avatar || "https://via.placeholder.com/40"}
//               alt={post.user?.name || "User"}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//               <p className="text-sm text-gray-500">{post.timestamp}</p>
//             </div>
//           </div>

//           {/* Post Content */}
//           <p className="mt-4">{post.description}</p>

//           {post.mediaUrl && (
//             <div className="mt-4">
//               {post.mediaType.startsWith("image") ? (
//                 <img src={post.mediaUrl} alt="Post Media" className="w-full rounded-lg" />
//               ) : (
//                 <video controls className="w-full rounded-lg">
//                   <source src={post.mediaUrl} type={post.mediaType} />
//                 </video>
//               )}
//             </div>
//           )}

//           {/* Like & Comment Buttons */}
//           <div className="mt-4 flex items-center gap-6">
//             <button
//               onClick={() => handleLike(post._id)}
//               className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//             >
//               <Heart size={20} />
//               <span>{post.likes}</span>
//             </button>
//             <button
//               className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//             >
//               <MessageCircle size={20} />
//               <span>{post.comments.length}</span>
//             </button>
//           </div>

//           {/* Comments Section */}
//           <motion.div className="mt-4 space-y-4">
//             {post.comments.map((comment, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <img
//                   src={comment.avatar || "https://via.placeholder.com/40"}
//                   alt={comment.user}
//                   className="w-8 h-8 rounded-full object-cover"
//                 />
//                 <div className="bg-gray-50 rounded-lg p-3 flex-grow">
//                   <h4 className="font-medium">{comment.user}</h4>
//                   <p>{comment.content}</p>
//                 </div>
//               </div>
//             ))}

//             {/* Comment Input */}
//             <form
//               onSubmit={(e) => handleComment(e, post._id, post.newComment, (value) => {
//                 setPosts((prevPosts) =>
//                   prevPosts.map((p) => (p._id === post._id ? { ...p, newComment: value } : p))
//                 );
//               })}
//               className="flex items-center gap-3 mt-4"
//             >
//               <img src={user.avatar} alt={user.username} className="w-8 h-8 rounded-full object-cover" />
//               <input
//                 type="text"
//                 placeholder="Write a comment..."
//                 value={post.newComment || ""}
//                 onChange={(e) =>
//                   setPosts((prevPosts) =>
//                     prevPosts.map((p) => (p._id === post._id ? { ...p, newComment: e.target.value } : p))
//                   )
//                 }
//                 className="w-full px-4 py-2 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//               />
//               <button
//                 type="submit"
//                 disabled={!post.newComment?.trim()}
//                 className="p-1 text-teal-600 hover:text-teal-700 disabled:opacity-50"
//               >
//                 <Send size={20} />
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Send } from "lucide-react";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   const user = JSON.parse(sessionStorage.getItem("user")) || {
//     username: "Guest",
//     avatar: "https://via.placeholder.com/40", // Default avatar
//   };

//   // Fetch posts from backend
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch("https://worknix-addpost.onrender.com/api/posts");
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <motion.div
//           key={post._id}
//           className="bg-white rounded-xl shadow-md p-4 mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           layout
//         >
//           <div className="flex items-center gap-3">
//             <img
//               src={post.user?.avatar || "https://via.placeholder.com/40"}
//               alt={post.user?.name || "User"}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//               <p className="text-sm text-gray-500">{post.timestamp}</p>
//             </div>
//           </div>
//           <p className="mt-4">{post.description}</p>
//           {post.mediaUrl && (
//             <div className="mt-4">
//               {post.mediaType.startsWith("image") ? (
//                 <img src={post.mediaUrl} alt="Post Media" className="w-full rounded-lg" />
//               ) : (
//                 <video controls className="w-full rounded-lg">
//                   <source src={post.mediaUrl} type={post.mediaType} />
//                 </video>
//               )}
//             </div>
//           )}
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// export default Post;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1));
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;
//     const comment = {
//       id: Date.now(),
//       user: "Current User",
//       content: newComment,
//       likes: 0,
//     };
//     setLocalComments([...localComments, comment]);
//     setNewComment("");
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.user?.avatar || "https://via.placeholder.com/40"}
//             alt={post.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment.id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt={comment.user}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.content}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLocalLikes((prev) => (isLiked ? prev - 1 : prev + 1));
//   };

//   const handleComment = (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;
//     const comment = {
//       id: Date.now(),
//       user: "Current User",
//       content: newComment,
//       likes: 0,
//     };
//     setLocalComments([...localComments, comment]);
//     setNewComment("");
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.user?.avatar || "https://via.placeholder.com/40"}
//             alt={post.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment.id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://via.placeholder.com/40"
//                   alt={comment.user}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.content}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   // **Handle Like API Call**
//   const handleLike = async () => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Failed to like post");

//       const updatedPost = await response.json();
//       setLocalLikes(updatedPost.likes);
//       setIsLiked(true);
//     } catch (error) {
//       console.error("Error liking post:", error);
//     }
//   };

//   // **Handle Comment API Call**
//   const handleComment = async (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "Current User", text: newComment }),
//       });

//       if (!response.ok) throw new Error("Failed to add comment");

//       const updatedPost = await response.json();
//       setLocalComments(updatedPost.comments);
//       setNewComment("");
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img
//             src={post.user?.avatar || "https://placehold.co/40"}
//             alt={post.user?.name || "User"}
//             className="w-10 h-10 rounded-full object-cover"
//           />
//           <div>
//             <h3 className="font-semibold">{post.user?.name || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{post.timestamp}</p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment._id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden">
//                 <img
//                   src="https://placehold.co/40"
//                   alt={comment.user}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.text}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         console.log("Fetched Posts:", data); // Debugging
//         setPosts(data);
//       } catch (err) {
//         console.error("Error fetching posts:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);

//   const username = post.user?.name || post.username || "Unknown User";
//   const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";

//   // Handle Like
//   const handleLike = async () => {
//     if (isLiked) return;

//     setLocalLikes((prev) => prev + 1);
//     setIsLiked(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Failed to like post");
//     } catch (error) {
//       console.error("Error liking post:", error);
//       setLocalLikes((prev) => prev - 1);
//       setIsLiked(false);
//     }
//   };

//   // Handle Comment
//   const handleComment = async (e) => {
//     e.preventDefault();
//     if (!newComment.trim()) return;

//     const tempComment = { _id: Date.now().toString(), user: "Current User", text: newComment };
//     setLocalComments((prev) => [...prev, tempComment]);
//     setNewComment("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ user: "Current User", text: newComment }),
//       });

//       if (!response.ok) throw new Error("Failed to add comment");

//       const updatedPost = await response.json();
//       setLocalComments(updatedPost.comments);
//     } catch (error) {
//       console.error("Error adding comment:", error);
//       setLocalComments((prev) => prev.filter((c) => c._id !== tempComment._id));
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <h3 className="font-semibold">{username}</h3>
//             <p className="text-sm text-gray-500">
//               {new Date(post.timestamp).toLocaleString("en-US", {
//                 dateStyle: "medium",
//                 timeStyle: "short",
//               })}
//             </p>
//           </div>
//         </div>
//         <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//           <MoreVertical size={20} className="text-gray-500" />
//         </button>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button
//           onClick={handleLike}
//           className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors"
//         >
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button
//           onClick={() => setShowComments(!showComments)}
//           className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors"
//         >
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {showComments && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 space-y-4">
//           {localComments.map((comment) => (
//             <div key={comment._id} className="flex items-start gap-3">
//               <div className="w-8 h-8 rounded-full overflow-hidden bg-black"></div>
//               <div className="bg-gray-50 rounded-lg p-3">
//                 <h4 className="font-medium">{comment.user}</h4>
//                 <p>{comment.text}</p>
//               </div>
//             </div>
//           ))}

//           <form onSubmit={handleComment} className="flex items-center gap-3 mt-4">
//             <input
//               type="text"
//               placeholder="Write a comment..."
//               value={newComment}
//               onChange={(e) => setNewComment(e.target.value)}
//               className="w-full px-4 py-2 pr-10 rounded-full border border-gray-200 focus:ring-2 focus:ring-teal-500"
//             />
//             <button type="submit" disabled={!newComment.trim()} className="text-teal-600">
//               <Send size={20} />
//             </button>
//           </form>
//         </motion.div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Send, Trash2 } from "lucide-react";

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [newComment, setNewComment] = useState("");
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);
//   const [showOptions, setShowOptions] = useState(false);

//   const username = post.user?.name || post.username || "Unknown User";
//   const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";

//   const handleLike = async () => {
//     if (isLiked) return;
//     setLocalLikes((prev) => prev + 1);
//     setIsLiked(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) throw new Error("Failed to like post");
//     } catch (error) {
//       setLocalLikes((prev) => prev - 1);
//       setIsLiked(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete post");
//       setPosts((prev) => prev.filter((p) => p._id !== post._id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <h3 className="font-semibold">{username}</h3>
//             <p className="text-sm text-gray-500">
//               {new Date(post.timestamp).toLocaleString("en-US", {
//                 dateStyle: "medium",
//                 timeStyle: "short",
//               })}
//             </p>
//           </div>
//         </div>
//         <div className="relative">
//           <button onClick={() => setShowOptions(!showOptions)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//           {showOptions && (
//             <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md py-2 z-10">
//               <button
//                 onClick={handleDelete}
//                 className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Post;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Trash2 } from "lucide-react";
// import { useUserContext } from "../UserContext";  // Importing useUserContext

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const { username } = useUserContext();  // Getting the username from context
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);
//   const [showOptions, setShowOptions] = useState(false);

//   const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";  // Default avatar if not available

//   const handleLike = async () => {
//     if (isLiked) return;
//     setLocalLikes((prev) => prev + 1);
//     setIsLiked(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) throw new Error("Failed to like post");
//     } catch (error) {
//       setLocalLikes((prev) => prev - 1);
//       setIsLiked(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete post");
//       setPosts((prev) => prev.filter((p) => p._id !== post._id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <h3 className="font-semibold">{username || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">
//               {new Date(post.timestamp).toLocaleString("en-US", {
//                 dateStyle: "medium",
//                 timeStyle: "short",
//               })}
//             </p>
//           </div>
//         </div>
//         <div className="relative">
//           <button onClick={() => setShowOptions(!showOptions)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//           {showOptions && (
//             <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md py-2 z-10">
//               <button
//                 onClick={handleDelete}
//                 className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Post;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Trash2 } from "lucide-react";
// import { useUserContext } from "../UserContext"; // Importing useUserContext

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const { user } = useUserContext();  // Getting the user from context
//   const username = user?.username || "Unknown User";  // Default to Unknown User
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);
//   const [showOptions, setShowOptions] = useState(false);

//   const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";  // Default avatar if not available

//   const handleLike = async () => {
//     if (isLiked) return;
//     setLocalLikes((prev) => prev + 1);
//     setIsLiked(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) throw new Error("Failed to like post");
//     } catch (error) {
//       setLocalLikes((prev) => prev - 1);
//       setIsLiked(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete post");
//       setPosts((prev) => prev.filter((p) => p._id !== post._id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <h3 className="font-semibold">{username}</h3>
//             <p className="text-sm text-gray-500">
//               {new Date(post.timestamp).toLocaleString("en-US", {
//                 dateStyle: "medium",
//                 timeStyle: "short",
//               })}
//             </p>
//           </div>
//         </div>
//         <div className="relative">
//           <button onClick={() => setShowOptions(!showOptions)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//           {showOptions && (
//             <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md py-2 z-10">
//               <button
//                 onClick={handleDelete}
//                 className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Post;




// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Trash2 } from "lucide-react";
// import { useUserContext } from "../UserContext";
// import { formatDistanceToNow } from "date-fns"; 

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const { username } = useUserContext();
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);
//   const [showOptions, setShowOptions] = useState(false);

//   const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";  

//   // Format createdAt timestamp into "2 minutes ago"
//   const timeAgo = post.createdAt
//     ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
//     : "Unknown time";

//   // ✅ Check if the user has already liked this post
//   useEffect(() => {
//     const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//     setIsLiked(likedPosts.includes(post._id));
//   }, [post._id]);

//   const handleLike = async () => {
//     if (isLiked) return; // Prevent multiple likes

//     setLocalLikes((prev) => prev + 1);
//     setIsLiked(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) throw new Error("Failed to like post");

//       // ✅ Store liked post in localStorage
//       const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//       likedPosts.push(post._id);
//       localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      
//     } catch (error) {
//       setLocalLikes((prev) => prev - 1);
//       setIsLiked(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete post");
//       setPosts((prev) => prev.filter((p) => p._id !== post._id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <h3 className="font-semibold">{username || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{timeAgo}</p>
//           </div>
//         </div>
//         <div className="relative">
//           <button onClick={() => setShowOptions(!showOptions)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//           {showOptions && (
//             <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md py-2 z-10">
//               <button
//                 onClick={handleDelete}
//                 className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>
//     </motion.div>
//   );
// };

// export default Post;
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Share2, MoreVertical, Trash2 } from "lucide-react";
// import { useUserContext } from "../UserContext";
// import { formatDistanceToNow } from "date-fns"; 

// const API_BASE_URL = "https://worknix-addpost.onrender.com/api/posts";

// const Post = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch(API_BASE_URL);
//         if (!response.ok) throw new Error("Failed to fetch posts");
//         const data = await response.json();
//         setPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchPosts();
//   }, []);

//   if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;

//   return (
//     <div>
//       {posts.map((post) => (
//         <PostCard key={post._id} post={post} setPosts={setPosts} />
//       ))}
//     </div>
//   );
// };

// const PostCard = ({ post, setPosts }) => {
//   const { username } = useUserContext();
//   const [isLiked, setIsLiked] = useState(false);
//   const [showComments, setShowComments] = useState(false);
//   const [localLikes, setLocalLikes] = useState(post.likes || 0);
//   const [localComments, setLocalComments] = useState(post.comments || []);
//   const [showOptions, setShowOptions] = useState(false);
//   const [commentText, setCommentText] = useState(""); 

//   const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";  
//   const timeAgo = post.createdAt
//     ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
//     : "Unknown time";

//   // ✅ Check if user has already liked this post
//   useEffect(() => {
//     const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//     setIsLiked(likedPosts.includes(post._id));
//   }, [post._id]);

//   const handleLike = async () => {
//     if (isLiked) return; // Prevent multiple likes

//     setLocalLikes((prev) => prev + 1);
//     setIsLiked(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/like`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });
//       if (!response.ok) throw new Error("Failed to like post");

//       const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
//       likedPosts.push(post._id);
//       localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
      
//     } catch (error) {
//       setLocalLikes((prev) => prev - 1);
//       setIsLiked(false);
//     }
//   };

//   const handleAddComment = async () => {
//     if (!commentText.trim()) return;

//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ comment: commentText }),
//       });
//       if (!response.ok) throw new Error("Failed to add comment");

//       const updatedPost = await response.json();
//       setLocalComments(updatedPost.comments); // Update comments
//       setCommentText(""); // Clear input
//     } catch (error) {
//       console.error("Error adding comment:", error);
//     }
//   };

//   const handleDelete = async () => {
//     if (!window.confirm("Are you sure you want to delete this post?")) return;
//     try {
//       const response = await fetch(`${API_BASE_URL}/${post._id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) throw new Error("Failed to delete post");
//       setPosts((prev) => prev.filter((p) => p._id !== post._id));
//     } catch (error) {
//       console.error("Error deleting post:", error);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md overflow-hidden p-4 mb-4"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       layout
//     >
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
//           <div>
//             <h3 className="font-semibold">{username || "Unknown User"}</h3>
//             <p className="text-sm text-gray-500">{timeAgo}</p>
//           </div>
//         </div>
//         <div className="relative">
//           <button onClick={() => setShowOptions(!showOptions)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
//             <MoreVertical size={20} className="text-gray-500" />
//           </button>
//           {showOptions && (
//             <div className="absolute right-0 mt-2 w-24 bg-white shadow-md rounded-md py-2 z-10">
//               <button
//                 onClick={handleDelete}
//                 className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
//               >
//                 Delete
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <p className="mt-4">{post.description}</p>
//       {post.mediaUrl && (
//         <div className="mt-4 -mx-4">
//           {post.mediaType?.startsWith("image") ? (
//             <img src={post.mediaUrl} alt="Post Media" className="w-full" />
//           ) : (
//             <video controls className="w-full">
//               <source src={post.mediaUrl} type={post.mediaType} />
//             </video>
//           )}
//         </div>
//       )}

//       <div className="mt-4 flex items-center gap-6">
//         <button onClick={handleLike} className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
//           <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : ""} />
//           <span>{localLikes}</span>
//         </button>
//         <button onClick={() => setShowComments(!showComments)} className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <MessageCircle size={20} />
//           <span>{localComments.length}</span>
//         </button>
//         <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
//           <Share2 size={20} />
//         </button>
//       </div>

//       {/* Comment Section */}
//       {showComments && (
//         <div className="mt-4">
//           <input
//             type="text"
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//             placeholder="Write a comment..."
//             className="w-full p-2 border rounded-md"
//           />
//           <button
//             onClick={handleAddComment}
//             className="mt-2 bg-teal-600 text-white px-4 py-2 rounded-md"
//           >
//             Add Comment
//           </button>
//           {localComments.map((comment, index) => (
//             <div key={index} className="mt-2 text-gray-700">
//               {comment}
//             </div>
//           ))}
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default Post;
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, MoreVertical, Trash2 } from "lucide-react";
import { useUserContext } from "../UserContext";
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
  const { username } = useUserContext();
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [localLikes, setLocalLikes] = useState(post.likes || 0);
  const [localComments, setLocalComments] = useState(post.comments || []);
  const [commentText, setCommentText] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const avatar = post.user?.avatar || "https://placehold.co/40/000000/FFF?text= ";  

  const timeAgo = post.createdAt
    ? formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })
    : "Unknown time";

  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
    setIsLiked(likedPosts.includes(post._id));
  }, [post._id]);

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

  const handleAddComment = async () => {
    if (!commentText.trim()) return;

    try {
      const response = await fetch(`${API_BASE_URL}/${post._id}/comment`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment: commentText }),
      });

      if (!response.ok) throw new Error("Failed to add comment");

      const updatedPost = await response.json();

      setLocalComments((prevComments) => [...prevComments, commentText]); 
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

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
          <img src={avatar} alt={username} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h3 className="font-semibold">{username || "Unknown User"}</h3>
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
          <ul className="mt-2">
            {localComments.map((comment, index) => (
              <li key={index} className="p-2 border-b">{comment}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Post;
