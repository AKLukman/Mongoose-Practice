import { IUser } from "./user.interface";
import { Schema, model } from "mongoose";

const userSchema = new Schema<IUser>({
  id: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  password: { type: String, required: true },
  name: {
    firstName: { type: String, required: true },
    middleName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  dateOfBirth: {
    type: String,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  email: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permenentAddress: { type: String, required: true },
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
