import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../images/icons/clock.svg";
import phone from "../../images/icons/phone.svg";
import marker from "../../images/icons/marker.svg";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
      <InfoCard cardTitle="opening hours" description="Our doctors available at 9am to 10pm." img={clock}>
      </InfoCard>
      <InfoCard cardTitle="Telephone"  description="available : +8801723435223" img={phone}></InfoCard>
      <InfoCard cardTitle="Location" description="123 no building. Badda,dhaka" img={marker}></InfoCard>
    </div>
  );
};

export default Info;
