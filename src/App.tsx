import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className='container'>
        <div className='grid-container'>
          <div className='main'>
            <div className='FromToInfo'>
              <p className='FromText'>1 United States Dollars equals</p>
              <p className='ToText'>
                <span className='CurrentRate'>24.7</span> Egyptian Pound
              </p>
              <p className='RefreshTime'>Nov 18, 10:47 PM UTC</p>
            </div>
            <div className='from-rect rectangle'>
              <div className='amount'>1</div>
              <div className='small-line'></div>
              <div className='currency'>USD</div>
              <div className='dropdown-arrow'></div>
            </div>
            <div className='rectangle'>
              <div className='amount'>1</div>
              <div className='small-line'></div>
              <div className='currency'>USD</div>
              <div className='dropdown-arrow'></div>
            </div>
          </div>
          <div className='chart'>charts div</div>
          <div className='popular-container'>
            <p className='compare'>Compare to</p>
            <div className='popular'>
              <div className='popular-card'>
                <p className='popular-coin'>GBP / USD</p>
                <p className='popular-coin-amount'>
                  <b>1.02</b>
                </p>
              </div>
              <div className='popular-card'>
                <p className='popular-coin'>GBP / USD</p>
                <p className='popular-coin-amount'>
                  <b>1.02</b>
                </p>
              </div>
              <div className='popular-card'>
                <p className='popular-coin'>GBP / USD</p>
                <p className='popular-coin-amount'>
                  <b>1.02</b>
                </p>
              </div>
              <div className='popular-card'>
                <p className='popular-coin'>GBP / USD</p>
                <p className='popular-coin-amount'>
                  <b>1.02</b>
                </p>
              </div>
              <div className='popular-card'>
                <p className='popular-coin'>GBP / USD</p>
                <p className='popular-coin-amount'>
                  <b>1.02</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
