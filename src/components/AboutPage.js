import React from "react";
import MainFooter from "./MainFooter";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <section className='aboutpage'>
        <div className='aboutpage-container'>
          <h4>our mission</h4>
          <h3>fundSLUMS</h3>
          <p>Borderless, Transparent and Secure.</p>
          <p>
            {" "}
            Rebuilding the world of Charity giving with fully transparent
            blockchain-based donations to charity organization and individuals
            alike.
          </p>
        </div>
      </section>
      <MainFooter />
    </>
  );
}

export default AboutPage;
