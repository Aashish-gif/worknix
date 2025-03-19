// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { MessageCircle, TrendingUp, Users, Calendar, Search, Hash, Star, ExternalLink } from 'lucide-react';
// // import axios from 'axios'; // Import axios for making HTTP requests

// // import { CreatePost } from './CreatePost';
// // import Post from './Post';

// // export function Main() {
// //   const [posts, setPosts] = useState([
// //     {
// //       id: 1,
// //       user: {
// //         name: 'John Doe',
// //         avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
// //       },
// //       content: 'Just finished my latest project! 🚀',
// //       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&q=80',
// //       likes: 24,
// //       comments: [
// //         { id: 1, user: 'Jane Smith', content: 'Amazing work! 👏', likes: 3 },
// //         { id: 2, user: 'Mike Johnson', content: 'Love the design!', likes: 1 },
// //       ],
// //       timestamp: '2 hours ago',
// //     },
// //     {
// //       id: 2,
// //       user: {
// //         name: 'Sarah Wilson',
// //         avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
// //       },
// //       content: 'Beautiful sunset at the beach today! 🌅',
// //       image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop&q=80',
// //       likes: 56,
// //       comments: [
// //         { id: 3, user: 'Tom Brown', content: 'Stunning view! 😍', likes: 5 },
// //       ],
// //       timestamp: '5 hours ago',
// //     },
// //   ]);

// //   const [trendingTopics, setTrendingTopics] = useState([]); // State for storing trending communities
// //   const [loading, setLoading] = useState(true); // State for loading indicator
// //   const [error, setError] = useState(null); // State for error handling

// //   const suggestedUsers = [
// //     {
// //       id: 1,
// //       name: 'Emma Watson',
// //       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
// //       role: 'UI/UX Designer',
// //     },
// //     {
// //       id: 2,
// //       name: 'David Chen',
// //       avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
// //       role: 'Full Stack Developer',
// //     },
// //     {
// //       id: 3,
// //       name: 'Sophie Turner',
// //       avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
// //       role: 'Product Designer',
// //     },
// //   ];

// //   const upcomingEvents = [
// //     {
// //       id: 1,
// //       title: 'Tech Meetup 2025',
// //       date: 'Mar 15',
// //       attendees: 234,
// //       image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop&q=80',
// //     },
// //     {
// //       id: 2,
// //       title: 'Web Summit',
// //       date: 'Mar 20',
// //       attendees: 512,
// //       image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop&q=80',
// //     },
// //   ];

// //   const handleNewPost = (post) => {
// //     setPosts([{
// //       id: Date.now(),
// //       user: {
// //         name: 'Current User',
// //         avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80',
// //       },
// //       ...post,
// //       likes: 0,
// //       comments: [],
// //       timestamp: 'Just now',
// //     }, ...posts]);
// //   };

// //   // Function to format the member count
// //   const formatMemberCount = (count) => {
// //     if (count >= 1000000) {
// //       return (count / 1000000).toFixed(1) + 'M'; // For millions
// //     }
// //     if (count >= 1000) {
// //       return (count / 1000).toFixed(1) + 'k'; // For thousands
// //     }
// //     return count + ' members'; // For numbers less than 1000
// //   };

// //   // Fetch trending communities from the backend API
// //   useEffect(() => {
// //     const fetchTrendingTopics = async () => {
// //       try {
// //         const response = await axios.get('https://worknix-1.onrender.com/api/community/explore');
        
// //         // Sort topics based on the number of members
// //         const sortedTopics = response.data
// //           .filter(topic => {
// //             // Validate that 'members' exists and is a number
// //             return topic.members && !isNaN(parseInt(topic.members));
// //           })
// //           .sort((a, b) => {
// //             const aMembers = parseInt(a.members);
// //             const bMembers = parseInt(b.members);
// //             return bMembers - aMembers; // Sort in descending order based on members
// //           })
// //           .slice(0, 4); // Get the top 4 communities by number of members

