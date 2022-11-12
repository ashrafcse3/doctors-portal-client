import React from 'react';
import EachCard from './EachCard';
import { ClockIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';

const InfoCard = () => {
    const infoDetails = [
        {
            id: 1,
            icon: <ClockIcon className='w-1/4' />,
            title: 'Opening hours',
            subtitle: 'Monday to Friday from 9am to 5pm.',
            'bg_color': 'from-primary to-secondary',
        },
        {
            id: 2,
            icon: <MapPinIcon className='w-1/4' />,
            title: 'Visit our location',
            subtitle: '7 Alibaba Court, DN15 8QJ, UK',
            'bg_color': 'from-neutral to-neutral',
        },
        {
            id: 3,
            icon: <PhoneIcon className='w-1/4' />,
            title: 'Contact us now',
            subtitle: '+4402233882298',
            'bg_color': 'from-primary to-secondary',
        },
    ];

    return (
        <div className='mt-14 flex w-screen gap-20 lg:flex-row sm:flex-col'>
            {
                infoDetails.map(info => <EachCard
                    key={info.id}
                    info={info}
                />)
            }
        </div>
    );
};

export default InfoCard;