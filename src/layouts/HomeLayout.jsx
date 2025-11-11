import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ResentModels from '../pages/ResentModels';


const HomeLayout = () => {
    return (
        <div>
           <header>
             <Navbar> </Navbar>
             <Banner> </Banner>
             <ResentModels> </ResentModels>
           </header>
           
        </div>
    );
};

export default HomeLayout;