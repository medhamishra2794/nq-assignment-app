import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { FaBell } from "react-icons/fa6";


const Header=()=>{

  const [profileOpen, setProfileOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
  };


  return (
    <nav className="main-nav">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          <div className="flex flex-1 items-center justify-start">
            <div className="flex shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Noventiq logo" />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button type="button" className="relative">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>
              <div className="notification-icon">
                <FaBell />
                <span className="notification-count">6</span>
              </div>
            </button>

            {/* User Profile */}
            <div className="relative ml-4 sm:ml-6">
              <div>
                <button type="button" className="relative flex rounded-full text-sm items-center" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={toggleProfileDropdown}>
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <span className="mr-2 text-xs font-medium">John Doe</span>
                  <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="user" />
                </button>
              </div>
              {profileOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </nav>

  )   
}

export default Header;
