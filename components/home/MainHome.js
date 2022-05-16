import React from 'react';
import About from './About';
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
        </div>
    );
};

export default Home;