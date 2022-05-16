import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handelAppointment = event => {
        event.preventDefault();
        const patient = event.target.name.value;
        console.log(patient);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handelAppointment} >
                        <input disabled value={format(date, 'PP')} className="input input-bordered w-full  my-3" />

                        <select className="select select-bordered w-full max-w-lg">
                            {
                                slots?.map(slot => <option slot={slot}>{slot}</option>)
                            }


                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full  my-3" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full  my-3" />
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full  my-3" />
                        <input type="submit" className=' btn w-full text-center' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;