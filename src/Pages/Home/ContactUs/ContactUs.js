import React from 'react';
import appointment_bg from '../../../assets/images/appointment.png';
import H14xl from '../../../components/H14xl/H14xl';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import PrimaryH3 from '../../../components/PrimaryH3/PrimaryH3';

const ContactUs = () => {
    return (
        <div className='mt-20 rounded' style={{ background: `url(${appointment_bg})` }}>
            <div className='mx-auto w-1/2 text-center py-10'>
                <PrimaryH3>Contact Us</PrimaryH3>
                <H14xl extraClass='text-white'>Stay connected with us</H14xl>
                <form className='mt-10'>
                    <div className="form-control">
                        <input type="text" placeholder="email address" className="input input-bordered" />
                        <input type="text" placeholder="Subject" className="input input-bordered mt-4" />
                        <textarea rows='4' type="text" placeholder="Your message" className="rounded-lg p-4 my-4" />
                    </div>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;