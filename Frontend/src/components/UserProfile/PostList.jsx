import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog } from '@headlessui/react';

export default function PostList({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedPost(post)}
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-600 line-clamp-3">{post.content}</p>
              <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span>{post.likes} likes</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog
        open={selectedPost !== null}
        onClose={() => setSelectedPost(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="mx-auto max-w-2xl w-full bg-white rounded-xl p-6">
            {selectedPost && (
              <>
                {selectedPost.image && (
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                )}
                <Dialog.Title className="text-2xl font-bold mb-4">
                  {selectedPost.title}
                </Dialog.Title>
                <p className="text-gray-700 mb-4">{selectedPost.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  <span>{selectedPost.likes} likes</span>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}