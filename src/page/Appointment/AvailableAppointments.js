import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <p className='text-center pt-7'>Available Appointment on:  {format(date,'PP')}</p>
        </div>
    );
};

export default AvailableAppointments;