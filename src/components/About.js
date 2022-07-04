import React from "react";
import image1 from "../images/helpicon.png";
import image2 from "../images/cashicon.png";
import image3 from "../images/careicon.png";
function About() {
  return (
    <section className='about-section' id='about'>
      <div className='about-container'>
        <div className='about-header'>
          <h5>WHAT WE DO</h5>
          <h2>Change The World</h2>
          <p>
            With collective funds from you and others, slum kids and less
            privileged people can now have access to the good things of life and
            be better equipped to succeed
          </p>
        </div>
        <div className='about-content'>
          <div className='about-info'>
            <img src={image1} alt='' />
            <h4>Provide help to slum kids</h4>
            <p>
              At Fundslums, our ultimate priority is to identify and render
              substantial assistance to the kids, in the slums.
            </p>
          </div>
          <div className='about-info'>
            <img src={image2} alt='' />
            <h4>Raise fund from people</h4>
            <p>
              To achieve our goal, we raise funds from individuals and
              organizations. effectively utilizing blockchain technology.
            </p>
          </div>
          <div className='about-info'>
            <img src={image3} alt='' />
            <h4>Care for the less privileged</h4>
            <p>
              We not only aim to render assistance to slum kids, but also allow
              for other charities to be created by users seeking to fund their
              cause.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
