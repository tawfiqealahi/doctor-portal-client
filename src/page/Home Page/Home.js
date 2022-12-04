import React from "react";
import Service from "../Service/Service";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonials/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <div className="px-5">
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
