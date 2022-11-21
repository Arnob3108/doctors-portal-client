import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import AppointmentCalender from "./AppointmentCalender/AppointmentCalender";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";
import { RingLoader } from "react-spinners";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // const { data: appointmentOptions, isLoading } = useQuery({
  //   queryKey: ["appointmentOptions"],
  //   queryFn: () =>
  //     fetch("http://localhost:5000/appointmentOptions").then((res) =>
  //       res.json()
  //     ),
  // });
  // if (isLoading)
  //   return (
  //     <RingLoader
  //       className="w-full mx-auto my-[15%]"
  //       color="#36d7b7"
  //       size={150}
  //       aria-label="Loading Spinner"
  //       data-testid="loader"
  //     />
  //   );
  return (
    <div>
      <AppointmentCalender
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppointmentCalender>
      <AvailableAppointments
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        // appointmentOptions={appointmentOptions}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
