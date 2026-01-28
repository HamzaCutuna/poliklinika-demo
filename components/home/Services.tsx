import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart, Brain, Stethoscope, Pill, Activity, Microscope } from "lucide-react";

const services = [
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Kardiologija",
    description: "Kompletna dijagnostika i liječenje bolesti srca i krvnih žila.",
    href: "/services/cardiology",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Neurologija",
    description: "Dijagnostika i liječenje neuroloških oboljenja centralnog i perifernog nervnog sistema.",
    href: "/services/neurology",
  },
  {
    icon: <Stethoscope className="h-10 w-10" />,
    title: "Opća medicina",
    description: "Preventivni pregledi, rana dijagnostika i liječenje akutnih i hroničnih bolesti.",
    href: "/services/general",
  },
  {
    icon: <Pill className="h-10 w-10" />,
    title: "Farmakoterapija",
    description: "Individualni pristup u odabiru terapije za sve vrste oboljenja.",
    href: "/services/pharmacotherapy",
  },
  {
    icon: <Activity className="h-10 w-10" />,
    title: "Dijagnostika",
    description: "Savremeni dijagnostički postupci za pouzdanu procjenu zdravstvenog stanja.",
    href: "/services/diagnostics",
  },
  {
    icon: <Microscope className="h-10 w-10" />,
    title: "Laboratorijske usluge",
    description: "Kompletna laboratorijska dijagnostika sa brzim i preciznim rezultatima.",
    href: "/services/laboratory",
  },
];

export function Services() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-medical-800 sm:text-4xl">
            Naše usluge
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pružamo širok spektar medicinskih usluga za brigu o vašem zdravlju
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-5 rounded-full bg-medical-100 p-4 text-medical-600 w-fit">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-medical-800">
                {service.title}
              </h3>
              <p className="mb-4 flex-grow text-gray-600">{service.description}</p>
              <Button variant="link" className="p-0 text-medical-600" asChild>
                <Link href={service.href}>Saznajte više</Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/services">Pregledajte sve usluge</Link>
          </Button>
        </div>
      </div>
    </section>
  );
} 