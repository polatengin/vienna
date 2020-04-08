import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  password: String,
  isActive: Boolean,
});
