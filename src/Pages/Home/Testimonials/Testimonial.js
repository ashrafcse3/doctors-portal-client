import React from 'react';

const Testimonial = ({ testimonial: { name, image, address, testimony } }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <p className='p-4'>{testimony}</p>
            <div className="flex items-center">
                <div className="avatar p-4">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt={`alt: ${image}`} />
                    </div>
                </div>
                <div>
                    <h2 className='font-bold'>{name}</h2>
                    <h4>{address}</h4>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;