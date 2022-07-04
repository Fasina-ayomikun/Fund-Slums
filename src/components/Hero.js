import React from "react";
import { ImPlay2 } from "react-icons/im";
import image from "../images/hero.png";
function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-info'>
          <h5>GIVE SLUM KIDS A LIFE</h5>
          <h1> Slum Kids Deserve A Good Life </h1>
          <p>
            They didn't choose to be in slums, they just weren't lucky. We can
            join hands together to give them a good life. Watch video
          </p>

          <div className='play'>
            <ImPlay2 />
            <p>Watch video</p>
          </div>
        </div>
        <img src={image} alt='' />
      </div>
    </section>
  );
}

export default Hero;
