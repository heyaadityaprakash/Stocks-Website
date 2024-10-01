import React from 'react';
import './Pricing.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Pricing() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='mb-4'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <ArrowForwardIcon/> </a>
                </div>

                
                <div className="col mt-4">
                    <div className="price row text-center">
                        <div className="col p-2 ">
                            <h1 className='mb-3'><img src="pricing0.svg" alt="" /></h1>
                            <p className="text-muted"> Free account
                            opening</p>
                        </div>
                        <div className="col p-2 ">
                            <h1 className='mb-3'><img src="pricing0.svg" alt="" /></h1>
                            <p className="text-muted"> Free equity delivery
                            and direct mutual funds</p>
                        </div>
                        <div className="col p-2 ">
                            <h1  className='mb-3'> <img src="intradayTrades.svg" alt="" /></h1>
                            <p className="text-muted">Intraday and F&O</p>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
     );
}

export default Pricing;