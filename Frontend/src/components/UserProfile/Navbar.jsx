import { Link, useLocation } from 'react-router-dom';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import NavigationBar from '../Common/NavigationBar'; // Left Sidebar

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex min-h-screen">
      

      {/* Main Content Area */}
      <div className="flex-1 ml-56">
        <nav className="bg-white text-teal-600 p-4 shadow-lg fixed top-0 left-20 right-0 z-50">
          <div className="w-full px-12 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-40">
                
                {/* About (User Profile) */}
                <Link
                  to="/user-profile"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive('/user-profile')
                      ? 'bg-teal-100 text-teal-700'
                      : 'hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  <UserGroupIcon className="w-5 h-5" />
                  <span>About</span>
                </Link>

                {/* My Communities */}
                <Link
                  to="/profile"
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive('/profile')
                      ? 'bg-teal-100 text-teal-700'
                      : 'hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  <UserGroupIcon className="w-5 h-5" />
                  <span>Activity</span>
                </Link>

              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
