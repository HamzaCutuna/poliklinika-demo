import { Mail, Phone } from "lucide-react";

const doctors = [
  {
    name: "Dr. Adnan",
    position: "Kardiolog, Osnivač",
    image: "/placeholder-doctor.jpg",
    bio: "Dr. Adnan je osnivač Poliklinike s više od 20 godina iskustva u kardiologiji. Diplomirao je na Medicinskom fakultetu u Sarajevu, a specijalizaciju iz kardiologije završio je u prestižnim europskim klinikama. Kontinuirano se usavršava u području interventne kardiologije.",
    email: "adnan@poliklinika.com",
    phone: "+387 61 123 456",
  },
  {
    name: "Dr. Amina",
    position: "Neurolog",
    image: "/placeholder-doctor.jpg",
    bio: "Dr. Amina je specijalista neurologije s iskustvom u dijagnostici i liječenju neuroloških oboljenja. Diplomirala je na Medicinskom fakultetu u Sarajevu, a usavršavala se u inostranstvu u području elektrodijagnostike i ultrazvučne dijagnostike neuroloških oboljenja.",
    email: "amina@poliklinika.com",
    phone: "+387 61 123 457",
  },
  {
    name: "Dr. Emir",
    position: "Internista",
    image: "/placeholder-doctor.jpg",
    bio: "Dr. Emir je specijalista interne medicine s fokusom na gastroenterologiju i endokrinologiju. Ima bogato iskustvo u dijagnostici i liječenju širokog spektra internih bolesti. Redovno se usavršava na međunarodnim kongresima i seminarima.",
    email: "emir@poliklinika.com",
    phone: "+387 61 123 458",
  },
  {
    name: "Dr. Lejla",
    position: "Opća medicina",
    image: "/placeholder-doctor.jpg",
    bio: "Dr. Lejla je liječnica opće medicine s dugogodišnjim iskustvom u primarnoj zdravstvenoj zaštiti. Posebno se zanima za preventivnu medicinu i promociju zdravog načina života. Poznata je po toplom pristupu pacijentima i detaljnim objašnjenjima.",
    email: "lejla@poliklinika.com",
    phone: "+387 61 123 459",
  },
  {
    name: "Dr. Jasmin",
    position: "Radiolog",
    image: "/placeholder-doctor.jpg",
    bio: "Dr. Jasmin je specijalista radiologije s posebnim interesom za ultrazvučnu i CT dijagnostiku. Tokom svoje karijere radio je u više renomiranih medicinskih centara gdje je stekao bogato iskustvo u različitim radiološkim metodama.",
    email: "jasmin@poliklinika.com",
    phone: "+387 61 123 460",
  },
  {
    name: "Dr. Selma",
    position: "Dermatolog",
    image: "/placeholder-doctor.jpg",
    bio: "Dr. Selma je specijalista dermatologije s posebnim interesom za estetsku dermatologiju i dermatoonkologiju. Diplomirala je na Medicinskom fakultetu u Sarajevu, a specijalizaciju iz dermatovenerologije završila je u Kliničkom centru Univerziteta u Sarajevu.",
    email: "selma@poliklinika.com",
    phone: "+387 61 123 461",
  },
];

const nurses = [
  {
    name: "Amra",
    position: "Glavna medicinska sestra",
    image: "/placeholder-nurse.jpg",
    bio: "Amra je glavna medicinska sestra s više od 15 godina iskustva u zdravstvu. Diplomirala je na Fakultetu zdravstvenih studija u Sarajevu. Koordinira rad medicinskog osoblja i osigurava visok standard usluga za sve pacijente.",
  },
  {
    name: "Kenan",
    position: "Medicinski tehničar",
    image: "/placeholder-nurse.jpg",
    bio: "Kenan je medicinski tehničar s iskustvom u hitnoj medicini i laboratorijskoj dijagnostici. Osim redovnih dužnosti, specijaliziran je za EKG i spirometriju, te asistira kod različitih dijagnostičkih procedura.",
  },
  {
    name: "Meliha",
    position: "Medicinska sestra",
    image: "/placeholder-nurse.jpg",
    bio: "Meliha je medicinska sestra s iskustvom u radu s pacijentima svih uzrasta. Poznata je po svom strpljivom i brižnom pristupu. Redovno se stručno usavršava kroz različite edukacije i seminare.",
  },
];

export default function TeamPage() {
  return (
    <>
      <div className="bg-medical-100 py-12 md:py-20">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold text-medical-800 md:text-5xl">Stručni tim</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Naš tim čine vrhunski stručnjaci koji kombiniraju znanje, iskustvo i posvećenost. Upoznajte liječnike i medicinsko osoblje koji brinu o vašem zdravlju.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-medical-800">Naši liječnici</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-64 bg-gray-200">
                  {/* This would be a doctor image */}
                  <div className="flex h-full items-center justify-center">
                    <p className="text-lg font-medium text-gray-600">{doctor.name} photo</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 text-xl font-bold text-medical-800">{doctor.name}</h3>
                  <p className="mb-4 text-sm font-medium text-medical-600">{doctor.position}</p>
                  <p className="mb-4 flex-grow text-gray-600">{doctor.bio}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="mr-2 h-4 w-4 text-medical-500" />
                      {doctor.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="mr-2 h-4 w-4 text-medical-500" />
                      {doctor.phone}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-medical-800">Medicinsko osoblje</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {nurses.map((nurse, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="h-64 bg-gray-200">
                  {/* This would be a nurse image */}
                  <div className="flex h-full items-center justify-center">
                    <p className="text-lg font-medium text-gray-600">{nurse.name} photo</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-1 text-xl font-bold text-medical-800">{nurse.name}</h3>
                  <p className="mb-4 text-sm font-medium text-medical-600">{nurse.position}</p>
                  <p className="flex-grow text-gray-600">{nurse.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-medical-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Pridružite se našem timu</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-medical-100">
            Uvijek tražimo talentirane i posvećene zdravstvene radnike koji dijele našu strast za pružanjem vrhunske medicinske skrbi. Ako ste zainteresirani za rad u Poliklinici, pošaljite nam svoj životopis.
          </p>
          <div className="inline-flex items-center rounded-md border border-white px-6 py-3 text-base font-medium text-white hover:bg-white/10">
            Pošaljite CV na: careers@poliklinika.com
          </div>
        </div>
      </div>
    </>
  );
} 