import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
export const connectDB = async (req, res) => {
  const db = process.env.MONGO_URL;
  console.log(db);
  const { connection } = await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    sslValidate: false,
  });

  console.log(`MongoDB Connected to ${connection.host}`);
};
