import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  dateofBirth: Date,
  specialty: String,
  password: String,
  isActive: Boolean,
  date: Date
}, { timestamps: true });

const VitalSchema=new mongoose.Schema({
  patientId: String,
  respiration: String,
  pulse: String,
  temperature: String,
  bloodPressure1: String,
  bloodPressure2: String,
  date: Date
}, { timestamps: true });

const PatientSchema=new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  dateofBirth: Date,
  gender: String,
  email: String,
  patientId: String,
  date: Date
}, { timestamps: true });

const DailyAssessmentSchema=new mongoose.Schema({
  patientId: String,
  firstTemperature: String,
  secondTemperature: String,
  thirdTemperature: String,
  conscious: String,
  nutrition: String,
  respiration: String,
  date: Date
}, { timestamps: true });

const MedicationSchema=new mongoose.Schema({
  patientId: String,
  medicine: String,
  dose: String,
  date: Date
}, { timestamps: true });

export const DoctorsCollection = mongoose.model("Doctor", DoctorSchema,"Doctor");
export const VitalsCollection = mongoose.model("PatientVital",VitalSchema, "PatientVital");
export const PatientsCollection = mongoose.model("Patient",PatientSchema,"Patient");
export const DailyAssessmentsCollection = mongoose.model("DailyAssessment",DailyAssessmentSchema,"DailyAssessment");
export const MedicationsCollection = mongoose.model("Medication",MedicationSchema,"Medication");

export class MongoConnection {
  public init(username: string, password: string) {
    mongoose.Promise = global.Promise;

    const connectionstring= `mongodb+srv://${username}:${password}@vienna-cluster-tzrt1.mongodb.net/test?retryWrites=true&w=majority`;

    mongoose.connect(connectionstring, { useNewUrlParser: true,  dbName: 'Kovitakip', useUnifiedTopology: true }).then(_ => {
      console.log('Mongo atlas Connection established...');
    });
  }
}
