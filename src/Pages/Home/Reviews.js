import React from 'react';
import quote from '../../assets/icons/quote.svg'
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people3.png'
import Review from './Review';


const Reviews = () => {
    const says = [
        {
            _id: 1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: pepole1,
            name: "Pankha Mofiz",
            location: "Godagari"
        },
        {
            _id: 2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img: pepole2,
            name: "Pankha Mofiz",
            location: "Godagari"
        },
        {
            _id: 3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content.",
            img: pepole3,
            name: "Pankha Mofiz",
            location: "Godagari"
        }
    ];
    return (
        <section className='pt-10'>
            <div className='flex justify-between'>
                <div className='mt-14'>
                    <h1 className='text-secondary font-medium text-xl'>Testimonial</h1>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className=' w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-9'>
                {
                    says.map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;