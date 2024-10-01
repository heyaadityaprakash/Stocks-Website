import React from "react";
function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 text-center">
          <div className="col-8">
            <a href="">
              <h3>Brokerage Calculator</h3>
            </a>
            <ul className="text-muted mt-4" style={{textAlign:"left", listStyle:"none",lineHeight:"2", fontSize:"14px"}}>
              <li>
                Call & Trade and RMS auto—squareoff: +dditional charges of «50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e—mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                per contract note.
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged (40 per executed order instead of per executed order).
              </li>
              <li>
                {" "}
                For NRI account (non-PIS), 0.5% or uøø per executed order for
                equity (whichever is lower).
              </li>
              <li>
                Courier charges apply. For NRI account (PIS), 0.5% or per
                executed order for equity (whichever is lower).
              </li>
            </ul>
          </div>
          <div className="col-4">
            <a href="">
              <h3>List of Charges</h3>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Brokerage;
