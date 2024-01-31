import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// images
import search from '../assets/images/svg/search.svg';
import like from '../assets/images/svg/like.svg';
import developer from '../assets/images/svg/developer.svg';

const Header = () => {
    return (
        <header className='header py-5'>
            <div className="container">
                <div className="flex-center-between">
                    {/* logo */}
                    <Link to='/' title='senator market' className='text-bold-20 uppercase'>SENATOR MARKET</Link>

                    {/* main content */}
                    <div className="flex-center gap-8">
                        <nav>
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
                        <button title='search' className="btn-normal">
                            <img width={28} height={28} src={search} alt="search icon" className="w-7 h-7" />
                        </button>

                        {/* favorites link */}
                        <Link aria-label='favorites' to='/favorites' className='relative btn-normal'>
                            <img width={28} height={28} src={like} alt="like icon" className="w-7 h-7" />

                            {/* count */}
                            <span className="flex-center justify-center absolute w-5 h-5 rounded-full bg-white text-primary-green -top-1 -right-3 text-xs leading-none font-bold">0</span>
                        </Link>

                        {/* dev btn */}
                        <Link to='/developer' title='developer' className="btn-default flex-center gap-2">
                            <img width={28} height={28} src={developer} alt="developer icon" className="w-7 h-7" />
                            <span className="uppercase font-medium">Dasturchi</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;