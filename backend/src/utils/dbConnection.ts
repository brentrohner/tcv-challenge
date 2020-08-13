import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const pw = process.env.MONGO_PW;
const name = process.env.MONGO_NAME;
const connection = `mongodb+srv://${name}:${pw}@cluster0.lmao8.mongodb.net/test`;

export const connectToDb = mongoose.connect(connection, {
  useNewUrlParser: true,
});
