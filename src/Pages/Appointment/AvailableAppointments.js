import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, "PP");
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://desolate-coast-39419.herokuapp.com/available?date=${formattedDate}`)
        .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <p className='text-center text-secondary text-xl'>Available Appointments on:{format(date, 'PP')}</p>
            <p className='text-center text-lg'>Please Select a Service</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 text-center'>
                {
                    services?.map(service => <Service
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
                refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;