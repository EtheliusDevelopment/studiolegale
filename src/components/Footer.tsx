import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-brand-navy text-white pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Column 1: Brand */}
                    <div>
                        <h3 className="font-serif text-2xl font-bold text-white mb-4">
                            Iannilli & Partners
                        </h3>
                        <p className="text-gray-400 leading-relaxed max-w-xs">
                            Consulenza legale pluridisciplinare con un approccio etico, trasparente e orientato al risultato.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-brand-gold font-semibold uppercase tracking-wider mb-4 text-sm">
                            Navigazione
                        </h4>
                        <ul className="space-y-3">
                            <li><Link href="/" className="text-gray-300 hover:text-brand-gold transition-colors">Home</Link></li>
                            <li><Link href="#chi-siamo" className="text-gray-300 hover:text-brand-gold transition-colors">Chi Siamo</Link></li>
                            <li><Link href="#aree-di-attivita" className="text-gray-300 hover:text-brand-gold transition-colors">Aree di Attività</Link></li>
                            <li><Link href="#contatti" className="text-gray-300 hover:text-brand-gold transition-colors">Contatti</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contacts */}
                    <div id="contatti-footer">
                        <h4 className="text-brand-gold font-semibold uppercase tracking-wider mb-4 text-sm">
                            Contatti
                        </h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-3">📍</span>
                                <span>
                                    Via Nemorense, 86<br />
                                    00199 Roma (RM)
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3">📞</span>
                                <a href="tel:+393312995583" className="hover:text-white transition-colors">+39 331 2995 583</a>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-3">✉️</span>
                                <a href="mailto:v.iannilli@iannilli.com" className="hover:text-white transition-colors">v.iannilli@iannilli.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Studio Legale Iannilli & Partners. P.IVA: [INSERIRE PARTITA IVA]. Tutti i diritti riservati.</p>
                    <div className="mt-2 space-x-4">
                        <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
                        <Link href="/cookie-policy" className="hover:text-gray-300">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
