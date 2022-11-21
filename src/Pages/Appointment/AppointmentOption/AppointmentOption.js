import React from "react";
import Button from "../../../Components/Button/Button";

const AppointmentOption = ({ option, setTreatment }) => {
  return (
    <div className="card bg-base-100 shadow-2xl">
      <div className="card-body items-center">
        <h2 className="card-title text-xl font-bold text-secondary">
          {option.name}
        </h2>
        <p className="font-bold">
          {option.slots.length > 0 ? option.slots[0] : "Try Another day"}
        </p>
        <p className="font-medium">
          {option.slots.length} {option.slots.length > 1 ? "Spaces" : "Space"}{" "}
          Available
        </p>
        <div className="card-actions justify-end">
          <label
            disabled={option.slots.length === 0}
            onClick={() => setTreatment(option)}
            htmlFor="my-modal-3"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
