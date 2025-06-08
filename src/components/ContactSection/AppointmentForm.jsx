import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = ({ title = "Get Appointment", onSubmit }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 7);

  return (
    <div className=" bg-orange-200 p-10 rounded-lg w-full shadow-lg appointment-form">
      <h3 className="text-primary text-2xl font-base mb-4 uppercase">
        Get in Touch
      </h3>
      <h2 className="text-4xl font-semibold mb-6">{title}</h2>

      <form
        className="grid grid-cols-1 lg:grid-cols-2 gap-4"
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="First Name"
          className="input-field"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="input-field"
          required
        />
        <input
          type="text"
          placeholder="Phone"
          className="input-field"
          required
        />
        <select className="input-field">
          <option>Your Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <div className=" z-[3]">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={today}
            maxDate={maxDate}
            placeholderText="dd-mm-yyyy"
            className="input-field w-full"
            dateFormat="dd-MM-yyyy"
          />
        </div>
        <select className="input-field">
          <option>Department</option>
          <option>Physio</option>
          <option>Therapy</option>
        </select>

        <textarea
          placeholder="Write Comments"
          className="input-field lg:col-span-2"
          rows={3}
        ></textarea>

        <button
          type="submit"
          className="lg:col-span-2 block w-full common-button"
        >
          <span>Submit Now</span>
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
