import React from "react";
import quote from "../../images/icons/quote.svg";
import people1 from "../../images/people1.png";
import people2 from "../../images/people1.png";
import people3 from "../../images/people1.png";
import Review from "./Review";

const Testimonial = () => {
  const review=[
    {
      _id:1,
      name: 'wingson herry',
      review: '',
      img: people1,
      paragraph: 'If a dog chews shoes whose shoes does he choose?'
    },
    {
      _id:2,
      name: 'wingson herry',
      review: '',
      img: people2,
      paragraph:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, rem.'
    },
    {
      _id:3,
      name: 'wingson herry',
      review: '',
      img: people3,
      paragraph:'Lsit amet Veniam iste architecto eum minima ab vero nulla distinctio in ut cumque!'
    }

];
  return (
    <section className="my-20">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl py-3 text-info font-bold">Testimonials</h4>
          <h2 className="text-3xl">What our patients say</h2>
        </div>
        <div>
          <img src={quote} alt="quote img" className='sm:w-32 lg:w-40 ' />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 ">
        {
          review.map(review=>
            <Review
              key={review._id}
              review={review}
            ></Review>
            )
        }
      </div>
    </section>
  );
};

export default Testimonial;
