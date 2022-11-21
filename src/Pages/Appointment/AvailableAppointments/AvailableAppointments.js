import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useState } from "react";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import BookingModal from "../BookingModal/BookingModal";
import { RingLoader } from "react-spinners";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const { data: appointmentOptions, isLoading } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading)
    return (
      <RingLoader
        className="w-full mx-auto my-[15%]"
        color="#36d7b7"
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );

  return (
    <div>
      <h1 className="text-center text-xl mt-5 lg:-mt-20 mb-10 text-secondary font-bold">
        Available Appointment On {format(selectedDate, "PP")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOption>
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
