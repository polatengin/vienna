//import mongoose from 'mongoose';
const MongoClient = require('mongodb').MongoClient;
/*
const DoctorSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  password: String,
  isActive: Boolean,
});
export const DoctorsCollection = mongoose.model("Doctor", DoctorSchema);
*/
export class MongoConnection {

  public init(username: string, password: string) {
    const uri = "mongodb+srv://${username}:${password}@vienna-cluster-tzrt1.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => {
      const collection = client.db("Kovitakip").collection("Doctor");
  // perform actions on the collection object
      client.close();
    });

    /*mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://${username}:${password}@ds040309.mlab.com:40309/vienna`, { useNewUrlParser: true, useUnifiedTopology: true }).then(_ => {
      console.log('MongoConnection established...');
    });*/
  }

}
