import React from 'react';
import { getAppointStnEndTime } from '../../../Utilities/getAppointStnEndTime';

const EachAppointmentCard = ({ option, setCardOption }) => {
    const { name, slots } = option;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{getAppointStnEndTime(slots)}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div onClick={() => setCardOption(option)} className="card-actions">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn bg-gradient-to-r from-primary to-secondary text-white border-none">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default EachAppointmentCard;