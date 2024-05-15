// components/Navbar.js

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <Link href="/events">Events</Link>
        <Link href="/likes">Liked Events</Link>
      </div>
    </nav>
  );
}
