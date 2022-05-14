import React from 'react';

const ServiceDetails = ({ img, title }) => {
    return (
        <div className="card card-compact w-97  text-center shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

            </div>
        </div>

    );
};

export default ServiceDetails;