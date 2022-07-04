import React from "react";

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <form className='footer-form'>
          <div className='footer-text'>
            <h4>Subscribe</h4>
            <p>For more updates and events</p>
          </div>
          <input type='email' placeholder='Enter your email address here' />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Footer;
