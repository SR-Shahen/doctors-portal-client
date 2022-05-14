import React from 'react';
import InfoDetail from './InfoDetail';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid  grid-cols-1  lg:grid-cols-3 mx-10 gap-5'>
            <InfoDetail img={clock} title={'Opening hours'} bgColor={'bg-primary bg-gradient-to-r from-secondary to-primary'}></InfoDetail>
            <InfoDetail img={marker} title={'Visit our location'} bgColor={'bg-accent'}></InfoDetail>
            <InfoDetail img={phone} title={'contact us now'} bgColor={'bg-primary bg-gradient-to-r from-secondary to-primary'}></InfoDetail>
        </div>
    );
};

export default Info;