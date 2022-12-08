import React from 'react';

const Service = ({service}) => {
    const {name,slots}=service;
    return (
        <div>
            <div class="card w-screen-sm bg-primary text-primary-content">
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions justify-end">
      <button class="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Service;