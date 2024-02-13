import React from 'react';

// images
import uc from '../assets/images/other/uc.png'
import agreement from '../assets/images/svg/agreement.svg'
import flash from '../assets/images/svg/flash.svg'
import magicStick from '../assets/images/svg/magic-stick.svg'
import { Link } from 'react-router-dom';
const UcSection = () => {
    return (
        <section className='py-12'>
            <div className="container max-350:px-0">
                <div className="relative overflow-hidden rounded-3xl max-500:rounded-2xl">
                    {/* shapes */}
                    <div className="absolute w-96 h-96 rounded-full bg-primary-green/30 z-0 -top-20 -left-20"></div>
                    <div className="absolute w-96 h-96 rounded-full bg-primary-green/30 z-0 -bottom-20 -right-20 max-550:bg-primary-green/20"></div>

                    {/* content */}
                    <div className="z-10 flex-center gap-28 w-full rounded-3xl border-2 border-white/20 py-20 px-32 bg-white/10 backdrop-filter backdrop-blur-[180px] max-[1400px]:px-28 max-1350:px-20 max-1350:py-10 max-1350:gap-16 max-1100:gap-12 max-1100:flex-col max-950:p-8 max-768:p-7 max-650:p-6 max-500:rounded-2xl max-470:p-5">
                        {/* first */}
                        <div className="flex-center flex-col">
                            <img width={412} height={350} src={uc} alt="uc image of senator market" className="max-550:w-full max-550:h-auto" />
                            <ul className="flex gap-11 max-500:gap-6 max-470:flex-center-between max-350:flex-wrap max-400:justify-center max-400:gap-5">
                                <li className="flex-center flex-col">
                                    <img width={72} height={72} src={agreement} alt="agreement image of senator market" className="mb-5 w-72 h-72 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12" />
                                    <h3 className="text-bold-24 uppercase">Ishonchli</h3>
                                </li>
                                <li className="flex-center flex-col">
                                    <img width={72} height={72} src={flash} alt="flash image of senator market" className="mb-5 w-72 h-72 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12" />
                                    <h3 className="text-bold-24 uppercase">Tezkor</h3>
                                </li>
                                <li className="flex-center flex-col">
                                    <img width={72} height={72} src={magicStick} alt="magic stick image of senator market" className="mb-5 w-72 h-72 max-800:w-16 max-800:h-16 max-470:w-12 max-470:h-12" />
                                    <h3 className="text-bold-24 uppercase">Sifatli</h3>
                                </li>
                            </ul>
                        </div>

                        {/* main content */}
                        <div className="space-y-3 max-1100:text-center max-650:text-start">
                            <h2 className="text-medium-20 text-primary-green uppercase max-550:text-lg max-500:leading-6">senator uc</h2>
                            <p className="text-bold-38">Sizga UC kerakmi? <br /> Tezkor, ishonchli va arzon uclar faqatgina bizda!</p>
                            <p className="text-medium-20 text-primary-gray max-550:text-lg max-500:leading-6">Sizga ishonchli UC xizmati kerak bo'lsa unda bizga murojaat qiling. Bizning UC servisimiz 3 yildan ortiqmijozlarga xizmat ko'rsatib kelmoqda. Siz ishoning siz bizning UC servisimizdan foydalanganingizga afsuslanmaysiz. O'ylanmang bizga murojaat qiling.</p>
                            <Link to='uc-service' className='inline-block btn-default px-11 !mt-6 max-470:flex'>Uc sotib olish</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default UcSection;