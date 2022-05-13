import React from 'react';

const InfoDetail = ({ img, title, bgColor }) => {
    return (
        <div class={`card lg:card-side ${bgColor}  text-white shadow-xl`}>
            <figure><img className='pl-5' src={img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title ">{title}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div class="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default InfoDetail;