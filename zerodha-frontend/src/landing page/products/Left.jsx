import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Left({imgURL,prodName,prodDesc,tryDemo,learnMore,Gplay,AppStore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={imgURL}/>

                </div>
                
                <div className="col-6 p-5 mt-3">
                    <h2>{prodName}</h2>
                    <p className='mr-2'>{prodDesc}</p>

                    <div>
                        <a href={tryDemo}>Try Demo <ArrowForwardIcon/></a>
                        <a href={learnMore} style={{marginLeft:"30px"}}>Learn more <ArrowForwardIcon/></a>
                        
                    </div>
                    
                    <div style={{display:"flex"}} className='mt-3'>
                         <a href={Gplay}><img src="googlePlayBadge.svg"/></a>
                        <a href={AppStore}><img src="appstoreBadge.svg"/></a>
                    </div>
                   


                </div>
            </div>

        </div>
     );
}

export default Left;