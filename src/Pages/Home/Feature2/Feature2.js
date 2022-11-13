import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Feature2 = () => {
    return (
        <section className='mt-40' style={{ background: `url(${appointment})` }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt={`doctor`} src={doctor} className="hidden lg:block -mt-40 mx-8 max-w-2xl" />
                    <div className='mx-8'>
                        <h1 className='text-xl text-primary font-bold'>Appointment</h1>
                        <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Make appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature2;