import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex  items-center justify-center '>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h1 className='text-primary  text-bold text-2xl'>Appointment</h1>
                <h1 className='text-white text-bold text-4xl'>Make an Appointment Today</h1>
                <p className='text-white' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>

        </section>
    );
};

export default Appointment;