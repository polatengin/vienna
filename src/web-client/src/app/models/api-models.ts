export class LoginRequestModel {
  phoneNumber: string;
  password: string;
}

export class LoginResponseModel {
  isActive: boolean;
}

export class NewPatientRequestModel {
  fullName: string;
  phoneNumber: string;
  dateofBirth: Date;
  gender: string;
  email: string;
  patientId: string;
  date: Date;
}

export class VitalRequestModel{
  patientId: string;
  respiration: string;
  pulse: string;
  temperature: string;
  bloodPressure1: string;
  bloodPressure2: string;
  date: Date;
}

export class DailyAssessmentRequestModel{
  patientId: string;
  firstTemperature: string;
  secondTemperature: string;
  thirdTemperature: string;
  conscious: string;
  nutrition: string;
  respiration: string;
}
