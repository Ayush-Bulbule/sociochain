import React from 'react';
import Navbar from './Navbar';
import AdSidebar from './AdSideBar';

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <AdSidebar />
            <div className="h-[100vh] p-4 lg:ml-64 dark:bg-gray-950">
                <div className="container w-100 h-100 m-12 bg-gray-800">

                </div>

                {children}
            </div>
        </main>
    );
};

export default Layout;
