import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <div className="h-[85vh] p-4 lg:ml-64 dark:bg-gray-950">

                {children}
            </div>
        </main>
    );
};

export default Layout;
