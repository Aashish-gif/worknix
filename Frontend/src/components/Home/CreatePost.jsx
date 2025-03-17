// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Image as ImageIcon, X } from "lucide-react";
// import axios from "axios";

// export function CreatePost({ onPost }) {
//   const [content, setContent] = useState("");
//   const [media, setMedia] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setMedia({
//         file,
//         preview: URL.createObjectURL(file),
//         type: file.type.startsWith("video") ? "video" : "image",
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     setLoading(true);

//     const formData = new FormData();
//     formData.append("description", content);
//     if (media?.file) {
//       formData.append("media", media.file);
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-addpost.onrender.com/api/posts", // ✅ Corrected API endpoint
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );

//       console.log("Post uploaded:", response.data);
//       onPost(response.data.post); // ✅ Update UI with new post
//       setContent("");
//       setMedia(null);
//       setIsExpanded(false);
//     } catch (error) {
//       console.error("Post upload failed:", error.response?.data || error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md p-4"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <form onSubmit={handleSubmit}>
//         <div className="flex gap-4">
//           <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
//             <img
//               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="flex-grow">
//             <textarea
//               placeholder="What's on your mind?"
//               className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
//               rows={isExpanded ? 3 : 1}
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               onFocus={() => setIsExpanded(true)}
//             />

//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="mt-4"
//               >
//                 {media && (
//                   <div className="relative mt-2 rounded-lg overflow-hidden">
//                     {media.type === "image" ? (
//                       <img
//                         src={media.preview}
//                         alt="Preview"
//                         className="max-h-60 w-full object-cover"
//                       />
//                     ) : (
//                       <video controls className="max-h-60 w-full object-cover">
//                         <source src={media.preview} type={media.file.type} />
//                       </video>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => setMedia(null)}
//                       className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//                     >
//                       <X size={16} />
//                     </button>
//                   </div>
//                 )}

//                 <div className="flex items-center justify-between mt-4">
//                   <label className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
//                     <ImageIcon size={20} />
//                     <input
//                       type="file"
//                       accept="image/*,video/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>

//                   <button
//                     type="submit"
//                     disabled={!content.trim() || loading}
//                     className="px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {loading ? "Posting..." : "Post"}
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </form>
//     </motion.div>
//   );
// }

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Image as ImageIcon, X } from "lucide-react";
// import axios from "axios";

// export function CreatePost({ onPost }) {
//   const [content, setContent] = useState("");
//   const [media, setMedia] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // ✅ Replace with actual logged-in user data (when integrated with auth)
//   const username = "testuser"; 

//   // Handle media file selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setMedia(null); // Reset previous media preview
//       setTimeout(() => {
//         setMedia({
//           file,
//           preview: URL.createObjectURL(file),
//           type: file.type.startsWith("video") ? "video" : "image",
//         });
//       }, 100);
//     }
//   };

//   // Auto-resizing textarea
//   const handleTextareaChange = (e) => {
//     setContent(e.target.value);
//     e.target.style.height = "auto"; 
//     e.target.style.height = e.target.scrollHeight + "px"; 
//   };

//   // Handle post submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     const formData = new FormData();
//     formData.append("description", content);
//     formData.append("username", username); 
//     if (media?.file) {
//       formData.append("media", media.file);
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-addpost.onrender.com/api/posts",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("✅ Post uploaded successfully:", response.data);
//       onPost(response.data.post);

//       setContent("");
//       setMedia(null);
//       setIsExpanded(false);
//       setSuccessMessage("🎉 Post uploaded successfully!");

//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       console.error("❌ Post upload failed:", error.response?.data || error);
//       setErrorMessage(error.response?.data?.error || "Failed to upload post.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md p-4"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <form onSubmit={handleSubmit}>
//         <div className="flex gap-4">
//           {/* Profile Avatar */}
//           <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
//             <img
//               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Post Input Field */}
//           <div className="flex-grow">
//             <textarea
//               placeholder="What's on your mind?"
//               className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
//               rows={1}
//               value={content}
//               onChange={handleTextareaChange}
//               onFocus={() => setIsExpanded(true)}
//               style={{ overflowY: "hidden" }}
//             />

