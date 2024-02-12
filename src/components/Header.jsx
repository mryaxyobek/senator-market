import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// images
import search from '../assets/images/svg/search.svg';
import favicon from '../assets/images/svg/favicon-32x32.svg';
import { searchFilterBtns } from '../assets/data';
import AccountCard from './AccountCard';

const Header = () => {
    const [activeHamburgerBtn, setActiveHamburgerBtn] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const searchInputRef = useRef(null);
    const [openClearBtn, setOpenClearBtn] = useState(false);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpenSearch(false);
            setActiveHamburgerBtn(false);
        };
    });


    useEffect(() => {
        if (openSearch) {
            searchInputRef.current.focus();
        } else {
            window.scrollTo({
                top: 0,
                right: 0,
                behavior: 'instant'
            });
            searchInputRef.current.value = '';
            setOpenClearBtn(false);
        };
    }, [openSearch]);
    return (
        <header className='header py-5'>
            <div className="container">
                {/* header content */}
                <div className="flex-center-between">
                    {/* logo */}
                    <Link to='/' title='senator market' aria-label='senator market' className='text-bold-20 uppercase max-470:hidden'>SENATOR MARKET</Link>

                    <Link to='/' aria-label='senator market logo' title='senator market' className='hidden max-470:block'>
                        <img width={28} height={28} src={favicon} alt="search icon" className="w-7 h-7" />
                    </Link>

                    {/* main content */}
                    <div className="flex-center gap-8 max-1140:gap-8 max-650:gap-6">
                        <nav className='max-950:hidden'>
                            <ul className="flex-center gap-6">
                                <li>
                                    <NavLink to='/' className='uppercase'>Bosh sahifa</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/accounts' className='uppercase'>Akkauntlar</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/uc-service' className='uppercase'>UC servis</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contact' className='uppercase'>Bog'lanish</NavLink>
                                </li>
                            </ul>
                        </nav>

                        {/* search btn */}
                        <button
                            aria-label='search'
                            title='search'
                            className="btn-normal text-white hover:text-primary-green p-0.5 rounded"
                            onClick={() => {
                                setOpenSearch(true);
                            }}
                        >
                            <svg width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='transition-colors' d="M24.1884 25.2071C24.5789 25.5976 25.2121 25.5976 25.6026 25.2071C25.9931 24.8166 25.9931 24.1834 25.6026 23.7929L24.1884 25.2071ZM18.7439 19.7624L24.1884 25.2071L25.6026 23.7929L20.1582 18.3482L18.7439 19.7624ZM12.7844 20.2775C8.42749 20.2775 4.89551 16.7456 4.89551 12.3886H2.89551C2.89551 17.8501 7.32292 22.2775 12.7844 22.2775V20.2775ZM20.6733 12.3886C20.6733 16.7456 17.1413 20.2775 12.7844 20.2775V22.2775C18.2459 22.2775 22.6733 17.8501 22.6733 12.3886H20.6733ZM12.7844 4.49976C17.1413 4.49976 20.6733 8.03173 20.6733 12.3886H22.6733C22.6733 6.92716 18.2459 2.49976 12.7844 2.49976V4.49976ZM12.7844 2.49976C7.32292 2.49976 2.89551 6.92716 2.89551 12.3886H4.89551C4.89551 8.03173 8.42749 4.49976 12.7844 4.49976V2.49976Z" fill="currentColor" />
                            </svg>

                        </button>

                        {/* favorites link */}
                        <Link aria-label='favorites' to='/favorites' className='relative btn-normal text-white hover:text-primary-green p-0.5 rounded'>
                            <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='transition-colors' d="M13.2261 6.99763L14.2996 7.91784C14.3548 7.96512 14.4362 7.96512 14.4914 7.91784L15.5649 6.99763C18.5678 4.42372 23.1789 5.26951 25.0728 8.74164C26.4382 11.2449 25.9265 14.356 23.8312 16.2901L14.6961 24.7225C14.5264 24.8792 14.2647 24.8792 14.0949 24.7225L4.95978 16.2901C2.86453 14.356 2.35283 11.2449 3.71825 8.74164C5.61214 5.26951 10.2232 4.42372 13.2261 6.99763Z" stroke="currentColor" strokeWidth="2" />
                            </svg>

                            {/* count */}
                            <span className="flex-center justify-center absolute w-5 h-5 rounded-full text-white bg-primary-green -top-0.5 -right-2.5 text-xs leading-none font-bold">0</span>
                        </Link>

                        {/* dev btn */}
                        <Link aria-label='developer' to='/developer' title='developer' className="btn-default flex-center gap-2 max-1140:p-3 max-950:p-0.5 max-950:rounded max-950:bg-transparent text-primary-green max-950:text-white max-950:hover:text-primary-green">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='transition-colors' fillRule="evenodd" clipRule="evenodd" d="M9.00012 5.75C9.00012 2.98858 11.2387 0.75 14.0001 0.75C16.7615 0.75 19.0001 2.98858 19.0001 5.75C19.0001 8.51142 16.7615 10.75 14.0001 10.75C11.2387 10.75 9.00012 8.51142 9.00012 5.75ZM14.0001 2.75C12.3433 2.75 11.0001 4.09315 11.0001 5.75C11.0001 7.40685 12.3433 8.75 14.0001 8.75C15.657 8.75 17.0001 7.40685 17.0001 5.75C17.0001 4.09315 15.657 2.75 14.0001 2.75ZM6.50012 14.25C6.50012 13.4216 7.17169 12.75 8.00012 12.75H9.00012H9.76405C11.0793 13.4076 12.5296 13.75 14.0001 13.75C15.4706 13.75 16.9209 13.4076 18.2362 12.75H19.0001H20.0001C20.8285 12.75 21.5001 13.4216 21.5001 14.25H6.50012ZM4.50012 14.25H3.19833C1.95052 14.25 1.00738 15.3801 1.23059 16.6078L2.86695 25.6078C3.03986 26.5588 3.86812 27.25 4.83469 27.25H23.1655C24.1321 27.25 24.9604 26.5588 25.1333 25.6078L26.7696 16.6078C26.9929 15.3801 26.0497 14.25 24.8019 14.25H23.5001C23.5001 12.317 21.9331 10.75 20.0001 10.75H19.0001H18.0223C17.8525 10.75 17.685 10.7895 17.5331 10.8655L17.3418 10.9611C16.3042 11.4799 15.1601 11.75 14.0001 11.75C12.8401 11.75 11.696 11.4799 10.6585 10.9611L10.4671 10.8655C10.3153 10.7895 10.1478 10.75 9.97798 10.75H9.00012H8.00012C6.06712 10.75 4.50012 12.317 4.50012 14.25ZM4.83469 25.25L3.19833 16.25H24.8019L23.1655 25.25H4.83469ZM12.0001 19H11.7146L11.7523 19.283L11.9523 20.783L12.1523 22.283L12.1812 22.5H12.4001H14.0001H15.6001H15.819L15.8479 22.283L16.0479 20.783L16.2479 19.283L16.2857 19H16.0001H14.0001H12.0001ZM12.419 20.5L12.2857 19.5H13.7501V20.5H12.419ZM14.2501 20.5V19.5H15.7146L15.5812 20.5H14.2501ZM14.2501 21H15.5146L15.3812 22H14.2501V21ZM13.7501 21V22H12.619L12.4857 21H13.7501ZM17.5001 26.25C17.5001 25.9739 17.724 25.75 18.0001 25.75H20.0001C20.2763 25.75 20.5001 25.9739 20.5001 26.25C20.5001 26.5261 20.2763 26.75 20.0001 26.75H18.0001C17.724 26.75 17.5001 26.5261 17.5001 26.25ZM21.5001 25.75C21.224 25.75 21.0001 25.9739 21.0001 26.25C21.0001 26.5261 21.224 26.75 21.5001 26.75C21.7763 26.75 22.0001 26.5261 22.0001 26.25C22.0001 25.9739 21.7763 25.75 21.5001 25.75Z" fill="currentColor" />
                            </svg>

                            <span className="uppercase font-medium max-1140:hidden">Dasturchi</span>
                        </Link>

                        {/* hamburger btn */}
                        <button
                            title='hamburger button'
                            aria-label='hamburger button'
                            className={`hamburger-btn ${activeHamburgerBtn ? 'hamburger-btn-active' : ''}`}
                            onClick={() => {
                                setActiveHamburgerBtn(!activeHamburgerBtn);
                            }}
                        >
                            <span className='hamburger-btn_items-wrapper'>
                                <span className="hamburger-btn_item"></span>
                                <span className="hamburger-btn_item"></span>
                                <span className="hamburger-btn_item"></span>
                            </span>
                        </button>
                    </div>
                </div>


                {/* search (header) */}
                <div className={`${openSearch ? 'translate-y-0' : '-translate-y-full'} fixed top-0 right-0 bg-primary-black py-[23px] w-full z-30 transition-transform max-950:py-[21px] max-650:py-[19px]`}>
                    <div className="container">
                        <div className="flex-center gap-5 max-500:items-stretch max-500:gap-4">
                            <img title='search' width={28} height={28} src={search} alt="search icon" className="w-7 h-7 max-500:hidden" />
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                }}
                                className='flex-center relative w-full'
                            >

                                <input
                                    title='search'
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder='Qidirish...'
                                    className='w-full px-5 pr-11 py-3 bg-primary-white/20 rounded-xl placeholder:text-primary-white/70 max-500:px-3 max-500:py-[11px]'
                                    onChange={(e) => {
                                        if (e.target.value === '') {
                                            setOpenClearBtn(false);
                                        } else {
                                            setOpenClearBtn(true);
                                        }
                                    }}
                                />

                                {/* clearing search input valuse */}
                                <button
                                    className={`${openClearBtn ? 'block' : 'hidden'} absolute right-0.5 focus:outline-none focus:text-primary-green text-white p-2`}
                                    type='button'
                                    title='clearing input values'
                                    aria-label='clearing input values'
                                    onClick={() => {
                                        searchInputRef.current.value = '';
                                        searchInputRef.current.focus();
                                        setOpenClearBtn(false);
                                    }}
                                >
                                    <svg className='w-6 h-6 max-550:w-5 max-500:h-5' width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink">
                                        <path id="Vector 45" d="M5 23L14 14L23 5M14 14L5 5L23 23" stroke="currentColor"
                                            strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </form>

                            {/* close */}
                            <button
                                title='close'
                                aria-label='close'
                                className='uppercase text-primary-red bg-primary-red bg-opacity-12 focus:outline-primary-red/70 max-650:p-[9px]'
                                onClick={() => {
                                    setOpenSearch(false);
                                }}
                            >
                                <span className='max-650:hidden'>Yopish</span>
                                <svg className='hidden max-650:block' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path id="Vector 45" d="M5 23L14 14L23 5M14 14L5 5L23 23" stroke="#C70909"
                                        strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* search body (results) */}
                <div className={`${openSearch ? 'translate-y-0' : '-translate-y-[calc(100%+92px)]'} fixed bottom-0 right-0 bg-primary-black w-full h-[calc(100%-92px)] max-950:h-[calc(100%-88px)] max-650:h-[calc(100%-84px)] z-20 transition-transform`}>
                    <div className="w-full h-full bg-primary-white/10 overflow-y-auto pb-6 !pr-0 scroll_default">
                        <div className="flex flex-col container max-[1640px]:pr">
                            {/* filter btns */}
                            <div className="search_filter-btns-wrapper">
                                {
                                    searchFilterBtns.map((button) => {
                                        return (
                                            <button key={button.id} className="search_filter-btn">{button.body}</button>
                                        )
                                    })
                                }
                            </div>

                            {/* search results */}
                            <div>
                                <ul className="accounts-grid">
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => <AccountCard key={item} />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;