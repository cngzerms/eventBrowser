// pages/api/event/[id]/like.js

import { openDB } from "../../../../utils/db";

export default async function handler(req, res) {
  const { id } = req.query;
  const { username } = req.cookies;
  const db = await openDB();
  await db.run(
    "INSERT INTO likes (username, eventId) VALUES (?, ?)",
    username,
    id
  );
  res.status(200).end();
}
