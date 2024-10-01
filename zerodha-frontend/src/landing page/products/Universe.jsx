import React from "react";
import './Universe.css'; // Make sure to create this CSS file or adjust existing styles

function Universe() {
  return (
    <>
      <div className="container universe-container">
        <div className="row text-center">
          <h2 className="mt-5">The Zerodha Universe</h2>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-md-4 p-3 mt-4">
            <img src="zerodhaFundhouse.png" alt="" className="grid-image" />
            <p className="text-muted text-small mt-3">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-md-4 p-3 mt-4">
            <img src="sensibullLogo.svg" alt="" className="grid-image" />
            <p className="text-muted text-small mt-3">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-md-4 p-3 mt-4">
            <img src="tijori.png" alt="" className="grid-image" />
            <p className="text-muted text-small mt-3">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-md-4 p-3 mt-4">
            <img src="streakLogo.png" alt="" className="grid-image" />
            <p className="text-muted text-small mt-3">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>

          <div className="col-md-4 p-3 mt-4">
            <img src="smallcaseLogo.png" alt="" className="grid-image" />
            <p className="text-muted text-small mt-3">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>

          <div className="col-md-4 p-3 mt-4">
            <img src="dittoLogo.png" alt="" className="grid-image" />
            <p className="text-muted text-small mt-3">
              Personalized advice on life and health insurance. No spam and no
              mis-selling. Sign up for free.
            </p>
          </div>

          <button className="btn p-1 fs-4 mt-4">Sign up for free</button>
        </div>
      </div>
    </>
  );
}

export default Universe;
