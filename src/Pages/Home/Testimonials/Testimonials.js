import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import H14xl from '../../../components/H14xl/H14xl';
import PrimaryH3 from '../../../components/PrimaryH3/PrimaryH3';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonialsData = [
        {
            _id: 1,
            name: 'Ashraful alam',
            image: people1,
            address: 'Scunthorpe',
            testimony: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: 'rizwan rokib',
            image: people2,
            address: 'Brigg',
            testimony: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: 'Raida rokib',
            image: people3,
            address: 'Ashby',
            testimony: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ];

    return (
        <div className='base-100 mt-16'>
            <div className='flex justify-between'>
                <div>
                    <PrimaryH3>Testimonial</PrimaryH3>
                    <H14xl>What our patient says</H14xl>
                </div>
                <img className='w-1/12' src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    testimonialsData.map(testi => <Testimonial
                        key={testi._id}
                        testimonial={testi}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;