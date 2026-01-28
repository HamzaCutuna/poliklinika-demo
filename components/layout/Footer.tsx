import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-medical-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Poliklinika</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              Privatna poliklinika koja pruža vrhunske medicinske usluge, te osigurava najbolju njegu za sve pacijente.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/" className="text-medical-200 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/" className="text-medical-200 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Kontakt informacije</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 shrink-0 text-medical-400" />
                <span>+387 61 123 456 <br/> +387 61 123 457</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 shrink-0 text-medical-400" />
                <span>info@poliklinika.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 shrink-0 text-medical-400" />
                <span>Sarajevo,<br/> Bosnia and Herzegovina</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-3 h-5 w-5 shrink-0 text-medical-400" />
                <span>Pon - Pet: 09:00 - 19:00<br />Sub: 09:00 - 15:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Brzi linkovi</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-medical-300">Početna</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-medical-300">O nama</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-medical-300">Usluge</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-medical-300">Stručni tim</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-medical-300">Kontakt</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold">Zakažite termin</h3>
            <p className="mb-4 text-sm leading-relaxed text-gray-300">
              Nazovite nas ili ispunite online formular za zakazivanje termina.
            </p>
            <Button variant="medical" className="w-full">
              <Phone className="mr-2 h-4 w-4" />
              Nazovite nas
            </Button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 py-6">
        <div className="container text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Poliklinika. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
} 