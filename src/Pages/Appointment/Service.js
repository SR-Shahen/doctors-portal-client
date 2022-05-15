import React from 'react';


const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card w-96  shadow-xl">
            <div class="card-body ">
                <h2 class="card-title justify-center text-secondary">{name}</h2>
                <p>
                    {slots.length > 0 ?
                        <span>{slots[0]}</span> :
                        <span className='text-red-500'>Try Another Date.</span>}
                </p>
                <p>{slots.length} {slots.length === 0 ? "space" : "spaces"} Available</p>
                <div class="card-actions justify-center">
                    <button disabled={slots.length === 0} className='btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary'>book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;