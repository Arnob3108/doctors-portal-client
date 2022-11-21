import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const userName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const booking = {
      appointmentDate: date,
      treatmentName: name,
      patient: userName,
      slot,
      phone,
      email,
    };

    console.log(booking);
    setTreatment(null);
  };

  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="grid gap-5 mt-10">
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered input-secondary w-full"
            />
            <select name="slot" className="select select-secondary w-full">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
            <input
              name="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
