import React from "react";
import background from "../../images/appointment.png";

const Contact = () => {
  return (
    <section
      style={{
        background: `url(${background})`,
      }}
    >
      <div className=" min-h-screen ">
        <h3 className="text-white text-center font-extrabold text-3xl pt-2">
          Contact Us
        </h3>

        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered mb-5"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered mb-5"
                />

                <input
                  type="text"
                  placeholder="Type Your Message"
                  className="input input-bordered py-16"
                />
              </div>

              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
