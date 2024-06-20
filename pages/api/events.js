// pages/api/events.js
import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  const db = await connectToDatabase();
  // Your database operations here
  res.status(200).json({ message: 'Connected to database!' });
}
