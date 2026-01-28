import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-medical-100 py-12 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm md:p-10">
          <div className="mb-6 inline-flex items-center rounded-full bg-medical-100 px-4 py-2 text-medical-700">
            <Info className="mr-2 h-5 w-5" />
            <span className="text-sm font-medium">Demo napomena</span>
          </div>

          <h1 className="mb-3 text-3xl font-bold text-medical-800 md:text-4xl">
            Nije razvijeno u demo verziji
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            Stranica koju tražite trenutno nije dostupna. Ova demo verzija prikazuje osnovnu strukturu i dizajn.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="medical" asChild>
              <Link href="/">Nazad na početnu</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Kontakt</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
