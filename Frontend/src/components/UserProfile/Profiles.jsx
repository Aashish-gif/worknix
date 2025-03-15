import { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';
import PostList from './PostList';
import Navbar from "./Navbar"; // Top Navbar
import NavigationBar from "../Common/NavigationBar"; // Fixed Sidebar

// Mock data
const mockUser = {
  name: "Alex Johnson",
  profilePicture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  headline: "Senior Software Engineer",
  title: "Tech Lead at Innovation Corp",
  about: "Passionate about building scalable applications and mentoring developers. Always learning and sharing knowledge with the community.",
};

const mockStats = {
  followers: 1234,
  following: 567,
  posts: 42,
};

const mockFollowers = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Follower ${i + 1}`,
  title: ["UX Designer", "Software Engineer", "Product Manager", "Data Scientist"][i % 4],
  profilePicture: `https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
}));

const mockFollowing = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Following ${i + 1}`,
  title: ["Product Manager", "Software Engineer", "UX Designer", "Marketing Manager"][i % 4],
  profilePicture: `https://images.unsplash.com/photo-${1500000000000 + i}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`,
}));

const mockPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    content: "In this post, I'll share my experience building large-scale React applications and the best practices I've learned along the way...",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2024-02-15",
    likes: 234,
  },
  {
    id: 2,
    title: "The Future of Web Development",
    content: "Exploring upcoming trends in web development and how they will shape the future of our industry...",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    date: "2024-02-10",
    likes: 187,
  },
];






function Profiles() {
  const [user, setUser] = useState(mockUser);

  const handleProfileUpdate = (updates) => {
    setUser({ ...user, ...updates });
  };

  return (
    <div className="min-h-screen bg-gray-100">
 {/* Left Navigation Sidebar (Locked while scrolling) */}
 <div className="fixed top-0 left-0 h-screen w-56  z-20 overflow-y-auto">
 <NavigationBar />
</div>

            {/* Top Navbar */}
            <div className="fixed top-0 left-20 right-0 bg-white shadow-md h-16 flex items-center px-6 z-40">
          <Navbar />
        </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ProfileHeader user={user} onUpdate={handleProfileUpdate} />
        <ProfileStats
          stats={mockStats}
          followers={mockFollowers}
          following={mockFollowing}
        />
        <PostList posts={mockPosts} />
      </div>
    </div>
  );
}

export default Profiles;