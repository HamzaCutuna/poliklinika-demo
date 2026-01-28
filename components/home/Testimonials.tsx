import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Belma Ljuca",
    role: "Pacijent",
    content:
      "Dr. Anid je izuzetno stručan i posvećen ljekar. Tokom pregleda bio je vrlo pažljiv, objasnio mi je svaki korak i odgovorio na sva moja pitanja. Toplo ga preporučujem svima koji traže pouzdanog doktora.",
    rating: 5,
  },
  {
    name: "Ermeledin Hadžić",
    role: "Pacijent",
    content:
      "Veoma pozitivno iskustvo u Poliklinici! Od trenutka kada sam ušao, osoblje je bilo ljubazno i profesionalno. Usluga je bila brza i efikasna, a doktori su se potrudili da sve detaljno objasne.",
    rating: 5,
  },
  {
    name: "Jasna Omanović",
    role: "Pacijent",
    content:
      "Poliklinika nudi najbolje usluge. Od toplog srca preporučujemo da je posjeti svako ko ima neki problem, jer su profesionalni i dostupni za svoje pacijente u bilo koja doba",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-medical-800 py-16 text-white md:py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Šta kažu naši pacijenti
          </h2>
          <p className="mt-4 text-lg text-medical-200">
            Povjerenje pacijenata je naša najveća nagrada
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-medical-700 p-6 shadow"
            >
              <div className="mb-4 flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <p className="mb-6 flex-grow text-medical-100">{testimonial.content}</p>
              <div>
                <p className="font-medium">{testimonial.name}</p>
                <p className="text-sm text-medical-300">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 