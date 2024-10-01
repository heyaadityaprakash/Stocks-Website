import React from 'react';
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Order from "./Order";
import Position from "./Position";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
function Dashboard() {
    return ( 
        <div className="dashboard-container">
        <GeneralContextProvider>
          <WatchList />
        </GeneralContextProvider>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/order" element={<Order />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/position" element={<Position />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>
     );
}

export default Dashboard;