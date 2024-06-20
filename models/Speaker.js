// models/Speaker.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const speakerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  topic: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
});

const Speaker = mongoose.model('Speaker', speakerSchema);

export default Speaker;
