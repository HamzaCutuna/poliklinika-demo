import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Brain, Stethoscope, Pill, Activity, Microscope, Plus, FileText, Thermometer, TestTube } from "lucide-react";

const services = [
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Kardiologija",
    description: "Kompletna dijagnostika i liječenje bolesti srca i krvnih žila.",
    details: [
      "EKG",
      "Ergometrija",
      "Holter EKG",
      "Holter tlaka",
      "UZV srca",
    ],
    href: "/services/cardiology",
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Neurologija",
    description: "Dijagnostika i liječenje neuroloških oboljenja centralnog i perifernog nervnog sistema.",
    details: [
      "EEG",
      "EMNG",
      "Ultrazvuk karotida",
      "Neurološki pregled",
    ],
    href: "/services/neurology",
  },
  {
    icon: <Stethoscope className="h-12 w-12" />,
    title: "Opća medicina",
    description: "Preventivni pregledi, rana dijagnostika i liječenje akutnih i hroničnih bolesti.",
    details: [
      "Sistematski pregled",
      "Preventivni pregled",
      "Liječnička uvjerenja",
      "Savjetovanje",
    ],
    href: "/services/general",
  },
  {
    icon: <Pill className="h-12 w-12" />,
    title: "Farmakoterapija",
    description: "Individualni pristup u odabiru terapije za sve vrste oboljenja.",
    details: [
      "Izrada plana terapije",
      "Praćenje učinkovitosti",
      "Savjetovanje o lijekovima",
      "Optimizacija terapije",
    ],
    href: "/services/pharmacotherapy",
  },
  {
    icon: <Activity className="h-12 w-12" />,
    title: "Dijagnostika",
    description: "Savremeni dijagnostički postupci za pouzdanu procjenu zdravstvenog stanja.",
    details: [
      "Ultrazvučna dijagnostika",
      "Rendgen dijagnostika",
      "Color doppler",
      "Spirometrija",
    ],
    href: "/services/diagnostics",
  },
  {
    icon: <Microscope className="h-12 w-12" />,
    title: "Laboratorijske usluge",
    description: "Kompletna laboratorijska dijagnostika sa brzim i preciznim rezultatima.",
    details: [
      "Kompletna krvna slika",
      "Biohemijske analize",
      "Hormonalni status",
      "Tumorski markeri",
    ],
    href: "/services/laboratory",
  },
  {
    icon: <Plus className="h-12 w-12" />,
    title: "Interna medicina",
    description: "Dijagnostika i liječenje bolesti unutrašnjih organa.",
    details: [
      "Gastroenterologija",
      "Endokrinologija",
      "Pulmologija",
      "Nefrologija",
    ],
    href: "/services/internal",
  },
  {
    icon: <FileText className="h-12 w-12" />,
    title: "Specijalistički pregledi",
    description: "Pregledi kod različitih specijalista prema potrebama pacijenta.",
    details: [
      "Dermatologija",
      "Oftalmologija",
      "Otorinolaringologija",
      "Ortopedija",
    ],
    href: "/services/specialist",
  },
  {
    icon: <TestTube className="h-12 w-12" />,
    title: "Mikrobiološka dijagnostika",
    description: "Identifikacija uzročnika infekcija i određivanje osjetljivosti na antibiotike.",
    details: [
      "Bakteriološke analize",
      "Virusološke analize",
      "Mikološke analize",
      "Parazitološke analize",
    ],
    href: "/services/microbiology",
  },
  {
    icon: <Thermometer className="h-12 w-12" />,
    title: "Preventivna medicina",
    description: "Programi prevencije i ranog otkrivanja bolesti.",
    details: [
      "Preventivni programi",
      "Vakcinacija",
      "Savjetovanje",
      "Edukacija",
    ],
    href: "/services/preventive",
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="bg-medical-100 py-12 md:py-20">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold text-medical-800 md:text-5xl">Naše usluge</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Poliklinika pruža širok spektar medicinskih usluga. Zahvaljujući stručnom osoblju i savremenoj opremi, u mogućnosti smo ponuditi kompletnu dijagnostiku i liječenje na jednom mjestu.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-5 rounded-full bg-medical-100 p-4 text-medical-600 w-fit">
                  {service.icon}
                </div>
                <h3 className="mb-3 text-2xl font-bold text-medical-800">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-600">{service.description}</p>
                <div className="mb-6 flex-grow">
                  <h4 className="mb-2 font-medium text-medical-700">Uključuje:</h4>
                  <ul className="space-y-1">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <div className="mr-2 h-1.5 w-1.5 rounded-full bg-medical-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={service.href}>Više o usluzi</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-medical-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Trebate pomoć pri odabiru?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-medical-100">
            Niste sigurni koja vrsta pregleda vam je potrebna? Naš tim stručnjaka će vam pomoći odabrati odgovarajuću uslugu prema vašim potrebama.
          </p>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10" asChild>
            <Link href="/contact">Kontaktirajte nas</Link>
          </Button>
        </div>
      </div>
    </>
  );
} 