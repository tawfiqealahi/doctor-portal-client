import React from "react";
import Service from "../Service/Service";
import Banner from "./Banner";
import Info from "./Info";

const Home = () => {
  return (
    <div className="px-7">
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      
    </div>
  );
};

export default Home;