// //         setTrendingTopics(sortedTopics); // Update state with top 4 communities
// //       } catch (error) {
// //         console.error("Error fetching data:", error.response || error.message);
// //         setError('Failed to fetch trending topics');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchTrendingTopics();
// //   }, []); // Empty dependency array means this effect runs once when the component mounts

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Navigation */}
// //       <nav className="bg-white text-[#008080] shadow-lg fixed top-0 left-20 right-0 z-50">
// //         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
// //           <div className="flex-1 max-w-xl mx-8">
// //             <div className="relative">
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#008080]" size={20} />
// //               <input
// //                 type="text"
// //                 placeholder="Search..."
// //                 className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-full placeholder-[#008080] text-[#008080] border-2 border-[#008080] focus:outline-none focus:ring-2 focus:ring-[#008080]"
// //               />
// //             </div>
// //           </div>
// //           <div className="flex items-center gap-4">
// //             <div className="w-10 h-10 rounded-full overflow-hidden">
// //               <img
// //                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
// //                 alt="Profile"
// //                 className="w-full h-full object-cover"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 flex gap-6">
// //         {/* Left Sidebar */}
// //         <div className="w-64 hidden lg:block">
// //           <div className="sticky top-24 space-y-6">
// //             <motion.div
// //               className="bg-white rounded-xl shadow-md p-4"
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //             >
// //               <div className="flex items-center gap-2 mb-4 text-[#008080]">
// //                 <TrendingUp size={20} />
// //                 <h2 className="font-semibold">Trending Communities</h2>
// //               </div>
// //               {loading ? (
// //                 <div>Loading...</div>
// //               ) : error ? (
// //                 <div>{error}</div>
// //               ) : (
// //                 <div className="space-y-3">
// //                   {trendingTopics.map((topic) => (
// //                     <motion.a
// //                       key={topic.id}
// //                       href="#"
// //                       className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
// //                       whileHover={{ scale: 1.02 }}
// //                     >
// //                       <div className="flex items-center gap-2">
// //                         <Hash size={16} className="text-gray-400" />
// //                         <span>{topic.name}</span>
// //                       </div>
// //                       {/* <span className="text-sm text-gray-500">{formatMemberCount(topic.members)}</span> */}
// //                     </motion.a>
// //                   ))}
// //                 </div>
// //               )}
// //             </motion.div>

// //             <motion.div
// //               className="bg-white rounded-xl shadow-md p-4"
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ delay: 0.1 }}
// //             >
// //               <div className="flex items-center gap-2 mb-4 text-[#008080]">
// //                 <Calendar size={20} />
// //                 <h2 className="font-semibold">Upcoming Events</h2>
// //               </div>
// //               <div className="space-y-4">
// //                 {upcomingEvents.map((event) => (
// //                   <motion.div
// //                     key={event.id}
// //                     className="group cursor-pointer"
// //                     whileHover={{ scale: 1.02 }}
// //                   >
// //                     <div className="relative rounded-lg overflow-hidden">
// //                       <img src={event.image} alt={event.title} className="w-full h-24 object-cover" />
// //                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
// //                       <div className="absolute bottom-2 left-2 text-white">
// //                         <h3 className="font-medium">{event.title}</h3>
// //                         <p className="text-sm">{event.date} • {event.attendees} attending</p>
// //                       </div>
// //                     </div>
// //                   </motion.div>
// //                 ))}
// //               </div>
// //             </motion.div>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <main className="flex-1 max-w-2xl">
// //           <CreatePost onPost={handleNewPost} />
// //           <div className="space-y-6 mt-8">
// //             <AnimatePresence>
// //               {posts.map((post) => (
// //                 <Post key={post.id} post={post} />
// //               ))}
// //             </AnimatePresence>
// //           </div>
// //         </main>

