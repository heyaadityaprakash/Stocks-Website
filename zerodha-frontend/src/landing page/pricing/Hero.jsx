import React from 'react';

function Hero() {
    return ( 
        <>
        <div className="container">
            <div className="row text-center mt-5 text-muted">
                <h2>Charges</h2>
                <p className='mb-5'>List of all Charges and Taxes</p>
            </div>
            <div className='p-5'></div>

            <div className="row mt-5">
                <div className="col-4 text-center p-3">
                    <img src="pricingEquity.svg" alt="" />
                    <h4>Free equity delivery</h4>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                 </div>
                <div className="col-4 text-center p-3">
                <img src="intradayTrades.svg" alt="" />
                    <h4>Intraday and F&O trades</h4>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 text-center p-3">
                <img src="pricingEquity.svg" alt="" />
                    <h4>Free direct MF</h4>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
        </>
     );
}

export default Hero;