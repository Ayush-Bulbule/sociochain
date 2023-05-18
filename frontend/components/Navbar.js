import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMoon, HiOutlineMenuAlt2, HiOutlineX, HiSun } from 'react-icons/hi';
import styles from '../styles/Navbar.module.css'
import Sidebar from './Sidebar';

import { ConnectButton } from '@rainbow-me/rainbowkit';


export default function Navbar() {
    const { theme, setTheme } = useTheme('dark');


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebarToggle = () => {
        console.log(isSidebarOpen);
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        return setTheme('dark');
    }, [])

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }


    return (
        <>
            <nav className="lg:ml-64 fixed top-0 left-0 right-0 bg-white border-gray-200 py-2 border-b-2 dark:bg-gray-900 dark:border-slate-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 p-2 md:p-4">
                    <a href="/" className="flex items-center">
                        <img src="logo.png" className="h-9 mr-3" alt="Flowbite Logo" />
                        <span className={` ${styles.brandLogo} self-center text-2xl font-semibold whitespace-nowrap dark:text-white `}>sociochain</span>
                    </a>
                    
                    <div className="flex items-center md:order-2">
                        <div className="items-center hidden lg:flex justify-center">
                        <div className='ml-3 hidden lg:block'><ConnectButton
                            style={{ width: '100%' }}
                            // chainStatus="none" 
                            
                            showBalance={{
                                smallScreen: false,
                                largeScreen: false,
                            }} /></div>
                            <button type="button" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                <span className="sr-only">Open user menu</span>
                                <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="user photo" />
                            </button>
                            
                            <button onClick={toggleTheme} className='outline-none cursor-pointer'>{theme == 'dark' ? <HiSun className='text-2xl ml-3' /> : <HiMoon className='text-2xl ml-3' />}</button>
                        </div>


                        <button onClick={handleSidebarToggle} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            {
                                isSidebarOpen ?
                                    <HiOutlineX className='text-xl' />
                                    :
                                    <HiOutlineMenuAlt2 className='text-xl' />
                            }
                        </button>
                        

                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        </>
    );
}