import React from 'react';
import ServiceDetails from './ServiceDetails';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'

const Service = () => {
    return (
        <div class='mt-28'>
            <h2 class='text-center text-2xl text-bold text-primary'>Our Service</h2>
            <h1 class="text-3xl text-center">Services We Provides</h1>
            <ServiceDetails img={fluoride} title={'fluoride treatment'}></ServiceDetails>
            <ServiceDetails img={cavity} title={'Cavity Filling'}></ServiceDetails>
            <ServiceDetails img={whitening} title={'Teeth Whitening'}></ServiceDetails>
        </div>
    );
};

export default Service; 