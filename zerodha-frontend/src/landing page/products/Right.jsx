import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Right({imgURL,prodName,prodDesc,link}) {
    return ( 
        <div className="container">
            <div className="row mt-5 mb-4">
                <div className='col-6 p-5 mt-5'>
                <h2>{prodName}</h2>
                <p className='mr-2'>{prodDesc}</p>
                <a href={link}>{link} <ArrowForwardIcon/></a>

                </div>
                <div className="col-6">
                    <img src={imgURL}/>
                </div>
            </div>
        </div>
     );
}

export default Right;