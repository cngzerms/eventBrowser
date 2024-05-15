// pages/api/events.js

import { openDB } from '../../utils/db';

export default async function handler(req, res) {
  const db = await openDB();
  const events = await db.all('SELECT * FROM events');
  res.status(200).json(events);
}