// //         {/* Right Sidebar */}
// //         <div className="w-64 hidden lg:block">
// //           <motion.div
// //             className="bg-white rounded-xl shadow-md p-4"
// //             initial={{ opacity: 0, x: 20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //           >
// //             <div className="flex items-center gap-2 mb-4 text-[#008080]">
// //               <Star size={20} />
// //               <h2 className="font-semibold">Suggested Users</h2>
// //             </div>
// //             <div className="space-y-4">
// //               {suggestedUsers.map((user) => (
// //                 <motion.div
// //                   key={user.id}
// //                   className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
// //                   whileHover={{ scale: 1.02 }}
// //                 >
// //                   <div className="w-10 h-10 rounded-full overflow-hidden">
// //                     <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-medium">{user.name}</h3>
// //                     <p className="text-sm text-gray-500">{user.role}</p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { MessageCircle, TrendingUp, Users, Calendar, Search, Hash, Star, ExternalLink } from 'lucide-react';
// import axios from 'axios'; // Import axios for making HTTP requests

// import { CreatePost } from './CreatePost';
// import Post from './Post';

// export function Main() {
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       user: {
//         name: 'John Doe',
//         avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80',
//       },
//       content: 'Just finished my latest project! 🚀',
//       image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop&q=80',
//       likes: 24,
//       comments: [
//         { id: 1, user: 'Jane Smith', content: 'Amazing work! 👏', likes: 3 },
//         { id: 2, user: 'Mike Johnson', content: 'Love the design!', likes: 1 },
//       ],
//       timestamp: '2 hours ago',
//     },
//     {
//       id: 2,
//       user: {
//         name: 'Sarah Wilson',
//         avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80',
//       },
//       content: 'Beautiful sunset at the beach today! 🌅',
//       image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=400&fit=crop&q=80',
//       likes: 56,
//       comments: [
//         { id: 3, user: 'Tom Brown', content: 'Stunning view! 😍', likes: 5 },
//       ],
//       timestamp: '5 hours ago',
//     },
//   ]);

//   const [trendingTopics, setTrendingTopics] = useState([]); // State for storing trending communities
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for error handling

//   const suggestedUsers = [
//     {
//       id: 1,
//       name: 'Emma Watson',
//       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
//       role: 'UI/UX Designer',
//     },
//     {
//       id: 2,
//       name: 'David Chen',
//       avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
//       role: 'Full Stack Developer',
//     },
//     {
//       id: 3,
//       name: 'Sophie Turner',
//       avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
//       role: 'Product Designer',
//     },
//   ];

//   const upcomingEvents = [
//     {
//       id: 1,
//       title: 'Tech Meetup 2025',
//       date: 'Mar 15',
//       attendees: 234,
//       image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop&q=80',
//     },
//     {
//       id: 2,
//       title: 'Web Summit',
//       date: 'Mar 20',
//       attendees: 512,
//       image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop&q=80',
//     },
//   ];

//   const handleNewPost = (post) => {
//     setPosts([{
//       id: Date.now(),
//       user: {
//         name: 'Current User',
//         avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80',
//       },
//       ...post,
//       likes: 0,
//       comments: [],
//       timestamp: 'Just now',
//     }, ...posts]);
//   };

//   // Fetch trending communities from the backend API
//   useEffect(() => {
//     const fetchTrendingTopics = async () => {
//       try {
//         const response = await axios.get('https://worknix-1.onrender.com/api/community/explore');
//         const sortedTopics = response.data
//           .filter(topic => topic.members && !isNaN(parseInt(topic.members)))
//           .sort((a, b) => parseInt(b.members) - parseInt(a.members))
//           .slice(0, 4); // Get the top 4 communities by number of members
//         setTrendingTopics(sortedTopics);
//       } catch (error) {
//         console.error("Error fetching data:", error.response || error.message);
//         setError('Failed to fetch trending topics');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrendingTopics();
//   }, []); // Empty dependency array means this effect runs once when the component mounts

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navigation */}
//       <nav className="bg-white text-[#008080] shadow-lg fixed top-0 left-20 right-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//           <div className="flex-1 max-w-xl mx-8">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#008080]" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-full placeholder-[#008080] text-[#008080] border-2 border-[#008080] focus:outline-none focus:ring-2 focus:ring-[#008080]"
//               />
//             </div>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 flex gap-6">
//         {/* Left Sidebar */}
//         <div className="w-64 hidden lg:block">
//           <div className="sticky top-24 space-y-6">
//             <motion.div
//               className="bg-white rounded-xl shadow-md p-4"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//             >
//               <div className="flex items-center gap-2 mb-4 text-[#008080]">
//                 <TrendingUp size={20} />
//                 <h2 className="font-semibold">Trending Communities</h2>
//               </div>
//               {loading ? (
//                 <div>Loading...</div>
//               ) : error ? (
//                 <div>{error}</div>
//               ) : (
//                 <div className="space-y-3">
//                   {trendingTopics.map((topic) => (
//                     <motion.a
//                       key={topic.id} // Add key prop
//                       href="#"
//                       className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                       whileHover={{ scale: 1.02 }}
//                     >
//                       <div className="flex items-center gap-2">
//                         <Hash size={16} className="text-gray-400" />
//                         <span>{topic.name}</span>
//                       </div>
//                     </motion.a>
//                   ))}
//                 </div>
//               )}
//             </motion.div>

