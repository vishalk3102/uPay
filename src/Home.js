import React from "react";
import Navbar from "./navbar";
import Header from "./Header";
import HowItWork from "./HowItWork";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contacts from "./Contacts";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWork />
      <Aboutus />
      <Services />
      <Contacts />
      <Footer />
    </>
  );
};
export default Home;
