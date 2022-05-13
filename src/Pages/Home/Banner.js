import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis deleniti nemo quos obcaecati blanditiis iste error, impedit minima esse, fugit nulla ea dicta iure rem! Nulla, voluptatum? Adipisci, accusamus minus!.</p>
                    <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;