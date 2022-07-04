import React from "react";
import image1 from "../images/boys.jpg";
import image2 from "../images/boys2.jpg";
import image3 from "../images/boy1.jpg";

import { Link } from "react-router-dom";
function Causes() {
  return (
    <section className='causes-section' id='causes'>
      <div className='causes-container'>
        <div className='causes-header'>
          <h4>give us a </h4>
          <h3>explore causes</h3>
          <p>
            Check through the varieties of csuse and choose to donate to
            whichever you’d like to. Also see Charities for list of charities.
          </p>
        </div>
        <div className='causes-content'>
          <div className='causes-info'>
            <img src={image2} alt='' />
            <h4>Feed Slum Kids</h4>
            <p>
              Help to provide and distribute foodstuffs to kids with obvious
              needs. Eradicate malnourishment off the slums.
            </p>
            <button className='donate-btn'>
              <Link to='/charities'>Donate now</Link>
            </button>
          </div>
          <div className='causes-info'>
            <img src={image3} alt='' />
            <h4>Clothe Slum Kids</h4>
            <p>
              Help to provide quality clothes to battered-looking kids. Upgrade
              the wardrobe of slum kids.{" "}
            </p>
            <button className='donate-btn'>
              <Link to='/charities'>Donate now</Link>
            </button>
          </div>
          <div className='causes-info'>
            <img src={image1} alt='' />
            <h4>Train Slum Kids</h4>
            <p>
              Help to orgainize skill trainings to innovative slum kids. Equip
              jobless kids with a good skill.
            </p>
            <button className='donate-btn'>
              <Link to='/charities'>Donate now</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Causes;
