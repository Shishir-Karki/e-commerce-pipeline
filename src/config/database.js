
import dotenv from 'dotenv';

dotenv.config();
import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('DB Connection Failed', error);
    process.exit(1);
  }
};

export default connectDB;
