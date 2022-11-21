import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 2,
      name: "Cavity Filling",
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      details:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: fluoride,
    },
  ];
  return (
    <div className="mt-32 text-center">
      <div>
        <h1 className="text-xl text-primary font-bold ">Our Services</h1>
        <h2 className="text-3xl text-accent">Services We Provide</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 mt-16">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