//             <motion.div
//               className="bg-white rounded-xl shadow-md p-4"
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               <div className="flex items-center gap-2 mb-4 text-[#008080]">
//                 <Calendar size={20} />
//                 <h2 className="font-semibold">Upcoming Events</h2>
//               </div>
//               <div className="space-y-4">
//                 {upcomingEvents.map((event) => (
//                   <motion.div
//                     key={event.id} // Add key prop
//                     className="group cursor-pointer"
//                     whileHover={{ scale: 1.02 }}
//                   >
//                     <div className="relative rounded-lg overflow-hidden">
//                       <img src={event.image} alt={event.title} className="w-full h-24 object-cover" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                       <div className="absolute bottom-2 left-2 text-white">
//                         <h3 className="font-medium">{event.title}</h3>
//                         <p className="text-sm">{event.date} • {event.attendees} attending</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <main className="flex-1 max-w-2xl">
//           <CreatePost onPost={handleNewPost} />
//           <div className="space-y-6 mt-8">
//             <AnimatePresence>
//               {posts.map((post) => (
//                 <Post key={post.id} post={post} /> // Add key prop
//               ))}
//             </AnimatePresence>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <div className="w-64 hidden lg:block">
//           <motion.div
//             className="bg-white rounded-xl shadow-md p-4"
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//           >
//             <div className="flex items-center gap-2 mb-4 text-[#008080]">
//               <Star size={20} />
//               <h2 className="font-semibold">Suggested Users</h2>
//             </div>
//             <div className="space-y-4">
//               {suggestedUsers.map((user) => (
//                 <motion.div
//                   key={user.id} // Add key prop
//                   className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
//                   whileHover={{ scale: 1.02 }}
//                 >
//                   <div className="w-10 h-10 rounded-full overflow-hidden">
//                     <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium">{user.name}</h3>
//                     <p className="text-sm text-gray-500">{user.role}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, TrendingUp, Users, Calendar, Search, Hash, Star, ExternalLink } from 'lucide-react';
import axios from 'axios';
import { useSelector } from 'react-redux'; // Import useSelector to access Redux store

import { CreatePost } from './CreatePost';
import Post from './Post';

