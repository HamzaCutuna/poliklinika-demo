import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid h-16 grid-cols-3 items-center">
        <div className="flex items-center justify-self-start">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-medical-700">
              Poliklinika
            </span>
          </Link>
        </div>
        <nav className="hidden flex-nowrap items-center justify-self-center space-x-6 whitespace-nowrap text-sm font-medium md:flex">
          <Link
            href="/"
            className="whitespace-nowrap transition-colors hover:text-medical-600"
          >
            Početna
          </Link>
          <Link
            href="/about"
            className="whitespace-nowrap transition-colors hover:text-medical-600"
          >
            O nama
          </Link>
          <Link
            href="/services"
            className="whitespace-nowrap transition-colors hover:text-medical-600"
          >
            Usluge
          </Link>
          <Link
            href="/team"
            className="whitespace-nowrap transition-colors hover:text-medical-600"
          >
            Stručni tim
          </Link>
          <Link
            href="/contact"
            className="whitespace-nowrap transition-colors hover:text-medical-600"
          >
            Kontakt
          </Link>
        </nav>
        <div className="flex items-center justify-self-end space-x-4">
          <Button variant="medical" className="hidden md:flex">
            <Phone className="mr-2 h-4 w-4" />
            +387 33 123 456
          </Button>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
} 