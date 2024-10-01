import React from 'react';
import './Hero.css'
function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="row p-5" id='supportWrapper'>
                <h4 className='fs-4'>Support Portal</h4>
                <a href="">Track Ticket</a>
            </div>

            <div className="row p-3 mx-5">
                <div className="col-6 p-5 ">
                    <h3 className='fs-4'>Search for an answer or browse help topics to create a ticket</h3>
                    <input type="text" placeholder='Eg: how do i activate F&O, why is my order getting rejected...' /><br /><br />
                    <a href="">Track account opening </a>
                    <a className='mx-2' href="">Track segment activation </a>
                    <a className='mx-2' href="">Intraday margins </a>
                    <a  href="">Kite user manual</a>
                </div>
                <div className="col-6 p-4">
                    <h3>Featured</h3>
                    <ol>
                        <li className='mb-2'><a href="">Surveillance measure on scrips - September 2024</a></li>
                        <li><a href="">Rights Entitlements listing in September 2024
                        </a></li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;