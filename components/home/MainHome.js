import React from 'react';
import About from './About';
import Header from './header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <About/>
        </div>
    );
};

export default Home;