import mongoose from 'mongoose';

const SessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startTime: Date,
  endTime: Date,
  speaker: { type: mongoose.Schema.Types.ObjectId, ref: 'Speaker' },
});

export default mongoose.models.Session || mongoose.model('Session', SessionSchema);
