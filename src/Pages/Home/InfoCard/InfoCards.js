import React from "react";
import clock from "../../../assets/icons/clock.svg";
import location from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const information = [
    {
      id: 1,
      name: "Opening Hours",
      details: "09am to 10pm",
      img: clock,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: 2,
      name: "Visit Our Location",
      details: "Brooklyn, NY 10036, United States",
      img: location,
      bgClass: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us Now",
      details: "+000 123 456789",
      img: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 -mt-3">
      {information.map((info) => (
        <InfoCard key={info.id} info={info}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
