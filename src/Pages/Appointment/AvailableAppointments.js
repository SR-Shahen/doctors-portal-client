import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState([])
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <p className='text-center text-secondary text-xl'>Available Appointments on:{format(date, 'PP')}</p>
            <p className='text-center text-lg'>Please Select a Service</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-center'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>

            {treatment && <BookingModal
                treatment={treatment}
                date={date}
                setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;