import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { getAppointStnEndTime } from '../../../Utilities/getAppointStnEndTime';

const EachAppointmentCard = ({ option: { name, slots } }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{getAppointStnEndTime(slots)}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions">
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default EachAppointmentCard;