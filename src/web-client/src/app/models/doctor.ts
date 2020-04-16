export class Doctor {
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
