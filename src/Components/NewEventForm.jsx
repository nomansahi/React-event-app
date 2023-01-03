import { useState } from "react";

const NewEventForm = ({ addEvents }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const Reset = () => {
    setTitle("");
    setDate("");
    setLocation("fulda");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 1000),
    };
    addEvents(event);
    Reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="form-label d-block fs-5 p-2 fw-bold rounded">
        <span>Event Title:</span>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label className="form-label d-block fs-5 p-2 fw-bold">
        <span>Event Date:</span>
        <input
          type="date"
          className="form-control"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="fulda">Fulda</option>
          <option value="frankfurt">Frankfurt</option>
          <option value="berlin">Berlin</option>
          <option value="munich">Munich</option>
        </select>
      </label>
      <div className="text-center ">
        <button className="btn btn-primary mt-2 mb-2">Submit</button>
      </div>
    </form>
  );
};

export default NewEventForm;
