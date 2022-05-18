import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const handelAppointment = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            slot,
            date: formattedDate,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Your appointment is set ${formattedDate} on${slot}`)
                }
                else {
                    toast.error(`Your already have an appointment ${data.booking.date} on${data.booking.slot}`)
                }
                refetch();
                setTreatment(null);
            })
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

                        <select name='slot' className="select select-bordered w-full max-w-lg">
                            {
                                slots?.map((slot, index) => <option

                                    key={index}
                                    slot={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full  my-3" />
                        <input type="text" name='email' disabled value={user?.email} className="input input-bordered w-full  my-3" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full  my-3" />
                        <input type="submit" className=' btn w-full text-center' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;