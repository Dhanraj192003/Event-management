import connectToDatabase from '../../../lib/mongodb';
import Speaker from '../../../models/Speaker';

export default async function handler(req, res) {
  const { method } = req;
  const { id } = req.query;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const speaker = await Speaker.findById(id);
        if (!speaker) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: speaker });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const speaker = await Speaker.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!speaker) {
          return res.status(404).json({ success: false });
        }
        res.status(200).json({ success: true, data: speaker });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedSpeaker = await Speaker.deleteOne({ _id: id });
        if (!deletedSpeaker) {
          return res.status(404).json({ success: false });
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
