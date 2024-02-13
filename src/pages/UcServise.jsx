import React from 'react'
import { ucData, ucIcon } from '../assets/data'
import { formatPrice } from '../formats/price'

const UcServise = () => {
    return (
        <section>
            <div className="container py-10">
                <h2 className="section-header_title">Uc Service</h2>

                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 py-10">
                    {ucData.map((item, index) => {
                        return (
                            <li className='bg-primary-green/5 rounded-xl cursor-pointer group relative' key={index}>
                                <div className='card-header'>
                                    <img className='w-28 sm:w-32 group-hover:scale-110 duration-200' src={item.img} alt="uc icon" />
                                </div>
                                <div className='text-center p-4'>
                                    <h3 className='text-xl font-bold flex items-center justify-center text-orange'>
                                        <img className='w-6 h-6' src={ucIcon} alt="icon" />
                                        <span className='ml-[2px] inline-block'>{item.count}</span>
                                    </h3>
                                    <p>{formatPrice(item.price)} so'm</p>
                                    <a target='_blank' href='https://t.me/deSENATORus' className='block btn-default mt-3'>Sotib olish</a>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}

export default UcServise