import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Stats.css'

function Stats() {
    return ( 
       <div className='container'>
        <div className='row p-5'>
            <div className='col-6 p-5 '>
                <h2 className='mb-5'>Trust with Confidence</h2>
                <div className="m-4" >
                    <h4>Customer-first always</h4>
                    <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                </div>
                <div className="m-4">
                    <h4>No spam or gimmicks</h4>
                    <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                </div>
                <div className="m-4">
                    <h4>The Zerodha universe</h4>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs. 
                    </p>
                </div>
                <div className="m-4">
                    <h4>Do better with money</h4>
                    <p className='text-muted'>With initiatives like <a href="">Nudge</a> and <a href="">Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

            </div>
            <div className='col-6 p-5 mt-5'>
                <img src="ecosystem.png" alt=""  className='ecosystem' />
                <div className='text-center mt-4'>
                    <a href="" className='mx-5'>Explore our products <ArrowForwardIcon/></a>
                    <a href="">Try Kite Demo<ArrowForwardIcon/></a>
                </div>
            </div>
        </div>
       </div>
     );
}

export default Stats;