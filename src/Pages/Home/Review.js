import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, location } = review;
    return (
        <div class="card w-96  shadow-xl">
            <div class="card-body">
                <p>{description}</p>
                <div class="flex items-center mt-9">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className='pl-5'>
                        <h1 className='text-xl font-medium'>{name}</h1>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;