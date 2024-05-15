// pages/api/event/[id].js

import { openDB } from "../../../utils/db";

export default async function handler(req, res) {
  const { id } = req.query;
  const db = await openDB();
  const event = await db.get("SELECT * FROM events WHERE id = ?", id);
  res.status(200).json(event);
}
