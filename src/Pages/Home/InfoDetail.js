import React from 'react';

const InfoDetail = ({ img, title, bgColor }) => {
    return (
        <div className={`card lg:card-side  ${bgColor}  text-white shadow-xl`}>
            <figure><img className='pl-5' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title ">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default InfoDetail;