//             {/* Post Media Preview */}
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="mt-4"
//               >
//                 {media && (
//                   <div className="relative mt-2 rounded-lg overflow-hidden">
//                     {media.type === "image" ? (
//                       <img
//                         src={media.preview}
//                         alt="Preview"
//                         className="max-h-60 w-full object-cover"
//                       />
//                     ) : (
//                       <video controls className="max-h-60 w-full object-cover">
//                         <source src={media.preview} type={media.file.type} />
//                       </video>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => setMedia(null)}
//                       className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//                     >
//                       <X size={16} />
//                     </button>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="flex items-center justify-between mt-4">
//                   {/* Upload Media Button */}
//                   <label className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
//                     <ImageIcon size={20} />
//                     <input
//                       type="file"
//                       accept="image/*,video/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>

//                   {/* Submit Post Button */}
//                   <button
//                     type="submit"
//                     disabled={!content.trim() || loading}
//                     className="px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8v8H4z"
//                           ></path>
//                         </svg>
//                         Posting...
//                       </>
//                     ) : (
//                       "Post"
//                     )}
//                   </button>
//                 </div>

//                 {/* Success Message */}
//                 {successMessage && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="text-green-500 text-sm mt-2"
//                   >
//                     {successMessage}
//                   </motion.p>
//                 )}

//                 {/* Error Message */}
//                 {errorMessage && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="text-red-500 text-sm mt-2"
//                   >
//                     {errorMessage}
//                   </motion.p>
//                 )}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </form>
//     </motion.div>
//   );
// // }
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Image as ImageIcon, X } from "lucide-react";
// import axios from "axios";
// import { useSelector } from "react-redux"; // Import useSelector to access Redux store

// export function CreatePost({ onPost }) {
//   const [content, setContent] = useState("");
//   const [media, setMedia] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");

//   // ✅ Access the name from the Redux store
//   const { name } = useSelector((state) => state.user);

//   // Handle media file selection
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setMedia(null); // Reset previous media preview
//       setTimeout(() => {
//         setMedia({
//           file,
//           preview: URL.createObjectURL(file),
//           type: file.type.startsWith("video") ? "video" : "image",
//         });
//       }, 100);
//     }
//   };

//   // Auto-resizing textarea
//   const handleTextareaChange = (e) => {
//     setContent(e.target.value);
//     e.target.style.height = "auto";
//     e.target.style.height = e.target.scrollHeight + "px";
//   };

//   // Handle post submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content.trim()) return;

//     setLoading(true);
//     setErrorMessage("");
//     setSuccessMessage("");

//     const formData = new FormData();
//     formData.append("description", content);
//     formData.append("name", name); // Include the name in the request
//     if (media?.file) {
//       formData.append("media", media.file);
//     }

//     try {
//       const response = await axios.post(
//         "https://worknix-addpost.onrender.com/api/posts",
//         formData,
//         { headers: { "Content-Type": "multipart/form-data" } }
//       );

//       console.log("✅ Post uploaded successfully:", response.data);
//       onPost(response.data.post);

//       setContent("");
//       setMedia(null);
//       setIsExpanded(false);
//       setSuccessMessage("🎉 Post uploaded successfully!");

//       setTimeout(() => setSuccessMessage(""), 3000);
//     } catch (error) {
//       console.error("❌ Post upload failed:", error.response?.data || error);
//       setErrorMessage(error.response?.data?.error || "Failed to upload post.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.div
//       className="bg-white rounded-xl shadow-md p-4"
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//     >
//       <form onSubmit={handleSubmit}>
//         <div className="flex gap-4">
//           {/* Profile Avatar */}
//           <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
//             <img
//               src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Post Input Field */}
//           <div className="flex-grow">
//             <textarea
//               placeholder="What's on your mind?"
//               className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
//               rows={1}
//               value={content}
//               onChange={handleTextareaChange}
//               onFocus={() => setIsExpanded(true)}
//               style={{ overflowY: "hidden" }}
//             />

//             {/* Post Media Preview */}
//             {isExpanded && (
//               <motion.div
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 className="mt-4"
//               >
//                 {media && (
//                   <div className="relative mt-2 rounded-lg overflow-hidden">
//                     {media.type === "image" ? (
//                       <img
//                         src={media.preview}
//                         alt="Preview"
//                         className="max-h-60 w-full object-cover"
//                       />
//                     ) : (
//                       <video controls className="max-h-60 w-full object-cover">
//                         <source src={media.preview} type={media.file.type} />
//                       </video>
//                     )}
//                     <button
//                       type="button"
//                       onClick={() => setMedia(null)}
//                       className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
//                     >
//                       <X size={16} />
//                     </button>
//                   </div>
//                 )}

