import connectToDatabase from '../../../lib/mongodb';
import Speaker from '../../../models/Speaker';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'GET':
      try {
        const speakers = await Speaker.find({});
        res.status(200).json({ success: true, data: speakers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const speaker = await Speaker.create(req.body);
        res.status(201).json({ success: true, data: speaker });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
