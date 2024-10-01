import React from 'react';
import './Error.css'
import { Link } from "react-router-dom";

function Error() {
    return ( 
        <div className="container text-center mt-5 p-4">
            <div className="row">
                <div className="col">
                     <h2 style={{paddingLeft: "40%"}}>404 </h2>
                    <h1 style={{fontSize:"200%", paddingLeft: "40%"} } className='text-muted mt-3'>I cannot find the page </h1>
                    <button className='signup btn p-1 fs-6'>Sign up for free</button>
                    <p style={{paddingLeft: "40%"}}>We couldn’t find the page you were looking for. <Link to="/"> Visit Zerodha’s home page</Link></p>
                </div>
                <div className="col">
                    <img src="error_img.png" alt="eror" />
                </div>

            </div>
           
        </div>
     );
}

export default Error;