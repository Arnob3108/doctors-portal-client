import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../AuthContext/AuthProvider";

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");
  const { user } = useContext(AuthContext);

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

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.acknowledged) {
          toast.success(`${name} Appointment on ${date} at ${slot} Confirmed`);
          refetch();
          setTreatment(null);
        } else {
          toast.error(data.message);
        }
      });

    console.log(booking);
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
              disabled
              defaultValue={user?.displayName}
              type="text"
              className="input input-bordered input-secondary w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="Your Phone"
              className="input input-bordered input-secondary w-full"
            />
            <input
              name="email"
              defaultValue={user?.email}
              type="text"
              disabled
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
