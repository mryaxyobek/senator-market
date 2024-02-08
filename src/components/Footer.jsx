import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' bg-primary-green/0 pt-10 max-768:pt-8'>
            <div className="container pb-4 max-650:pb-8">
                <div className="flex-center-between max-1100:items-start max-650:flex-col gap-6">
                    <Link to='/' title='senator market' aria-label='senator market' className='text-bold-20 uppercase'>SENATOR MARKET</Link>

                    <nav>
                        <ul className="flex-center gap-6 max-1100:flex-col max-650:items-start text-primary-gray">
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

                    <ul className="footer_social-networks">
                        <li>
                            <a title="Senator Market's instagram page" aria-label="Senator Market's Instagram page" href="https://instagram.com" target='_blank' className="footer_social-networks_item-link footer_social-networks_item-link-instagram">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C9.85576 22 8.31273 21.9989 7.1097 21.8823C5.92045 21.767 5.1597 21.5455 4.55258 21.1639C3.85868 20.728 3.27192 20.1413 2.83591 19.4474C2.45455 18.8403 2.23288 18.0795 2.11773 16.8903C2.00106 15.6873 2 14.1442 2 12C2 9.85576 2.00106 8.31273 2.11773 7.1097C2.23288 5.92045 2.45455 5.1597 2.83591 4.55258C3.2719 3.85866 3.85866 3.2719 4.55258 2.83591C5.1597 2.45455 5.92045 2.23288 7.1097 2.11773C8.31258 2.00106 9.85561 2 12 2C14.1442 2 15.6873 2.00106 16.8903 2.11773C18.0795 2.23288 18.8403 2.45455 19.4474 2.83591C20.1413 3.27192 20.728 3.85868 21.1639 4.55258C21.5455 5.1597 21.767 5.92045 21.8823 7.1097C21.9989 8.31273 22 9.85576 22 12C22 14.1442 21.9989 15.6873 21.8823 16.8903C21.767 18.0795 21.5455 18.8403 21.1639 19.4474C20.728 20.1413 20.1413 20.728 19.4474 21.1639C18.8403 21.5455 18.0795 21.767 16.8903 21.8823C15.6873 21.9989 14.1442 22 12 22Z"
                                        stroke="currentColor" strokeWidth="2" />
                                    <path
                                        d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
                                        stroke="currentColor" strokeWidth="2" />
                                    <path
                                        d="M17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                                        fill="currentColor" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a title="Senator Market's telegram channel" aria-label="Senator Market's telegram channel" href="https://t.me" target='_blank' className="footer_social-networks_item-link footer_social-networks_item-link-telegram">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6.44595 12.7714L20.5 3M6.44595 12.7714L1.45423 11.3996C0.990108 11.2721 0.956558 10.6267 1.40495 10.4517L20.5 3M6.44595 12.7714L6.49208 18.9404C6.49524 19.363 6.98868 19.5913 7.31284 19.3202L10.7703 16.4286M6.44595 12.7714L10.7703 16.4286M20.5 3L16.3652 20.2111C16.2782 20.573 15.8404 20.7165 15.5562 20.4761L10.7703 16.4286"
                                        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a title="Senator Market's tiktok page" aria-label="Senator Market's tiktok page" href="https://tiktok.com" target='_blank' className="footer_social-networks_item-link footer_social-networks_item-link-tiktok">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.2765 4.79112C16.5193 3.90864 16.0641 2.75795 16.0641 1.5H15.1153M17.2765 4.79112C17.9666 5.59566 18.9009 6.18077 19.9649 6.40988C20.2956 6.48303 20.6406 6.52208 21 6.52208V10.1301C19.1598 10.1301 17.4536 9.53041 16.0639 8.51621V15.8542C16.0639 19.5208 13.131 22.5 9.53198 22.5C7.64856 22.5 5.94728 21.6808 4.75399 20.379C3.66614 19.1893 3 17.5998 3 15.8542C3 12.2413 5.84665 9.29634 9.37381 9.21833M17.2765 4.79112C17.2581 4.7789 17.2397 4.76656 17.2214 4.7541M7.11669 17.6193C6.76206 17.122 6.55119 16.5126 6.55119 15.8494C6.55119 14.1771 7.88825 12.8167 9.53206 12.8167C9.83876 12.8167 10.1359 12.8702 10.4138 12.958V9.27202C10.1263 9.23297 9.83396 9.20856 9.53206 9.20856C9.47931 9.20856 9.05469 9.23728 9.00197 9.23728M15.1102 1.5H12.5128L12.508 15.9664C12.4505 17.5852 11.1374 18.8871 9.53198 18.8871C8.53515 18.8871 7.65814 18.3848 7.11182 17.6242"
                                        stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a title="Senator Market's youtube page" aria-label="Senator Market's youtube page" href="https://youtube.com/@" target='_blank' className="footer_social-networks_item-link footer_social-networks_item-link-youtube">
                                <svg width="28" height="24" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 17.5H5C2.79086 17.5 1 15.7091 1 13.5V6.5C1 4.29086 2.79086 2.5 5 2.5H19C21.2091 2.5 23 4.29086 23 6.5V13.5C23 15.7091 21.2091 17.5 19 17.5Z"
                                        stroke="currentColor" strokeWidth="2" />
                                    <path d="M10 7V13L16 10L10 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* footer sub content :) */}
            <div className="py-4 border-t border-primary-green">
                <div className="container text-center text-primary-gray text-regular-16">
                © 2024. - <span className='uppercase'>Senator market</span>. Barcha huqular himoyalangan
                </div>
            </div>
        </footer>
    )
};

export default Footer;