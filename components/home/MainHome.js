import Image from 'next/image';
import React from 'react';
import Header from './header';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            
      <Image src="/assets/alora-griffiths-TuzrzArccvc-unsplash.jpg" width="64" height="64" alt="sdf" />
        </div>
    );
};

export default Home;