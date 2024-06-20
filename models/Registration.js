import mongoose from 'mongoose';

const RegistrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session' },
});

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema);
