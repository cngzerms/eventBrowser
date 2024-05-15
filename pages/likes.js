// pages/likes.js

import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";

export default function Likes() {
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    const fetchLikedEvents = async () => {
      const res = await fetch("/api/likes");
      const data = await res.json();
      setLikedEvents(data);
    };
    fetchLikedEvents();
  }, []);

  return (
    <div className="eventContainer">
      <Navbar />
      <h1 className="eventsH1">Liked Events</h1>
      <div className="events-grid">
        {likedEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
