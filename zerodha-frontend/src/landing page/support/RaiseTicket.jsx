import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import BarChartIcon from '@mui/icons-material/BarChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import GamepadIcon from '@mui/icons-material/Gamepad';
import TollIcon from '@mui/icons-material/Toll';
function RaiseTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-muted">
        <h3 className=" mb-4">To create a ticket, select a relevant topic</h3>
        <div className="col-4 mb-2 p-4">
         <h4> <AddCircleOutlineIcon/>  Account Opening</h4>
          <ul style={{listStyle:"none",lineHeight:"2"}}>
            <li>
              <a href="">Getting Started</a>
            </li>
            <li>
              <a href="">Online</a>
            </li>
            <li>
              <a href="">Offline</a>
            </li>
            <li>
              <a href="">Getting Started</a>
            </li>
            <li>
              <a href="">Charges</a>
            </li>
            <li>
              <a href="">Company,Partnership and HUF</a>
            </li>
            <li>
              <a href="">Non Resident Indian(NRI)</a>
            </li>
          </ul>
        </div>
        <div className="col-4 mb-2 p-4">
          <h4><PermIdentityIcon/>  Your Zerodha Account</h4>
          <ul style={{listStyle:"none",lineHeight:"2.2"}}>
            <li><a href="">Login credentials</a></li>
            <li><a href="">Your Profile</a></li>
             <li><a href="">Account modification and segment
            addition </a></li>
            <li><a href="">CMR & DP ID </a></li>
            <li><a href="
            ">Nomination </a></li>
            <li><a href="">Transfer and conversion of shares</a></li>
          </ul>
        </div>
        <div className="col-4 mb-2 p-4">
          <h4><BarChartIcon/>  Trading and Markets</h4>
          <ul style={{listStyle:"none",lineHeight:"2"}}>
            <li><a href="">Trading </a></li>
            <li><a href="">FAQs</a></li> 
            <li> <a href="">Kite</a></li> 
            <li><a href="">Margins </a></li>
            <li><a href="">Product and order types </a></li>
            <li><a href="">Corporate actions</a></li>
            <li><a href="">Kite features</a></li>
          </ul>
        </div>
        <div className="col-4 mb-2 p-4">
          <h4> <CreditCardIcon/>  Funds</h4>
          <ul style={{listStyle:"none",lineHeight:"2"}}>
            <li><a href="">Funds withdrawal </a></li>
            <li><a href="">Adding funds</a></li> 
            <li> <a href="">Adding Bank Accounts</a></li> 
            <li><a href="">eMandates </a></li>
          </ul>
        </div>
        <div className="col-4 mb-2 p-4">
          <h4><GamepadIcon/>  Console</h4>
          <ul style={{listStyle:"none",lineHeight:"2"}}>
            <li><a href="">IPO </a></li>
            <li><a href="">FAQs</a></li> 
            <li> <a href="">Funds statement</a></li> 
            <li><a href="">Profile  </a></li>
            <li><a href="">Reports </a></li>
            <li><a href="">Referal program</a></li>
          </ul>
        </div>
        <div className="col-4 mb-2 p-4">
          <h4><TollIcon/>  Coins</h4>
          <ul style={{listStyle:"none",lineHeight:"2"}}>
            <li><a href="">Understanding mutual funds and Coins  </a></li>
            <li><a href="">Coin app</a></li> 
            <li> <a href="">Coin web</a></li> 
            <li><a href="">Transaction and reports  </a></li>
            <li><a href="">National Pension Scheme (NPS) </a></li>
            <li><a href="">Corporate actions</a></li>
            <li><a href="">Kite features</a></li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default RaiseTicket;
