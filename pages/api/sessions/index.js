// pages/api/sessions/index.js
import connectToDatabase from '../../lib/mongodb';
import Session from '../../../models/Session';

export default async function handler(req, res) {
  const { method } = req;

  // Connect to MongoDB
  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const sessions = await Session.find({});
        res.status(200).json({ success: true, data: sessions });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const session = await Session.create(req.body);
        res.status(201).json({ success: true, data: session });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
