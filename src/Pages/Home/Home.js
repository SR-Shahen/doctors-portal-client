import React from 'react';
import Footer from '../Shared/Footer';
import Appointment from './Appointment';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import Reviews from './Reviews';
import Service from './Service';

const Home = () => {
    return (
        <div className='px-12'>

            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Appointment></Appointment>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;