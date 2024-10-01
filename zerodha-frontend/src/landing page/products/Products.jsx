import React from 'react';
import Hero from './Hero'
import Left from './Left';
import Right from './Right';
import Universe from './Universe';
function Products() {
    return ( 
        <>
        <Hero/>
        <Left imgURL="kite.png" prodName="Kite" prodDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" Gplay="" AppStore/>

        <Right imgURL="console.png" prodName="Console" prodDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link="Learn more" />
        <Left imgURL="coin.png" prodName="Coin" prodDesc="OBuy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo=""  Gplay="" AppStore/>

        <Right imgURL="kiteconnect.png" prodName="Kite Connect API" prodDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link="Kite Connect " />
       
        <Left imgURL="varsity.png" prodName="Varsity mobile" prodDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  Gplay="" AppStore/>

        <p className='text-center mt-5 mb-4'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech blog.</a></p>

        <Universe/>
        
        </>
     );
}

export default Products;