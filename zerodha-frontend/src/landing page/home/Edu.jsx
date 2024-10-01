import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Edu() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col">
                    <img src="education.svg" alt="eduimg" style={{width:"70%"}} />
                   
                </div>

                
                <div className="col mt-4">
                   <h1 className='mb-5'>Free and open market education</h1>
                   <div className='mb-4'>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="">Varsity <ArrowForwardIcon/></a></div> 
                    <div>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="">Trading Q&A <ArrowForwardIcon/></a></div> 
                </div>

            </div>
        </div>
     );
}

export default Edu;
<h2>Education</h2>