import React from "react";
import Button from "../../Button/Button";
import chair from "../../images/chair.png";

const Banner = () => {
  return (
    
      <div className="hero lg:min-h-screen bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-sm hidden lg:block rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-7 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Button>get Started</Button>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;
