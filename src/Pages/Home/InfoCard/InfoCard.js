import React from "react";

const InfoCard = ({ info }) => {
  const { img, name, bgClass, details } = info;
  return (
    <div
      className={`card shadow-xl ${bgClass} text-white flex lg:flex-row items-center justify-center pt-3 lg:p-6`}
    >
      <img className="w-20" src={img} alt="" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default InfoCard;
