import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service;
    return (
        <div>
            <div class="card w-screen-sm lg:max-w-lg bg-primary text-primary-content text-center">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{
        slots.length > 0
         ? 
        <span>{slots[0]}</span>
        :
        <span className='text-red-500 '>No slot available. try another date </span>
        }</p>
    <p>{slots.length} {slots.length>1? 'spaces' : "space"} available </p>
    <div class="card-actions justify-end">

      <label  onClick={()=>setTreatment(service)} disabled={slots.length===0}  for="booking-modal" class="btn text-white">Book Now</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;