import React from 'react';
import { Link } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Hero() {
    return ( 
        <div className="container">
        <div className="top-content text-center p-4 mt-4 mb-5">
            <h1>
            Technology
            </h1>
            <p>Sleek, modern, and intuitive trading platforms</p>
            <p>Check out our <Link> investment offerings <ArrowForwardIcon/></Link></p>
        </div>
        </div>
     );
}

export default Hero;