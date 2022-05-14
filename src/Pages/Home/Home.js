import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';

const Home = () => {
    return (
        <div className='px-12'>

            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;