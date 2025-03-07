import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { motion } from 'framer-motion';

export default function ProfileStats({ stats, followers, following }) {
  const [isFollowersOpen, setIsFollowersOpen] = useState(false);
  const [isFollowingOpen, setIsFollowingOpen] = useState(false);

  const UserList = ({ users, onClose, title }) => (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title className="text-xl font-bold text-[#008080] mb-4 sticky top-0 bg-white pb-4 border-b">
                {title}
              </Dialog.Title>
              <div className="mt-2 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between hover:bg-gray-50 p-2 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.profilePicture}
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#008080]"
                        />
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.title}</p>
                        </div>
                      </div>
                      <button className="bg-[#008080] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#006666] transition-colors">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </Transition>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="grid grid-cols-3 gap-4 text-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => setIsFollowersOpen(true)}
        >
          <p className="text-2xl font-bold text-[#008080]">{stats.followers}</p>
          <p className="text-gray-600">Followers</p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => setIsFollowingOpen(true)}
        >
          <p className="text-2xl font-bold text-[#008080]">{stats.following}</p>
          <p className="text-gray-600">Following</p>
        </motion.div>
        <div>
          <p className="text-2xl font-bold text-[#008080]">{stats.posts}</p>
          <p className="text-gray-600">Posts</p>
        </div>
      </div>

      {isFollowersOpen && (
        <UserList
          users={followers}
          onClose={() => setIsFollowersOpen(false)}
          title="Followers"
        />
      )}
      {isFollowingOpen && (
        <UserList
          users={following}
          onClose={() => setIsFollowingOpen(false)}
          title="Following"
        />
      )}
    </div>
  );
}