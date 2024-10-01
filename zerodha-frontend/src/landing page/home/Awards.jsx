import React from "react";

export default function Awards(){
    return(
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <img src="largestBroker.svg" alt="" style={{width:"80%"}}/>
                </div>
                <div className="col-6 mt-4" >
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in</p>
                    <div className="row">
                        <div className="col-6 p-4">
                        <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Comodity Derivatives</p>
                        </li>
                        <li>
                            <p>Currency Derivatives</p>
                        </li>
                    </ul>
                        </div>
                        <div className="col-6 p-4">
                        <ul>
                        <li>
                            <p>Stock and IPOs</p>
                        </li>
                        <li>
                            <p>Direct Mututal FUnds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securities</p>
                        </li>
                    </ul>
                        </div>
                    </div>
                    <img src="pressLogos.png" alt="pressimg"style={{width:"90%"}}/>
                    
                </div>

            </div>
        </div>
    )
}