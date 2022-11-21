import React from "react";
import Button from "../../../Components/Button/Button";
import doctor from "../../../assets/images/doctor-small.png";
import appointment from "../../../assets/images/appointment.png";

const MakeAppointnent = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: `url(${appointment})`,
      }}
    >
      <div className="hero w-full mt-44 text-white">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className="-mt-32 -mb-4 hidden lg:block rounded-lg"
            alt=""
          />
          <div className="lg:w-1/2 lg:pl-24">
            <h1 className="text-secondary pb-6 font-bold">Appointment</h1>
            <h1 className="text-4xl font-bold">Make an appointment Today</h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointnent;
