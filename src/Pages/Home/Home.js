import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import BusinessSummary from './BusinessSummary';
import HomeBanner from './HomeBanner';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;