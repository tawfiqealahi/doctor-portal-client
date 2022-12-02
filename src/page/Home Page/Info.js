import React from 'react';
import InfoCard from './InfoCard';
import clock from "../../images/icons/clock.svg";
import phone from "../../images/icons/phone.svg";
import marker from "../../images/icons/marker.svg";

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-3 px-4'>

<InfoCard img={clock}></InfoCard>
<InfoCard  img={phone}></InfoCard>
<InfoCard img={marker}></InfoCard>
        </div>
    );
};

export default Info;