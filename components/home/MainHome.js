import React from 'react';
import About from './About';
import ChooseUs from './ChooseUs';
import Footer from './Footer';
import Header from './header';
import Services from './Services';
import Training from './Training';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <About/>
            <Training/>
            <ChooseUs/>
            <Footer/>
        </div>
    );
};

export default Home;