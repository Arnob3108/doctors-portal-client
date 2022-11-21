import React from "react";
import bg from "../../../assets/images/bg.png";
import Chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentCalender = ({ selectedDate, setSelectedDate }) => {
  return (
    <div
      className="hero mt-5"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse lg:py-44">
        <img src={Chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div className=" bg-white rounded-2xl p-5 shadow-2xl lg:mr-20">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCalender;
