// pages/api/login.js

import { serialize } from "cookie";

export default function handler(req, res) {
  const { username } = req.body;
  res.setHeader("Set-Cookie", serialize("username", username, { path: "/" }));
  res.status(200).end();
}
