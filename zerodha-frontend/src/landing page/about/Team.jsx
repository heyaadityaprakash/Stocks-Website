import React from 'react';
import { Link } from 'react-router-dom';
function Tean() {
    return ( 
       <div className="container p-4">
        <div className="row p-5 mt-5 ">
            <div className="col-6 text-center fs-6 p-5">
                <img className='mt-5 mb-3' src="nithinKamath.jpg" alt=""  style={{borderRadius:"100%",width:"50%"}} />
                <h3>Nithin Kamath</h3>
                <p>Founder, CEO</p>
            </div>
            <div className="col">
                <h2 className='mb-5'>People</h2>

                <p style={{width:"70%"}}>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p style={{width:"70%"}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <Link to="/">Homepage</Link> / <a href="">TradingQnA </a>/ <a href="">Twitter</a> </p>

            </div>
        </div>

        
       </div>
     );
}

export default Tean;