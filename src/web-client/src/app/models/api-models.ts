export class LoginRequestModel {
  phoneNumber: string;
  password: string;
}

export class LoginResponseModel {
  isActive: boolean;
}

export class PatientListResponseModel {
  fullName: string;
  phoneNumber: string;
  dateofBirth: Date;
  gender: string;
  email: string;
  patientId: string;
}

export class EditPatientRequestModel {
  _id: string;
  fullName: string;
  phoneNumber: string;
  dateofBirth: Date;
  gender: string;
  email: string;
  patientId: string;
  date: Date;
}

export class NewDoctorRequestModel {
  _id: string;
  fullName: string;
  phoneNumber: string;
  dateofBirth: Date;
  specialty: Specialty;
  password: string;
  isActive: boolean;
  date: Date;
}

export class UpdateDoctorRequestModel {
  _id: string;
  fullName: string;
  phoneNumber: string;
  dateofBirth: Date;
  specialty: Specialty;
  password: string;
  isActive: boolean;
  date: Date;
}

export enum Specialty {
  İçHastalıkları='İç Hastalıkları',
  Kardiyoloji='Kardiyoloji',
  GöğüsHastalıkları='Göğüs Hastalıkları',
  EnfeksiyonHastalıkları='Enfeksiyon Hastalıkları',
  Nöroloji='Nöroloji',
  Psikiyatri='Psikiyatri',
  ÇocukSağlığıVeHastalıkları='Çocuk Sağlığı ve Hastalıkları',
  ÇocukPsikiyatrisi='Çocuk Psikiyatrisi',
  Dermatoloji='Dermatoloji',
  FizikselTıpVeRehabilitasyon='Fiziksel Tıp ve Rehabilitasyon',
  GenelCerrahi='Genel Cerrahi',
  ÇocukCerrahisi='Çocuk Cerrahisi',
  GöğüsCerrahisi='Göğüs Cerrahisi',
  KalpveDamarCerrahisi='Kalp ve Damar Cerrahisi',
  BeyinVeSinirCerrahisi='Beyin ve Sinir Cerrahisi',
  PlastikCerrahi='Plastik Cerrahi',
  OrtopediVeTravmatoloji='Ortopedi ve Travmatoloji',
  Üroloji='Üroloji',
  KulakBurunBoğazHastalıkları='Kulak-Burun-Boğaz Hastalıkları',
  GözHastalıkları='Göz Hastalıkları',
  KadınHastalıklarıVeDoğum='Kadın Hastalıkları ve Doğum',
  AnesteziyolojiVeReanimasyon='Anesteziyoloji ve Reanimasyon',
  RadyasyonOnkolojisi='Radyasyon Onkolojisi',
  Radyoloji='Radyoloji',
  NükleerTıp='Nükleer Tıp',
  TıbbiPatoloji='Tıbbi Patoloji',
  TıbbiGenetik='Tıbbi Genetik',
  TıbbiBiyokimya='Tıbbi Biyokimya',
  TıbbiMikrobiyoloji='Tıbbi Mikrobiyoloji',
  TıbbiFarmakoloji='Tıbbi Farmakoloji',
  SporHekimliği='Spor Hekimliği',
  AskeriSahraHekimliği='Askeri Sahra Hekimliği',
  HavaVeUzayHekimliği='Hava ve Uzay Hekimliği',
  SualtıHekimliğiVeHiperbarikTıp='Sualtı Hekimliği ve Hiperbarik Tıp',
  AcilTıp='Acil Tıp',
  AdliTıp='Adli Tıp',
  HalkSağlığı='Halk Sağlığı',
  Fizyoloji='Fizyoloji',
  AileHekimliği='Aile Hekimliği',
  Anatomi='Anatomi',
  EmbriyolojiVeHistoloji='Embriyoloji ve Histoloji'
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

export class GetPatientResponseModel {
  _id: string;
  fullName: string;
  phoneNumber: string;
  dateofBirth: Date;
  gender: string;
  email: string;
  patientId: string;
  date: Date;
}

export class VitalRequestModel {
  _id: string;
  patientId: string;
  respiration: string;
  pulse: string;
  temperature: string;
  bloodPressure1: string;
  bloodPressure2: string;
  date: Date;
}

export class DailyAssessmentRequestModel{
  _id: string;
  patientId: string;
  firstTemperature: string;
  secondTemperature: string;
  thirdTemperature: string;
  conscious: string;
  nutrition: string;
  respiration: string;
  date: Date;
}

export class MedicationRequestModel{
  _id: number;
  patientId: string;
  medicine: string;
  dose: string;
  date: Date;
}
