import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <section className="bg-medical-100 py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative h-[400px] w-full rounded-lg bg-medical-200 shadow-xl md:h-[500px]">
            {/* This would be an image of the clinic or the team */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-lg font-medium text-medical-600">About Image</p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-medical-800 sm:text-4xl">
              O Poliklinici
            </h2>
            <p className="mb-6 text-lg text-gray-600">
              Poliklinika osnovana je s ciljem pružanja vrhunske zdravstvene usluge u prijatnom i profesionalnom okruženju. Naš tim čine vrhunski specijalisti sa dugogodišnjim iskustvom u različitim medicinskim područjima.
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Koristimo najnoviju medicinsku tehnologiju i kontinuirano radimo na unapređenju naših usluga kako bismo osigurali najbolju moguću njegu za naše pacijente.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-medical-500" />
                <span className="text-gray-600">Visokokvalificirani medicinski tim</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-medical-500" />
                <span className="text-gray-600">Savremena medicinska oprema</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-medical-500" />
                <span className="text-gray-600">Individualni pristup svakom pacijentu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-6 w-6 shrink-0 text-medical-500" />
                <span className="text-gray-600">Povoljne cijene usluga</span>
              </li>
            </ul>
            <Button variant="medical" asChild>
              <Link href="/about">Saznajte više o nama</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 