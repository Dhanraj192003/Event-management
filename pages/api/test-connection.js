// pages/api/test-connection.js
import connectToDatabase from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const db = await connectToDatabase();
    const isConnected = db.connections[0].readyState;
    
    if (isConnected) {
      res.status(200).json({ message: 'Database connected successfully!' });
    } else {
      res.status(500).json({ message: 'Failed to connect to the database.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'An error occurred.', error: error.message });
  }
}
