import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiEdit2, FiCamera } from 'react-icons/fi';

export default function ProfileHeader({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    headline: user.headline,
    title: user.title,
    about: user.about,
  });
  const fileInputRef = useRef(null);

  const handleSave = () => {
    onUpdate(editData);
    setIsEditing(false);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdate({ ...user, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={user.profilePicture}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-[#008080] cursor-pointer"
            onClick={handleImageClick}
          />
          <div className="absolute bottom-0 right-0 bg-[#008080] rounded-full p-2 cursor-pointer"
               onClick={handleImageClick}>
            <FiCamera className="text-white" size={20} />
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-[#008080] hover:text-[#006666]"
            >
              <FiEdit2 size={20} />
            </button>
          </div>
          {isEditing ? (
            <div className="space-y-3 mt-2">
              <input
                type="text"
                value={editData.headline}
                onChange={(e) => setEditData({ ...editData, headline: e.target.value })}
                className="w-full p-2 border rounded focus:border-[#008080] focus:ring focus:ring-[#008080] focus:ring-opacity-50"
                placeholder="Headline"
              />
              <input
                type="text"
                value={editData.title}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                className="w-full p-2 border rounded focus:border-[#008080] focus:ring focus:ring-[#008080] focus:ring-opacity-50"
                placeholder="Title"
              />
              <textarea
                value={editData.about}
                onChange={(e) => setEditData({ ...editData, about: e.target.value })}
                className="w-full p-2 border rounded focus:border-[#008080] focus:ring focus:ring-[#008080] focus:ring-opacity-50"
                rows="3"
                placeholder="About"
              />
              <button
                onClick={handleSave}
                className="bg-[#008080] text-white px-4 py-2 rounded hover:bg-[#006666] transition-colors"
              >
                Save
              </button>
            </div>
          ) : (
            <>
              <p className="text-lg text-gray-600">{user.headline}</p>
              <p className="text-sm text-gray-500">{user.title}</p>
              <p className="mt-2 text-gray-700">{user.about}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}