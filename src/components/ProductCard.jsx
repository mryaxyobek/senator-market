import React from 'react';
import { Link } from 'react-router-dom';

// images
import productImg from '../assets/images/other/product.jpg';

const ProductCard = () => {
    return (
        <li className='product-card'>
            <img width={304} height={210} src={productImg} alt="senator market pubg account picture" className="product-card_img" />
            <button title='Favorite toggle' aria-label='Favorite toggle' className="product-card_like-btn">
                <svg width="28" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                    className='transition-colors'
                        d="M13.2261 6.99763L14.2996 7.91784C14.3548 7.96512 14.4362 7.96512 14.4914 7.91784L15.5649 6.99763C18.5678 4.42372 23.1789 5.26951 25.0728 8.74164C26.4382 11.2449 25.9265 14.356 23.8312 16.2901L14.6961 24.7225C14.5264 24.8792 14.2647 24.8792 14.0949 24.7225L4.95978 16.2901C2.86453 14.356 2.35283 11.2449 3.71825 8.74164C5.61214 5.26951 10.2232 4.42372 13.2261 6.99763Z"
                        stroke="#07AE6E"
                        fill='#07AE6E'
                        strokeWidth="2"
                    />
                </svg>
            </button>
            <div className="product-card_content">
                <h3 className="product-card_title">S5 sezondan boshlab o'ynalgan old akkaunt. Yana akkauntda</h3>
                <div className="product-card_mid-contents">
                    <span className="product-card_mid-contents_item">Darajasi</span>
                    <span className="product-card_mid-contents_line"></span>
                    <span className="product-card_mid-contents_item">73</span>
                </div>
                <div className="product-card_mid-contents">
                    <span className="product-card_mid-contents_item">RP</span>
                    <span className="product-card_mid-contents_line"></span>
                    <span className="product-card_mid-contents_item">12</span>
                </div>
                <p className="product-card_price">550.000 so'm</p>
                <Link to={`/account/id-123456`} className='product-card_btn'>Sotib olish</Link>
            </div>
        </li>
    )
};

export default ProductCard;