import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import HomeBanner from './HomeBanner';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Tools></Tools>
            <Footer></Footer>
        </div>
    );
};

export default Home;