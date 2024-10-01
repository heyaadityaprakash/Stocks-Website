import React from 'react';
import Awards from './Awards'
import Edu from './Edu'
import Hero from './Hero'
import Pricing from './Pricing'
import Stats from './Stats'
import OpenAcc from '../OpenAcc'
import Navbar from '../Navbar'
import Footer from '../Footer'

function Home() {
    return ( 
        <>
        
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Edu/>
        <OpenAcc/>
        
        </>
    );
}

export default Home;