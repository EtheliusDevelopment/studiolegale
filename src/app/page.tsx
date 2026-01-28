import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Studio Legale Iannilli & Partners",
    "image": "https://www.studiolegaleiannilli.it/logo.jpg",
    "@id": "https://www.studiolegaleiannilli.it",
    "url": "https://www.studiolegaleiannilli.it",
    "telephone": "+39 331 2995 583",
    "email": "v.iannilli@iannilli.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Nemorense, 86",
      "addressLocality": "Roma",
      "postalCode": "00199",
      "addressCountry": "IT"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "priceRange": "$$"
  };

  return (
    <main className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative flex-1 flex items-center justify-center bg-brand-paper py-20 lg:py-32 overflow-hidden border-b border-gray-100">
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10">
            <span className="text-brand-navy/70 text-sm font-semibold tracking-wider uppercase">
              Studio Legale a Roma
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-brand-navy mb-8 leading-tight">
            Iannilli & Partners
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Consulenza legale pluridisciplinare per privati e aziende.
            <br className="hidden md:block" />
            Un punto di riferimento per competenza e risultati.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contatti"
              className="px-8 py-4 bg-brand-teal text-white text-lg font-medium rounded-sm shadow-lg hover:bg-brand-dark-teal transition-all duration-300 transform hover:-translate-y-1"
            >
              Prenota una Consulenza
            </Link>
            <Link
              href="#aree-di-attivita"
              className="px-8 py-4 bg-white text-brand-navy border border-gray-200 text-lg font-medium rounded-sm hover:border-brand-gold hover:text-brand-gold transition-colors duration-300"
            >
              Scopri le Aree di Attività
            </Link>
          </div>
        </div>
      </section>

      {/* CHI SIAMO / MISSION */}
      <section id="chi-siamo" className="py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-8 relative inline-block">
            Chi Siamo
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-brand-gold"></span>
          </h2>
          <p className="text-lg text-gray-600 leading-loose mb-6">
            Lo Studio Legale <strong>Iannilli & Partners</strong> nasce con l'obiettivo di offrire un'assistenza legale completa e personalizzata. Siamo una realtà <strong>pluridisciplinare</strong> in grado di affiancare il cliente in ogni fase, dalla consulenza stragiudiziale alla difesa in giudizio.
          </p>
          <p className="text-lg text-gray-600 leading-loose">
            La nostra forza risiede nella capacità di coniugare la tradizionale etica forense con un approccio moderno e dinamico, focalizzato sulla risoluzione concreta dei problemi. Ci rivolgiamo sia a <strong>privati</strong> che ad <strong>imprese</strong>, garantendo sempre la massima dedizione e professionalità.
          </p>
        </div>
      </section>

      {/* AREE DI ATTIVITA (Grid) */}
      <section id="aree-di-attivita" className="py-20 bg-brand-paper border-t border-gray-100">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy mb-4">Aree di Attività</h2>
            <p className="text-gray-500">Copriamo i maggiori rami del diritto con specialisti dedicati.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <PracticeCard
              title="Diritto Civile"
              description="Assistenza in materia di obbligazioni, contratti, responsabilità civile, recupero crediti e risarcimento danni."
            />
            {/* Card 2 */}
            <PracticeCard
              title="Diritto di Famiglia"
              description="Separazioni, divorzi, affidamento minori e gestione dei patrimoni familiari con la massima discrezione."
            />
            {/* Card 3 */}
            <PracticeCard
              title="Diritto Societario"
              description="Consulenza alle imprese per costituzione, contrattualistica, operazioni straordinarie e gestione della crisi."
            />
            {/* Card 4 */}
            <PracticeCard
              title="Diritto Penale"
              description="Difesa tecnica in procedimenti penali per reati contro la persona, il patrimonio e la pubblica amministrazione."
            />
            {/* Card 5 */}
            <PracticeCard
              title="Diritto del Lavoro"
              description="Tutela dei diritti di lavoratori e datori di lavoro in fase di assunzione, licenziamento e contenzioso."
            />
            {/* Card 6 */}
            <PracticeCard
              title="Consulenza Aziendale"
              description="Supporto continuativo alle PMI per la gestione legale quotidiana e la compliance normativa."
            />
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (No form integration, purely informational as requested) */}
      <section id="contatti" className="py-20 bg-brand-navy text-white relative">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12">

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
                Richiedi un Appuntamento
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Per esporre il tuo caso e ricevere una prima valutazione, contattaci telefonicamente o via email. Riceviamo su appuntamento.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-gold/20 p-3 rounded-full mr-4">
                    <span className="text-brand-gold text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Telefono</h3>
                    <a href="tel:+393312995583" className="text-gray-300 hover:text-brand-gold transition-colors font-medium text-lg">
                      +39 331 2995 583
                    </a>
                    <p className="text-sm text-gray-400">Lun-Ven, 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-gold/20 p-3 rounded-full mr-4">
                    <span className="text-brand-gold text-xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a href="mailto:v.iannilli@iannilli.com" className="text-gray-300 hover:text-brand-gold transition-colors">
                      v.iannilli@iannilli.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-gold/20 p-3 rounded-full mr-4">
                    <span className="text-brand-gold text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Sede</h3>
                    <p className="text-gray-300">Via Nemorense, 86</p>
                    <p className="text-gray-300">00199 Roma (RM)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual element or "Fake" form structure just for aesthetics? 
                Let's use a nice typographic block instead to keep it "Sober" and strictly no-integration. */}
            <div className="md:w-1/2 bg-white text-brand-navy p-8 rounded-sm shadow-lg w-full">
              <h3 className="font-serif text-2xl font-bold mb-4">Orari di Studio</h3>
              <ul className="space-y-3 mb-6 border-b border-gray-100 pb-6">
                <li className="flex justify-between">
                  <span>Lunedì - Venerdì</span>
                  <span className="font-semibold">09:00 - 19:00</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Sabato - Domenica</span>
                  <span>Chiuso</span>
                </li>
              </ul>
              <div className="text-center">
                <a
                  href="mailto:v.iannilli@iannilli.com?subject=Richiesta%20Appuntamento"
                  className="block w-full py-3 bg-brand-navy text-white font-medium rounded-sm hover:bg-brand-teal transition-colors"
                >
                  Invia una Email
                </a>
                <p className="text-xs text-gray-400 mt-3">
                  Rispondiamo solitamente entro 24 ore lavorative.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function PracticeCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-teal/30 transition-all duration-300 group">
      <div className="w-12 h-1 bg-brand-gold mb-6 group-hover:w-20 transition-all duration-300"></div>
      <h3 className="font-serif text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
