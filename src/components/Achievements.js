import React from "react";
import image from "../images/achievement.png";
import { BsArrowRight } from "react-icons/bs";
function Achievements() {
  return (
    <section className='achievement-section' id='contact'>
      <div className='section-color'></div>
      <div className='achievement-container'>
        <div className='achievement-content'>
          <h4>our Achievements</h4>
          <h3>We provide vital help to people</h3>
          <p>
            Ranging from education to clothing, shelter, feeding and skill
            training, we continuously help slum kids across Africa.{" "}
          </p>
          <div className='achievements'>
            <div className='achievement-info'>
              <div className='achievement-color'></div>
              <h3>12+</h3>
              <p>Communities Reached</p>
            </div>
            <div className='achievement-info'>
              <div className='achievement-color'></div>
              <h3>1500+</h3>
              <p>Slum Kids Funded</p>
            </div>
            <div className='achievement-info'>
              <div className='achievement-color'></div>
              <h3>180+</h3>
              <p>GoFund Me Created</p>
            </div>
            <div className='achievement-info'>
              <BsArrowRight />
              <p>Become a Volunteer</p>
            </div>
          </div>
        </div>
        <img src={image} alt='' />
      </div>
    </section>
  );
}

export default Achievements;
