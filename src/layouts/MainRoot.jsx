import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/Header';
import MainLoader from '../components/MainLoader';

const MainRoot = () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true);
        setTimeout(() => {
            setLoader(false);
        }, 5000);
    }, []);

    const [scrollToTopBtnValue, setScrollToTopBtnValue] = useState(false);
    window.addEventListener('scroll', function () {
        if (window.scrollY > 350) {
            setScrollToTopBtnValue(true);
        } else {
            setScrollToTopBtnValue(false);
        };
    });

    return (
        <div className='flex flex-col min-h-screen'>
            <Header />
            {
                // loader &&
                // <MainLoader />
            }
            <Link to='/contact' className={`${scrollToTopBtnValue ? '-translate-y-14 scale-75 opacity-70' : 'translate-y-0'} btn-white`}>
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path className='transition-colors !duration-200' strokeLinecap='round' d="M3 11C2.38721 11.3065 2 11.9328 2 12.618L2 14.3449C2 15.0388 2.43286 15.6591 3.08423 15.8984L3.12817 15.9146C3.28198 15.9711 3.44434 16 3.60815 16L4.5 16C4.77612 16 5 15.7761 5 15.5L5 13.5C5 8.52942 9.02954 4.5 14 4.5C18.9705 4.5 23 8.52942 23 13.5L23 14L23 14.9777C23 18.6638 20.1736 21.7341 16.5 22.0385M13.5 20.5C12.6716 20.5 12 21.1716 12 22C12 22.8284 12.6716 23.5 13.5 23.5L15.0386 23.5C15.8457 23.5 16.5 22.8456 16.5 22.0385C16.5 21.1888 15.8113 20.5 14.9614 20.5L13.5 20.5ZM10.8164 8.39746L13.093 8.2229C14.9165 8.08307 16.5591 7.06818 17.5 5.5M25 11C25.6128 11.3065 26 11.9328 26 12.618L26 14.2094C26 14.9802 25.5068 15.6644 24.7756 15.9081C24.593 15.969 24.4019 16 24.2095 16L23 16M19.5 12.5L19.4473 12.3944C19.1731 11.8463 18.6128 11.5 18 11.5C17.3872 11.5 16.8269 11.8463 16.5527 12.3944L16.5 12.5M8.5 12.5L8.55273 12.3944C8.8269 11.8463 9.38721 11.5 10 11.5C10.6128 11.5 11.1731 11.8463 11.4473 12.3944L11.5 12.5M16.5 17C15.8596 17.6403 14.9912 18 14.0857 18L13.9143 18C13.0088 18 12.1404 17.6403 11.5 17" stroke="currentColor" strokeWidth="2" />
                </svg>
            </Link>

            <button
                className={`${scrollToTopBtnValue ? 'translate-y-0' : 'translate-y-40'} btn-white`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <svg className='flex-shrink min-w-[28px]' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path className='transition-colors !duration-200' strokeLinecap='round' d="M25 13L16 4.5L7 13M16 4.5L16 27.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
            </button>

            <main className='grow'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainRoot;