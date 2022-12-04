import React from "react";
import ServiceCard from "./ServiceCard";
import flouride from "../../images/fluoride.png";
import whitening from "../../images/whitening.png";
import cavity from "../../images/cavity.png";

const Service = () => {
  const services = [
    {
      _id: 1,
      name: "Floura Treaatment",
      description: "",
      img: flouride,
    },
    {
      _id: 1,
      name: "Cavity Filling",
      description: "",
      img: cavity,
    },
    {
      _id: 1,
      name: "Teeth Whitening",
      description: "",
      img: whitening,
    },
  ];
  return (
    <div>
      <div className=" my-20 text-center text-center ">
        <h1 className="text-primary text-2xl font-bold ">Our Services</h1>
        <h3 className="text-5xl">Services We provide</h3>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 sm:grid-cols-1">
        {services.map((service) => (
          <ServiceCard
            key={service._id}
            service={service}
            >
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
