import React from "react";
import Button from "../../Button/Button";
import chair from '../../images/chair.png';

const Banner = () => {
  return (
   <div>
    <div class="hero min-h-screen bg-base-200 ">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-7 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <Button></Button>
    </div>
  </div>
</div>
   </div>
  );
};

export default Banner;
