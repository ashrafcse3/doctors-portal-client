import React from 'react';
import img from '../../../assets/images/chair.png';
import bg_img from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ dateSelected, setDateSelected }) => {
    return (
        <div
            style={{
                background: `url(${bg_img})`,
                backgroundSize: 'contain'
            }}
        >
            <div className='hero'>
                <div className=" top-40 hero-content flex-col lg:flex-row-reverse">
                    <img alt='' src={img} className="max-w-xl rounded-lg shadow-2xl" />
                    <div className='mr-8'>
                        <DayPicker
                            mode='single'
                            selected={dateSelected}
                            onSelect={setDateSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;