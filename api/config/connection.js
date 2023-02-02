import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DBL = process.env.DATABASE_LOCAL;
mongoose.set('strictQuery', false);
const db = mongoose.connect(DBL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default db;
