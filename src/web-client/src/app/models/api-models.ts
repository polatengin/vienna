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
}

export class VitalRequestModel{
  respiration: string;
  pulse: string;
  temperature: string;
  bloodPressure1: string;
  bloodPressure2: string;
}