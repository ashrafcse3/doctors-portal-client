import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import PrimaryH3 from '../../../components/PrimaryH3/PrimaryH3';
import BookAppointmentModal from './BookAppointmentModal';
import EachAppointmentCard from './EachAppointmentCard';

const AvailableAppointments = ({ dateSelected }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [cardOption, setCardOption] = useState();

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, []);

    return (
        <div className='mt-8'>
            <PrimaryH3 extraClass="text-center">
                {
                    dateSelected ? `Your Selected date is ${format(dateSelected, 'PP')}` : 'select a date'

                }
            </PrimaryH3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    appointmentOptions.map(option => <EachAppointmentCard
                        key={option._id}
                        option={option}
                        setCardOption={setCardOption}
                    ></EachAppointmentCard>)
                }
            </div>
            {
                cardOption &&
                <BookAppointmentModal
                    cardOption={cardOption}
                    setCardOption={setCardOption}
                    dateSelected={dateSelected}
                ></BookAppointmentModal>
            }
        </div>
    );
};

export default AvailableAppointments;