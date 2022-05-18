import React from 'react';
import About from './About';
import ChooseUs from './ChooseUs';
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
        </div>
    );
};

export default Home;