export function Main() {
  const [posts, setPosts] = useState([]);
  const [trendingTopics, setTrendingTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Access user data from Redux store (authSlice)
  const { user, userType } = useSelector((state) => state.auth) || {};
  const displayName = userType === "employee" ? user?.username : user?.companyName || "Anonymous";
  const avatar = user?.profilePic || "https://placehold.co/40/008080/FFF?text=U";

  const suggestedUsers = [
    {
      id: 1,
      name: 'Emma Watson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80',
      role: 'UI/UX Designer',
    },
    {
      id: 2,
      name: 'David Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80',
      role: 'Full Stack Developer',
    },
    {
      id: 3,
      name: 'Sophie Turner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&q=80',
      role: 'Product Designer',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Meetup 2025',
      date: 'Mar 15',
      attendees: 234,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop&q=80',
    },
    {
      id: 2,
      title: 'Web Summit',
      date: 'Mar 20',
      attendees: 512,
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=200&fit=crop&q=80',
    },
  ];

  // Handle new post creation
  const handleNewPost = (post) => {
    setPosts((prevPosts) => [{
      _id: post._id || Date.now(), // Use _id from backend if available
      name: displayName, // Use current user's name from Redux
      profilePic: avatar,
      ...post,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(), // Use ISO format for consistency with Post.jsx
    }, ...prevPosts]);
  };

  // Fetch posts from backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get('https://worknix-addpost.onrender.com/api/posts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPosts(response.data); // Expecting an array of posts
      } catch (error) {
        console.error("Error fetching posts:", error.response || error.message);
        setError('Failed to fetch posts');
      }
    };

    const fetchTrendingTopics = async () => {
      try {
        const response = await axios.get('https://worknix-1.onrender.com/api/community/explore');
        const sortedTopics = response.data
          .filter(topic => topic.members && !isNaN(parseInt(topic.members)))
          .sort((a, b) => parseInt(b.members) - parseInt(a.members))
          .slice(0, 4); // Top 4 communities by members
        setTrendingTopics(sortedTopics);
      } catch (error) {
        console.error("Error fetching trending topics:", error.response || error.message);
        setError('Failed to fetch trending topics');
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchPosts(), fetchTrendingTopics()]);
      setLoading(false);
    };

    fetchData();
  }, []); // Runs once on mount

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white text-[#008080] shadow-lg fixed top-0 left-20 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#008080]" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 rounded-full placeholder-[#008080] text-[#008080] border-2 border-[#008080] focus:outline-none focus:ring-2 focus:ring-[#008080]"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt={displayName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-8 flex gap-6">
        {/* Left Sidebar */}
        <div className="w-64 hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <motion.div
              className="bg-white rounded-xl shadow-md p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center gap-2 mb-4 text-[#008080]">
                <TrendingUp size={20} />
                <h2 className="font-semibold">Trending Communities</h2>
              </div>
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>{error}</div>
              ) : (
                <div className="space-y-3">
                  {trendingTopics.map((topic) => (
                    <motion.a
                      key={topic.id}
                      href="#"
                      className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-2">
                        <Hash size={16} className="text-gray-400" />
                        <span>{topic.name}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-md p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-2 mb-4 text-[#008080]">
                <Calendar size={20} />
                <h2 className="font-semibold">Upcoming Events</h2>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    className="group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      <img src={event.image} alt={event.title} className="w-full h-24 object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 text-white">
                        <h3 className="font-medium">{event.title}</h3>
                        <p className="text-sm">{event.date} • {event.attendees} attending</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 max-w-2xl">
          <CreatePost onPost={handleNewPost} />
          <div className="space-y-6 mt-8">
            {loading ? (
              <p className="text-center text-gray-500">Loading posts...</p>
            ) : error ? (
              <p className="text-center text-red-500">Error: {error}</p>
            ) : (
              <AnimatePresence>
                {posts.map((post) => (
                  <Post key={post._id} post={post} setPosts={setPosts} />
                ))}
              </AnimatePresence>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <div className="w-64 hidden lg:block">
          <motion.div
            className="bg-white rounded-xl shadow-md p-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-2 mb-4 text-[#008080]">
              <Star size={20} />
              <h2 className="font-semibold">Suggested Users</h2>
            </div>
            <div className="space-y-4">
              {suggestedUsers.map((user) => (
                <motion.div
                  key={user.id}
                  className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Main;