import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AccountCard from '../components/AccountCard';

// images
import date from '../assets/images/svg/date.svg';
import id from '../assets/images/svg/id.svg';
import rp from '../assets/images/svg/rp.svg';
import top from '../assets/images/svg/top.svg';
import productImg from '../assets/images/other/product.jpg';

const AccountDetail = () => {
    const location = useLocation();
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum, sunt excepturi commodi maxime voluptates repudiandae quae quam, iusto iste impedit mollitia, eligendi aliquam fuga laboriosam maiores laborum pariatur illum iure? Asperiores harum amet aliquam, minima dolores nobis vel eius veniam obcaecati iure tempore possimus quod doloremque pariatur unde beatae quae quaerat molestiae illo odit consequuntur ducimus voluptate? Reprehenderit corporis voluptas animi adipisci ipsa doloremque consequatur quia illo rem omnis ratione expedita, beatae deleniti, laudantium totam odio! Et perferendis ea veritatis sit eligendi quidem dolore, autem, debitis cumque fuga nostrum id asperiores est! Optio laborum deserunt voluptatem iste rem. Officia nesciunt est mollitia possimus, eaque impedit, magnam ipsa fugiat placeat exercitationem, dolorem molestiae distinctio? Numquam, sunt sed error voluptas excepturi debitis mollitia laudantium repudiandae, ut, quod hic aperiam in nesciunt facilis reprehenderit porro? Illo, nam velit aut veniam neque ut natus consequuntur, id dignissimos in praesentium eveniet tenetur officiis, facere reiciendis eligendi illum est. Consequuntur praesentium quod doloremque veniam. Ad, eveniet natus! Aspernatur eveniet velit rem aut consectetur maiores enim est dolor quos nihil, architecto, corrupti odit repellendus cum, blanditiis totam quaerat deleniti iste dolorem excepturi cumque. Sequi quaerat qui exercitationem ex reiciendis. Perferendis, unde asperiores maiores quas, voluptate iure quae dolorum accusantium eligendi tempora debitis temporibus aut nemo consectetur magnam aliquid necessitatibus. Tempore animi, quia ipsam tenetur cumque, ipsum consectetur dolores, veniam labore iusto consequuntur! Non facere numquam laudantium sint odit sunt quibusdam id eveniet esse sed, quod a ipsum blanditiis libero vero voluptatibus voluptates commodi magni nobis cumque. Aspernatur eveniet velit rem aut consectetur maiores enim est dolor quos nihil, architecto, corrupti odit repellendus cum, blanditiis totam quaerat deleniti iste dolorem excepturi cumque. Sequi quaerat qui exercitationem ex reiciendis. Perferendis, unde asperiores maiores quas, voluptate iure quae dolorum accusantium eligendi tempora debitis temporibus aut nemo consectetur magnam aliquid necessitatibus. Tempore animi, quia ipsam tenetur cumque, ipsum consectetur dolores, veniam labore iusto consequuntur! Non facere numquam laudantium sint odit sunt quibusdam id eveniet esse sed, quod a ipsum blanditiis libero vero voluptatibus voluptates commodi magni nobis cumque.";
    const [readMore, setReadMore] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <>
            <div className='py-12'>
                <div className="container max-400:px-0">
                    <div className="grid grid-cols-15 gap-5 max-800:gap-2 max-715:grid-cols-1 max-715:gap-6">
                        {/* main conent */}
                        <div className="col-span-11 space-y-5 max-1100:col-span-10 max-715:col-span-1">
                            {/* top */}
                            <div className="flex-center-between gap-5 max-500:items-start max-500:gap-6 max-400:px-5">
                                <ul className="flex gap-5 flex-wrap">
                                    <li className="flex-center gap-3 max-950:gap-2">
                                        <img width={32} height={32} src={date} alt="date icon" className='w-8 h-8 max-950:w-6 max-950:h-6' />
                                        <p className='text-medium-20 leading-none max-950:text-regular-16'>18.05.2024</p>
                                    </li>
                                    <li className="flex-center gap-3 max-950:gap-2">
                                        <img width={32} height={32} src={id} alt="id" className='w-8 h-8 max-950:w-6 max-950:h-6' />
                                        <p className='text-medium-20 leading-none max-950:text-regular-16'>424253364</p>
                                    </li>
                                    <li className="flex-center gap-3 max-950:gap-2">
                                        <img width={32} height={32} src={rp} alt="royale pass" className='w-8 h-8 max-950:w-6 max-950:h-6' />
                                        <p className='text-medium-20 leading-none max-950:text-regular-16'>12</p>
                                    </li>
                                    <li className="flex-center gap-3 max-950:gap-2">
                                        <img width={32} height={32} src={top} alt="level" className='w-8 h-8 max-950:w-6 max-950:h-6' />
                                        <p className='text-medium-20 leading-none max-950:text-regular-16'>73</p>
                                    </li>
                                </ul>

                                <button title='Favorite toggle' aria-label='Favorite toggle' className="p-2 rounded-md">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 max-950:w-6 max-950:h-6'>
                                        <path
                                            className='transition-colors'
                                            d="M13.2261 6.99763L14.2996 7.91784C14.3548 7.96512 14.4362 7.96512 14.4914 7.91784L15.5649 6.99763C18.5678 4.42372 23.1789 5.26951 25.0728 8.74164C26.4382 11.2449 25.9265 14.356 23.8312 16.2901L14.6961 24.7225C14.5264 24.8792 14.2647 24.8792 14.0949 24.7225L4.95978 16.2901C2.86453 14.356 2.35283 11.2449 3.71825 8.74164C5.61214 5.26951 10.2232 4.42372 13.2261 6.99763Z"
                                            stroke="#07AE6E"
                                            // fill='#07AE6E'
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <iframe
                                width={1168}
                                height={658}
                                className='w-full aspect-[584/329] h-auto bg-primary-gray rounded-18 max-1140:rounded-xl max-400:rounded-none'
                                allow='autoplay'
                                src="https://www.youtube.com/embed/94faEjLiatM?si=UgmNqaXtKZZ1nPwo"
                                title="video of the pubg account on the SENATOR MARKET site"
                                allowFullScreen
                            ></iframe>


                            <h1 className="text-[28px] leading-9 font-semibold max-950:text-2xl max-550:text-xl max-350:text-lg max-350:leading-22 max-400:px-5">S5 sezondan boshlab o'ynalgan old akkaunt. S5 sezondan boshlab o'ynalgan old akkaunt. S5 sezondan boshlab o'ynalgan old akkaunt</h1>

                            <div className="relative pb-7 max-400:px-5">
                                <p className={`${readMore ? 'line-clamp-none' : 'line-clamp-[12] max-500:line-clamp-[15] max-350:line-clamp-[20]'} text-primary-gray font-medium max-950:text-regular-16`}>{description}</p>

                                {
                                    description.length > 1500 &&
                                    <>
                                        <div className={`${readMore ? 'hidden' : 'block'} absolute bottom-0 ring-0 left-0 w-full h-24 bg_linear-gradient-black`}></div>
                                        <button onClick={() => setReadMore(!readMore)} className={`${readMore ? '-bottom-' : 'bottom-0'} btn-normal text-primary-green absolute right-0 p-1 pt-0.5 rounded-md max-400:right-5`}>{readMore ? "Matnni qisqartirish" : "Ko'proq o'qish"}</button>
                                    </>
                                }
                            </div>
                        </div>

                        {/* buy account */}
                        <div className="col-span-4 max-1100:col-span-5 max-715:col-span-1 max-400:px-5">
                            <div className="border-2 p-3 space-y-3 border-primary-green/70 sticky top-5 rounded-18 max-1140:rounded-xl max-950:p-2 max-715:p-5 max-650:p-4 max-550:p-3 max-350:p-2">
                                <img width={388} height={210} src={productImg} alt="senator market pubg account picture" className='aspect-[304/210] w-full h-auto bg-primary-gray rounded-xl max-1140:rounded-lg' />
                                <div className="flex gap-2 text-semibold-20 max-950:text-regular-18">
                                    <span>Narxi:</span>
                                    <span className='text-primary-green'>550.000 so'm</span>
                                </div>
                                <button className="w-full btn-square">Sotib olish</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className='section'>
                <div className="container section-content">
                    <div className="section-header">
                        <h2 className="section-header_title">Sizga yoqishi mumkin</h2>
                    </div>
                    <ul className="accounts-grid">
                        {
                            [1, 2, 3, 4, 5].map(account => <AccountCard key={account} />)
                        }
                    </ul>
                </div>
            </section>
        </>
    )
};

export default AccountDetail;