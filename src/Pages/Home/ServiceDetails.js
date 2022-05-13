import React from 'react';

const ServiceDetails = ({ img, title }) => {
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;