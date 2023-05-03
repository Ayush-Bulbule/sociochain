import { useTheme } from 'next-themes';
import { useEffect } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import styles from '../styles/Navbar.module.css'


export default function Navbar() {
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        return setTheme('dark');
    }, [])

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }


    return (
        <nav class="sm:ml-64 fixed top-0 left-0 right-0 bg-white border-gray-200 py-2 border-b-2 dark:bg-slate-900 dark:border-slate-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 p-4">
                <a href="/" class="flex items-center">
                    <img src="logo.png" class="h-9 mr-3" alt="Flowbite Logo" />
                    <span class={` ${styles.brandLogo} self-center text-2xl font-semibold whitespace-nowrap dark:text-white `}>sociochain</span>
                </a>
                <div class="flex items-center md:order-2">
                    <div className="items-center hidden sm:flex justify-center">

                        <button type="button" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span class="sr-only">Open user menu</span>
                            <img class="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/4140/4140037.png" alt="user photo" />
                        </button>
                        <button onClick={toggleTheme} className='outline-none cursor-pointer'>{theme == 'dark' ? <HiSun className='text-2xl ml-3' /> : <HiMoon className='text-2xl ml-3' />}</button>
                    </div>


                    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}