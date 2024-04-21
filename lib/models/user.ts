import mongoose from '../db';

const schema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  provider: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model('User', schema);
