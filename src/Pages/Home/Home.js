import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import BusinessSummary from './BusinessSummary';
import HomeBanner from './HomeBanner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;