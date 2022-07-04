import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";

function MainFooter() {
  return (
    <footer className='main-footer'>
      <div className='social-icons'>
        <BsFacebook />
        <BsTwitter />
        <BsLinkedin />
        <BsYoutube />
      </div>
      <h4>Copyright &copy; {new Date().getFullYear()} FundSlums</h4>
    </footer>
  );
}

export default MainFooter;
