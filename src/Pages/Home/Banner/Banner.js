import React from 'react';
import img from '../../../assets/images/chair.png';
import bg_img from '../../../assets/images/bg.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100">
            <div className='relative border'>
                <img className='' src={bg_img} alt="" />
                <div className="absolute top-40 hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={img} className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;