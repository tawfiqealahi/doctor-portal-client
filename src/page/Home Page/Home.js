import React from "react";
import Service from "../Service/Service";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Testimonial from "../Testimonials/Testimonial";


const Home = () => {
  return (
    <div className="px-7">
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      
    </div>
  );
};

export default Home;
