import React from 'react';
const MainLoader = () => {
    return (
        <div className='main-loader'>
            <svg
                className="main-loader_img"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3 43H22.5V23.1739H3V5H22.5H33.75M33.75 5V43M33.75 5H45V43"
                    stroke="#07AE6E"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="0,0,0,195"
                >
                    <animate
                        attributeType="XML"
                        attributeName="stroke-dasharray"
                        repeatCount="1"
                        dur="3s"
                        values="0,0,0,195;0,97.5,97.5,0; 195,0,0,0"
                        keyTimes="0; 0.3; 1"
                        fill="freeze"
                    >
                    </animate>
                </path>
            </svg>
        </div>
    )
};

export default MainLoader;