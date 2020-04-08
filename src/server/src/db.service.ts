import mongoose from 'mongoose';

const DoctorSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  password: String,
  isActive: Boolean,
});
export const DoctorsCollection = mongoose.model("Doctor", DoctorSchema);

export class MongoConnection {

  public init(username: string, password: string) {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${username}:${password}@ds040309.mlab.com:40309/vienna`, { useNewUrlParser: true, useUnifiedTopology: true }).then(_ => {
      console.log('MongoConnection established...');
    });
  }

}
