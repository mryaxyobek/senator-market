import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section id='contact' className='py-12'>
            <div className="container max-350:px-0">
                <div className="relative overflow-hidden rounded-3xl max-500:rounded-2xl">
                    {/* shapes */}
                    <div className="absolute w-96 h-96 rounded-full bg-primary-green/30 z-0 -top-20 -left-20 max-950:w-64 max-950:h-64 max-950:-top-10 max-950:-left-10 max-500:-top-20 max-500:-left-20"></div>
                    <div className="absolute w-96 h-96 rounded-full bg-primary-green/30 z-0 -bottom-20 -right-20 max-950:w-64 max-950:h-64 max-950:-bottom-10 max-950:-right-10 max-500:-bottom-20 max-500:-rigth-20"></div>

                    {/* content */}
                    <div className="flex-center gap-6 z-10 justify-between w-full rounded-3xl max-500:rounded-2xl border-2 border-white/20 py-20 px-20 bg-white/10 backdrop-filter backdrop-blur-[180px] max-950:backdrop-blur-[100px] max-1350:px-14 max-768:flex-col max-650:px-5 max-470:py-10 max-500:backdrop-blur-[70px]">
                        <h2 className="text-bold-38 max-768:text-center max-470:text-2xl">Sizga yordam kerakmi? <br className='hidden max-1140:block' /> Biz bilan bog'laning.</h2>
                        <a target='_blank' href='https://t.me/deSENATORus' className='px-20 py-5 rounded-full text-medium-20 border-2 border-primary-green/70 text-primary-green max-1350:px-14 max-1350:py-4 max-650:py-3 max-650:px-10 max-650:border max-650:text-medium-18'>Bog'lanish</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;