import React from "react";
import Banner from "./Banner/Banner";
import Exceptional from "./Exceptional/Exceptional";
import InfoCards from "./InfoCard/InfoCards";
import MakeAppointnent from "./MakeAppointment/MakeAppointnent";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointnent></MakeAppointnent>
    </div>
  );
};

export default Home;
