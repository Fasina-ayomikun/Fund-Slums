import React from "react";
import { useAppProvider } from "../context";
import image from "../images/boy2.jpg";
import { Link } from "react-router-dom";
function Donate() {
  const { openModal } = useAppProvider();
  return (
    <section className='donation-section' id='events'>
      <div className='donation-container'>
        <img src={image} alt='' />
        <div className='donation-content'>
          <h4>trending cause</h4>
          <h3>Education for Street Children in Agege</h3>
          <p>Hope Charity</p>

          <div className='donation-range'>
            <div className='range-color'>
              <p>70%</p>
            </div>
          </div>
          <p>7 ETH donated out of 10 ETH</p>
          <p className='countdown'>Countdown</p>
          <p>
            Every children deserve to go to a good school, no matter their
            background. Help these children get into school by donating as you
            can. Let's take them off the streets.
          </p>
          <button className='donate-btn'>
            <Link to='/charities'>Donate now</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Donate;
