import React from 'react';
import background from '../../images/appointment.png';

const Contact = () => {
    return (
        <section style={{
            background: `url(${background})`
        }}>
            <h3 className='text-white text-center font-extrabold text-3xl pt-5 '>Contact Us</h3>
            
            <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row-reverse ">
   
    <div class="card  w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <input type="text" placeholder="email" class="input input-bordered mb-5" />
          
          <input type="text" placeholder="Subject" class="input input-bordered mb-5" />
          
          <input type="text" placeholder="Type Your Message" class="input input-bordered py-16" />
        </div>
        
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </section>
    );
};

export default Contact;