import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <div className="bg-medical-100 py-12 md:py-20">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold text-medical-800 md:text-5xl">Kontakt</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Javite nam se za sve informacije ili zakazivanje termina. Naš tim je tu da odgovori na sva vaša pitanja.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-medical-800">Kontakt informacije</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="mr-4 h-6 w-6 text-medical-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Telefon</h3>
                    <p className="mt-1 text-gray-600">
                      +387 61 123 456 <br/> +387 61 123 457
                      </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="mr-4 h-6 w-6 text-medical-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@poliklinika.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-medical-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Adresa</h3>
                    <p className="mt-1 text-gray-600">
                      Sarajevo,<br />
                      Bosnia and Herzegovina
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-medical-600" />
                  <div>
                    <h3 className="font-medium text-gray-900">Radno vrijeme</h3>
                    <p className="mt-1 text-gray-600">
                      Ponedjeljak - Petak: 08:00 - 20:00<br />
                      Subota: 09:00 - 15:00<br />
                      Nedjelja: Zatvoreno
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-medical-800">Zakazivanje termina</h3>
                <p className="mb-4 text-gray-600">
                  Za zakazivanje termina možete nas kontaktirati telefonom ili ispuniti kontakt formular.
                </p>
                <Button variant="medical" size="lg" asChild>
                  <Link href="tel:+38761123456">
                    <Phone className="mr-2 h-5 w-5" />
                    Nazovite odmah
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-medical-800">Pošaljite upit</h2>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-gray-700">
                      Ime
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-medical-500 focus:outline-none focus:ring-1 focus:ring-medical-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-gray-700">
                      Prezime
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-medical-500 focus:outline-none focus:ring-1 focus:ring-medical-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-medical-500 focus:outline-none focus:ring-1 focus:ring-medical-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-medical-500 focus:outline-none focus:ring-1 focus:ring-medical-500"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-gray-700">
                    Usluga
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-medical-500 focus:outline-none focus:ring-1 focus:ring-medical-500"
                  >
                    <option value="">Odaberite uslugu</option>
                    <option value="cardiology">Kardiologija</option>
                    <option value="neurology">Neurologija</option>
                    <option value="general">Opća medicina</option>
                    <option value="diagnostics">Dijagnostika</option>
                    <option value="laboratory">Laboratorijske usluge</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    Poruka
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-medical-500 focus:outline-none focus:ring-1 focus:ring-medical-500"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" variant="medical" className="w-full">
                    Pošalji upit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-medical-800">Kako do nas</h2>
          <div className="h-[400px] w-full rounded-lg bg-gray-300">
            {/* This would be a Google Map */}
            <div className="flex h-full items-center justify-center">
              <p className="text-lg font-medium text-gray-600">Karta lokacije</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 