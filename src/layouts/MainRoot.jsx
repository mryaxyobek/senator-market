import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainRoot = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            <main className='grow'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainRoot;