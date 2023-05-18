import { HiHome, HiSearch } from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { MdLogout, MdPostAdd } from 'react-icons/md'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useRouter } from 'next/router';
import useRequireAuth from '@/utils/useRequireAuth';


export default function Sidebar({ isOpen }) {
  const router = useRouter();


  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  useEffect(() => {
    setIsSidebarOpen(isOpen);
  }, [isOpen]);

  const logout = () => {
    localStorage.removeItem('token')
    router.push("/login")
  }
  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
    onClose();
  };

  return (
    <>

      <aside id="default-sidebar" className={`sidebar ${isSidebarOpen ? '' : '-translate-x-full'} fixed border-r-2 border-gray-200 top-0 left-0 z-40 w-64 h-screen transition-transform  lg:translate-x-0 dark:bg-gray-900 dark:border-slate-800`} aria-label="Sidebar">
        <div className="h-full flex flex-col justify-between px-3 py-10 overflow-y-auto bg-gray-50 dark:bg-gray-900">


          <div className="sidebar-body">

            <div className="relative">
              <div className="absolute inset-y-0 left-0 top-0 flex items-center pl-3 pointer-events-none">
                <HiSearch className='text-xl' />
              </div>
              <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-950 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-800 dark:border-slate-700 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search" />
            </div>

            {/* MENUS */}
            <ul className="space-y-2 pt-8 font-medium ">

              <li>
                <a href="#" className="flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <HiHome className='text-2xl text-gray-500' />
                  <span className="ml-3">Home</span>
                </a>
              </li>

              <li>
                <a href="#" className="flex md:hidden items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span><MdPostAdd className='text-2xl text-gray-500' /></span>
                  <span className="ml-3">New Post</span>
                </a>
              </li>

              <li>
                <a href="#" className="flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-950 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </a>
              </li>


              <li>
                <a href="#" className="flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-950 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                </a>
              </li>

              <li>
                <a onClick={logout} className="flex items-center p-2 text-gray-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span><MdLogout className='text-xl text-gray-500' /></span>
                  <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                </a>
              </li>

              <li>

              </li>
            </ul>
          </div>

          <div className="side-footer">
            <ConnectButton
              style={{ width: '100%' }}
              // chainStatus="none" 
              showBalance={{
                smallScreen: false,
                largeScreen: false,
              }}
            />
          </div>
        </div>
      </aside>
    </>

  );
}