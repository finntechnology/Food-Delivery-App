import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://Food:Youngfinn@cluster0.uy45eix.mongodb.net/Food-Delivery"
    )
    .then(() => console.log("DB Connected"));
};
