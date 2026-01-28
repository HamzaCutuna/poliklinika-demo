import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <div className="bg-medical-100 py-12 md:py-20">
        <div className="container">
          <h1 className="mb-6 text-4xl font-bold text-medical-800 md:text-5xl">O nama</h1>
          <p className="max-w-3xl text-lg text-gray-600">
            Poliklinika je moderna zdravstvena ustanova koja pruža vrhunske zdravstvene usluge po najvišim evropskim standardima.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-medical-800">Naša misija</h2>
              <p className="mb-4 text-gray-600">
                Misija Poliklinike je poboljšanje kvalitete života naših pacijenata pružanjem visokokvalitetnih medicinskih usluga uz individualni pristup svakom pacijentu.
              </p>
              <p className="mb-4 text-gray-600">
                Nastojimo biti sinonim za profesionalnost, kvalitetu i pouzdanost u zdravstvu, te kontinuirano ulagati u stručno usavršavanje našeg osoblja i najsuvremeniju medicinsku opremu.
              </p>
              <p className="text-gray-600">
                Poseban naglasak stavljamo na preventivnu medicinu, edukaciju pacijenata i razvoj svijesti o važnosti brige za vlastito zdravlje.
              </p>
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold text-medical-800">Naša vizija</h2>
              <p className="mb-4 text-gray-600">
                Vizija Poliklinike je postati vodeća privatna zdravstvena ustanova u regiji koja će biti prepoznata po izvrsnosti, inovativnosti i kvaliteti usluga.
              </p>
              <p className="mb-4 text-gray-600">
                Želimo stvoriti okruženje u kojem će pacijenti dobiti najbolju moguću zdravstvenu skrb, a zaposlenici imati priliku za profesionalni razvoj i napredovanje.
              </p>
              <p className="text-gray-600">
                Težimo uspostavljanju novih standarda u medicini i uvođenju inovativnih metoda dijagnostike i liječenja.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 md:py-24">
        <div className="container">
          <h2 className="mb-10 text-center text-3xl font-bold text-medical-800 md:text-4xl">
            Zašto odabrati nas?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-medical-100 p-3 text-medical-600 w-fit">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-medical-800">Stručni tim</h3>
              <p className="text-gray-600">
                Naš tim čine vrhunski stručnjaci s dugogodišnjim iskustvom u svojim područjima.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-medical-100 p-3 text-medical-600 w-fit">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-medical-800">Moderna oprema</h3>
              <p className="text-gray-600">
                Koristimo najsuvremeniju medicinsku opremu za dijagnostiku i liječenje.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-medical-100 p-3 text-medical-600 w-fit">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-medical-800">Pristupačne cijene</h3>
              <p className="text-gray-600">
                Pružamo vrhunske usluge po pristupačnim cijenama dostupnim svima.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 rounded-full bg-medical-100 p-3 text-medical-600 w-fit">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-medical-800">Brza dijagnostika</h3>
              <p className="text-gray-600">
                Brza i precizna dijagnostika bez dugih lista čekanja.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-medical-800 py-16 text-white md:py-24">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Naša povijest</h2>
          <p className="mx-auto max-w-3xl text-lg text-medical-100">
            Poliklinika osnovana je 2010. godine s ciljem pružanja visokokvalitetnih zdravstvenih usluga u Sarajevu. Od skromnih početaka, kroz kontinuirano ulaganje u opremu, osoblje i prostor, izrasli smo u modernu zdravstvenu ustanovu koja svakodnevno pomaže brojnim pacijentima.
          </p>
        </div>
      </div>
    </>
  );
} 