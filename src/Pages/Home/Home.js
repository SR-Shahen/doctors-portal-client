import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './Service';
import ServiceBanner from './ServiceBanner';

const Home = () => {
    return (
        <div className='pl-12'>

            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <ServiceBanner></ServiceBanner>
        </div>
    );
};

export default Home;