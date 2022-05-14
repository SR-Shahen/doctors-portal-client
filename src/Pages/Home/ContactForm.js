import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactForm = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='text-center mt-14 px-5 py-14'>
            <h1 className='text-secondary text-2xl font-semibold'>Contact Us</h1>
            <p className='text-4xl text-white '>Stay Connected With Us</p>
            <form className='' >
                <input type="email" placeholder="Email Address" className="input my-5 w-full max-w-lg" /> <br />
                <input type="text" placeholder="Subject" className="input w-full max-w-lg" /><br />
                <textarea style={{ height: '148px' }} className="textarea w-full max-w-lg mt-5" placeholder="Your Message"></textarea><br />
                <PrimaryButton>submit</PrimaryButton>
            </form>
        </div>
    );
};

export default ContactForm;