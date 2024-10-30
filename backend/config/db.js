import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect("mongodb+srv://test:test@food-del.a4zgq.mongodb.net/?retryWrites=true&w=majority&appName=food-del")
        .then(() => console.log("DB Connected"))
        .catch((error) => console.error("DB Connection Error:", error));
};
