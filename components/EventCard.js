// components/EventCard.js
import Image from "next/image";
import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <Image src={event.image} alt={event.title} />
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <Link href={`/event/${event.id}`}>View Details</Link>
    </div>
  );
}
