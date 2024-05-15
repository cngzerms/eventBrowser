// pages/events.js

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch("/api/events");
      console.log(res);
      const data = await res.json();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <div className="eventContainer">
      <Navbar />
      <h1 className="eventsH1">Events</h1>
      <div className="events-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
