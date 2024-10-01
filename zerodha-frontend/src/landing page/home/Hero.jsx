import React from 'react';
import './Hero.css'
function Hero() {
    return ( 
       <div className='container p-5'>
        <div className='row text-center'>
            <img src="homeHero.png" alt="Hero-image" className='mb-5'/>
            <h1 className='mt-5 '>Invest in Everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='btn p-3 fs-5'>Sign up for free</button>
        </div>
       </div>
     );
}

export default Hero;