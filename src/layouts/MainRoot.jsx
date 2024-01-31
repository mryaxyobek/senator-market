import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainLoader from '../components/MainLoader';

const MainRoot = () => {
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 5000);
    }, []);
    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            {
                loader &&
                <MainLoader />
            }
            <main className='grow'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainRoot;