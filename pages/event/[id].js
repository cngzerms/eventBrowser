// pages/event/[id].js
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      if (id) {
        const res = await fetch(`/api/event/${id}`);
        const data = await res.json();
        setEvent(data);
      }
    };
    fetchEvent();
  }, [id]);

  const handleLike = async () => {
    const res = await fetch(`/api/event/${id}/like`, { method: "POST" });
    if (res.ok) {
      alert("Event liked!");
    }
  };

  if (!event) return <p>Loading...</p>;

  return (
    <div className="eventContainer">
      <Image src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <button onClick={handleLike}>Like</button>
    </div>
  );
}
