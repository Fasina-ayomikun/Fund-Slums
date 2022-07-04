import React from "react";
import About from "./About";
import Achievements from "./Achievements";
import Causes from "./Causes";
import Donate from "./Donate";
import Footer from "./Footer";
import Form from "./Form";
import Hero from "./Hero";
import MainFooter from "./MainFooter";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <section>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Donate />
      <Causes />
      <Achievements />
      <Footer />
      <Form />
      <MainFooter />
    </section>
  );
}

export default Home;
