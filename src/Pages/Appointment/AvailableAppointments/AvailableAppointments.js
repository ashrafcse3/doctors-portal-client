import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({ dateSelected }) => {
    return (
        <div>
            {
                dateSelected ? `Your Selected date is ${format(dateSelected, 'PP')}` : 'select a date'

            }
        </div>
    );
};

export default AvailableAppointments;