import React from 'react';
import AllModels from '../components/AllModels';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllModelsLayout = () => {
   
    return (
        <div>
            <Navbar> </Navbar>
            <AllModels> </AllModels>
            <Footer> </Footer>
        </div>
    );
};

export default AllModelsLayout;