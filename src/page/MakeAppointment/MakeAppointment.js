import React from 'react';
import doctor from '../../images/doctor.png';
import appointmentBackground from '../../images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointmentBackground})`
        }} className='flex'>
            <div className='flex-1'>
                <img src={doctor} alt="img" />
            </div>
            <div className='flex-1 text-center '>
                <h3 className="text-xl text-primary">Appointment</h3>
                <h2 className='text-3xl'>Make an AppointmentToday </h2>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem unde veritatis numquam. Quibusdam nesciunt officia laboriosam ipsa rem magni fugit? </p>
            </div>
        </section>
    );
};

export default MakeAppointment;