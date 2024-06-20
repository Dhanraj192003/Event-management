// pages/api/registrations/[id].js

import connectToDatabase from '../../../lib/mongodb';
import Registration from '../../../models/Registration';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const registration = await Registration.findById(id);
        if (!registration) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: registration });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const registration = await Registration.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!registration) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: registration });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedRegistration = await Registration.deleteOne({ _id: id });
        if (!deletedRegistration) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}

