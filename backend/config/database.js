import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database is connected!.. 👍");
  } catch (error) {
    console.log(error.message);
    console.log("failed to connected the database 😭");
  }
};

export default connectDB;