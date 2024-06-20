// pages/api/sessions/[id].js
import connectToDatabase from '../../../lib/mongodb';
import Session from '../../../models/Session';

export default async function handler(req, res) {
  const { method, query: { id } } = req;

  // Connect to MongoDB
  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const session = await Session.findById(id);
        if (!session) {
          return res.status(404).json({ success: false, message: 'Session not found' });
        }
        res.status(200).json({ success: true, data: session });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const updatedSession = await Session.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!updatedSession) {
          return res.status(404).json({ success: false, message: 'Session not found' });
        }
        res.status(200).json({ success: true, data: updatedSession });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedSession = await Session.findByIdAndDelete(id);
        if (!deletedSession) {
          return res.status(404).json({ success: false, message: 'Session not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
