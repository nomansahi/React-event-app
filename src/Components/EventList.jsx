import React from "react";

const EventList = ({ events, handleClick }) => {
  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      {events.map((event) => (
        <div key={event.id} className="card p-5 mt-5 mx-5">
          <h2>{event.title}</h2>
          <p>
            {event.location}-{event.date}
          </p>

          <button
            onClick={() => handleClick(event.id)}
            className="btn btn-primary d-inline-block mt-4"
          >
            Delete Event
          </button>
        </div>
      ))}
    </div>
  );
};

export default EventList;
