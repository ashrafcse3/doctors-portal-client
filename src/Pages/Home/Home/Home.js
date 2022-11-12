import React from 'react';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';

const Home = () => {
    return (
        <div className='mx-auto max-w-[1200px]'>
            <Banner></Banner>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Home;