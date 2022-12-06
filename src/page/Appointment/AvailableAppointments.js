import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AvailableAppointments = ({date}) => {
    const [services, setServices]=useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(date=>setServices(date));
    },[])

    return (
        <div>
            <p className='text-center pt-7'>Available Appointment on:  {format(date,'PP')}</p>
            <div>
                
            </div>
        </div>
    );
};

export default AvailableAppointments;