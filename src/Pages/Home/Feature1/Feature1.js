import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const Feature1 = () => {
    return (
        <div className="mt-28 hero min-h-screen bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img alt={`treatment`} src={treatment} className="mx-8 max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-8'>
                    <h1 className="text-5xl font-bold">Exceptional Dental<br /> Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Feature1;