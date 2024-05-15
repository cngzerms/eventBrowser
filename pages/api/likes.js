// pages/api/likes.js

import { openDB } from "../../utils/db";

export default async function handler(req, res) {
  const { username } = req.cookies;
  const db = await openDB();
  const likedEvents = await db.all(
    `
    SELECT events.* FROM events
    JOIN likes ON events.id = likes.eventId
    WHERE likes.username = ?
  `,
    username
  );
  res.status(200).json(likedEvents);
}
