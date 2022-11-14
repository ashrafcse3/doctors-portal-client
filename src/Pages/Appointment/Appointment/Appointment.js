import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [dateSelected, setDateSelected] = useState(new Date());
    return (
        <div className='mx-auto max-w-[1200px]'>
            <AppointmentBanner
                dateSelected={dateSelected} setDateSelected={setDateSelected}
            ></AppointmentBanner>
            <AvailableAppointments
                dateSelected={dateSelected}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;