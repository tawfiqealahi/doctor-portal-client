import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    // fetch("services.json")
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((date) => setServices(date));
  }, []);

  return (
    <div>
      <p className="text-center py-7">
        Available Appointment on: {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal 
        date={date} 
        treatment={treatment}
        setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
