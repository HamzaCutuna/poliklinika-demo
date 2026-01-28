import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarClock, Shield, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-medical-100 to-white py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="flex flex-col items-start">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-medical-800 md:text-5xl lg:text-6xl">
              Vaše zdravlje je naš <span className="text-medical-600">prioritet</span>
            </h1>
            <p className="mb-8 max-w-md text-lg text-gray-600">
              Poliklinika nudi vrhunsku medicinsku uslugu s profesionalnim timom stručnjaka koji su posvećeni vašem zdravlju i dobrobiti.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button variant="medical" size="lg" asChild>
                <Link href="/contact">
                  <CalendarClock className="mr-2 h-5 w-5" />
                  Zakažite pregled
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">
                  Naše usluge
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="flex items-center">
                <Shield className="mr-3 h-8 w-8 text-medical-500" />
                <div>
                  <h3 className="font-medium text-medical-800">Sigurnost</h3>
                  <p className="text-sm text-gray-500">Sigurne metode</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="mr-3 h-8 w-8 text-medical-500" />
                <div>
                  <h3 className="font-medium text-medical-800">Stručnost</h3>
                  <p className="text-sm text-gray-500">Visoka kvaliteta</p>
                </div>
              </div>
              <div className="flex items-center">
                <CalendarClock className="mr-3 h-8 w-8 text-medical-500" />
                <div>
                  <h3 className="font-medium text-medical-800">Brzina</h3>
                  <p className="text-sm text-gray-500">Bez čekanja</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative ml-auto h-[400px] w-full max-w-md rounded-lg bg-medical-200 shadow-xl md:h-[500px]">
            {/* This would be an image of a doctor or medical facility */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg font-medium text-medical-600">Hero Image</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-medical-200 opacity-50 blur-3xl md:h-96 md:w-96"></div>
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-medical-100 opacity-50 blur-3xl md:h-96 md:w-96"></div>
    </section>
  );
} 