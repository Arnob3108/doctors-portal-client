import React from "react";
import Chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import Button from "../../../Components/Button/Button";

const Banner = () => {
  return (
    <div
      className="hero mt-5"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse py-44">
        <img src={Chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
