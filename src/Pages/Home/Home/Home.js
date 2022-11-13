import React from 'react';
import Banner from '../Banner/Banner';
import Feature1 from '../Feature1/Feature1';
import Feature2 from '../Feature2/Feature2';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-auto max-w-[1200px]'>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <Feature1></Feature1>
            <Feature2></Feature2>
        </div>
    );
};

export default Home;