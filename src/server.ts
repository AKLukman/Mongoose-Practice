import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// Database Connection
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connected Successfully`);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log("Database connection failed", error);
  }
}
main();
