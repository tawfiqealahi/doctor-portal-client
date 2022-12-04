import React from "react";

const InfoCard = ({ img, cardTitle, description }) => {
  return (
    <div className="card lg:card-side shadow-xl   bg-primary">
      <figure>
        <img src={img} className="pl-2" alt="Album" />
      </figure>
      <div className="card-body text-white ">
        <h2 className="card-title ">{cardTitle} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default InfoCard;
