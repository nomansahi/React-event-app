import { useState } from "react";
import "./App.css";
import Title from "./Components/Title";
import Modal from "./Components/Modal";
import EventList from "./Components/EventList";
import NewEventForm from "./Components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  const addEvent = (event) => [
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    }),
    setShowModal(false),
  ];

  console.log(showEvents);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const hideHandle = () => {
    setShowEvents(false);
  };

  const showHandle = () => {
    setShowEvents(true);
  };

  const showModalHandle = () => {
    setShowModal(true);
  };
  return (
    <div className="App">
      <Title
        title="All events in your specific area"
        subtitle="There are some events in Fulda "
      />
      {showEvents && (
        <div>
          <button onClick={hideHandle} className="btn btn-success">
            Hide Events
          </button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={showHandle} className="btn btn-danger">
            Show Events
          </button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal>
          <NewEventForm addEvents={addEvent} />
        </Modal>
      )}
      <button onClick={showModalHandle} className="btn btn-primary mt-5">
        Add New Events
      </button>
    </div>
  );
}

export default App;
