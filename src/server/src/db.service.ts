import mongoose from 'mongoose';


const DoctorSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  password: String,
  isActive: Boolean,
});
const VitalSchema=new mongoose.Schema({
  respiration: String,
  pulse: String,
  temperature: String,
  bloodPressure1: String,
  bloodPressure2: String
})

const PatientSchema=new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  dateofBirth: Date,
  gender: String,
  email: String,
  patientId: String
})

export const DoctorsCollection = mongoose.model("Doctor", DoctorSchema);
export const VitalsCollection =mongoose.model("Vital",VitalSchema);
export const PatientsCollection =mongoose.model("Patient",PatientSchema);

export class MongoConnection {

  public init(username: string, password: string) {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${username}:${password}@ds040309.mlab.com:40309/vienna`, { useNewUrlParser: true, useUnifiedTopology: true }).then(_ => {
      console.log('MongoConnection established...');
    });
  }

}
