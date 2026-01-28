import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function ContactCta() {
  return (
    <section className="bg-gradient-to-r from-medical-600 to-medical-700 py-16 text-white md:py-24">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Trebate pomoć? Kontaktirajte nas!
            </h2>
            <p className="mt-4 max-w-md text-lg text-medical-100">
              Naš tim je tu da odgovori na sva vaša pitanja i pomogne vam u zakazivanju termina
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10" asChild>
              <Link href="tel:+38761123456">
                <Phone className="mr-2 h-5 w-5" />
                +387 33 123 456
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-black hover:bg-white/10" asChild>
              <Link href="mailto:info@poliklinika.com">
                <Mail className="mr-2 h-5 w-5" />
                info@poliklinika.com
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 