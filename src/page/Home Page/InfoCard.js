import React from "react";

const InfoCard = ({ img, cardTitle, description }) => {
  return (
    <div class="card lg:card-side shadow-xl   bg-primary">
      <figure>
        <img src={img} className="pl-2" alt="Album" />
      </figure>
      <div class="card-body text-white ">
        <h2 class="card-title ">{cardTitle} </h2>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default InfoCard;
