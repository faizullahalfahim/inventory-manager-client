import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';


const HomeLayout = () => {
    return (
        <div>
           <header>
             <Navbar> </Navbar>
             <Banner> </Banner>
           </header>
           
        </div>
    );
};

export default HomeLayout;