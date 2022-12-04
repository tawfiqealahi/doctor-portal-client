import React from "react";
import quote from "../../images/icons/quote.svg";
const Testimonial = () => {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl py-3 text-info font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our patients say</h2>
        </div>
        <div>
          <img src={quote} alt="quote img" className='w-32' />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
