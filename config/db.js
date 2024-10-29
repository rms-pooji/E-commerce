// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully'.green.bold);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`.red);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
