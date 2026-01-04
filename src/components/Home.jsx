import React from 'react';
import Banner from './Banner';
import ResentModels from '../pages/ResentModels';
import StatsCounter from './StatsCounter';
import KeyFeatures from './KeyFeatures';
import WhyChooseUs from './WhyChooseUs';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Newsletter from './NewsLetter';


const Home = () => {
    return (
        <div>
            <Banner> </Banner>
            <ResentModels> </ResentModels>
            <StatsCounter> </StatsCounter>
            <KeyFeatures> </KeyFeatures>
            <WhyChooseUs> </WhyChooseUs>
            <HowItWorks> </HowItWorks>
            <Testimonials> </Testimonials>
            <FAQ> </FAQ>
            <Newsletter> </Newsletter>
        </div>
    );
};
export default Home;