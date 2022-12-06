import React, {useState} from "react";
import chair from "../../images/chair.png";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="image"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            <p>Your selected date: {format(date,'PP')}</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AppointmentBanner;
