// pages/api/registrations/index.js
import connectToDatabase from '../../../lib/mongodb';
import Registration from '../../../models/Registration';

export default async function handler(req, res) {
  const { method } = req;

  // Connect to MongoDB
  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const registrations = await Registration.find({});
        res.status(200).json({ success: true, data: registrations });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const registration = await Registration.create(req.body);
        res.status(201).json({ success: true, data: registration });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
