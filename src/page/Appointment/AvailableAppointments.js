import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

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
            <div className='grid grid-cols-1 ms:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;