//                 {/* Action Buttons */}
//                 <div className="flex items-center justify-between mt-4">
//                   {/* Upload Media Button */}
//                   <label className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
//                     <ImageIcon size={20} />
//                     <input
//                       type="file"
//                       accept="image/*,video/*"
//                       className="hidden"
//                       onChange={handleFileChange}
//                     />
//                   </label>

//                   {/* Submit Post Button */}
//                   <button
//                     type="submit"
//                     disabled={!content.trim() || loading}
//                     className="px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8v8H4z"
//                           ></path>
//                         </svg>
//                         Posting...
//                       </>
//                     ) : (
//                       "Post"
//                     )}
//                   </button>
//                 </div>

//                 {/* Success Message */}
//                 {successMessage && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="text-green-500 text-sm mt-2"
//                   >
//                     {successMessage}
//                   </motion.p>
//                 )}

//                 {/* Error Message */}
//                 {errorMessage && (
//                   <motion.p
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     className="text-red-500 text-sm mt-2"
//                   >
//                     {errorMessage}
//                   </motion.p>
//                 )}
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </form>
//     </motion.div>
//   );
// }





import React, { useState } from "react";
import { motion } from "framer-motion";
import { Image as ImageIcon, X } from "lucide-react";
import axios from "axios";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

export function CreatePost({ onPost }) {
  const [content, setContent] = useState("");
  const [media, setMedia] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ✅ Access the name from the Redux store safely
  const user = useSelector((state) => state.user) || {}; 
  const name = user.name || "Unknown User"; // Fallback if user is undefined

  // Handle media file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(null); // Reset previous media preview
      setTimeout(() => {
        setMedia({
          file,
          preview: URL.createObjectURL(file),
          type: file.type.startsWith("video") ? "video" : "image",
        });
      }, 100);
    }
  };

  // Auto-resizing textarea
  const handleTextareaChange = (e) => {
    setContent(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  };

  // Handle post submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const formData = new FormData();
    formData.append("description", content);
    formData.append("name", name); // Include the name in the request
    if (media?.file) {
      formData.append("media", media.file);
    }

    try {
      const response = await axios.post(
        "https://worknix-addpost.onrender.com/api/posts",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("✅ Post uploaded successfully:", response.data);
      onPost(response.data.post);

      setContent("");
      setMedia(null);
      setIsExpanded(false);
      setSuccessMessage("🎉 Post uploaded successfully!");

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("❌ Post upload failed:", error.response?.data || error);
      setErrorMessage(error.response?.data?.error || "Failed to upload post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md p-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          {/* Profile Avatar */}
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Input Field */}
          <div className="flex-grow">
            <textarea
              placeholder="What's on your mind?"
              className="w-full p-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all"
              rows={1}
              value={content}
              onChange={handleTextareaChange}
              onFocus={() => setIsExpanded(true)}
              style={{ overflowY: "hidden" }}
            />

            {/* Post Media Preview */}
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4"
              >
                {media && (
                  <div className="relative mt-2 rounded-lg overflow-hidden">
                    {media.type === "image" ? (
                      <img
                        src={media.preview}
                        alt="Preview"
                        className="max-h-60 w-full object-cover"
                      />
                    ) : (
                      <video controls className="max-h-60 w-full object-cover">
                        <source src={media.preview} type={media.file.type} />
                      </video>
                    )}
                    <button
                      type="button"
                      onClick={() => setMedia(null)}
                      className="absolute top-2 right-2 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-4">
                  {/* Upload Media Button */}
                  <label className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
                    <ImageIcon size={20} />
                    <input
                      type="file"
                      accept="image/*,video/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>

                  {/* Submit Post Button */}
                  <button
                    type="submit"
                    disabled={!content.trim() || loading}
                    className="px-4 py-2 bg-[#008080] text-white rounded-lg hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          ></path>
                        </svg>
                        Posting...
                      </>
                    ) : (
                      "Post"
                    )}
                  </button>
                </div>

                {/* Success Message */}
                {successMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500 text-sm mt-2"
                  >
                    {successMessage}
                  </motion.p>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errorMessage}
                  </motion.p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
}
