import React from 'react';
import Navbar from './Navbar';
import AdSidebar from './AdSideBar';

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <AdSidebar />
            <div className=" p-4 lg:ml-64 dark:bg-gray-950">

                {children}
            </div>
        </main>
    );
};

export default Layout;
