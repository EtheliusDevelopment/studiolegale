import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-navy/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/">
                            <div className="relative h-16 w-64 md:w-80">
                                <Image
                                    src="/logo.jpg"
                                    alt="Studio Legale Iannilli & Partners"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink href="#chi-siamo">Chi Siamo</NavLink>
                        <NavLink href="#aree-di-attivita">Aree di Attività</NavLink>
                        <NavLink href="#contatti">Contatti</NavLink>
                        <Link
                            href="#contatti"
                            className="px-6 py-2.5 bg-brand-teal text-white font-medium rounded-sm hover:bg-brand-dark-teal transition-colors duration-300 shadow-sm"
                        >
                            Richiedi Consulenza
                        </Link>
                    </div>

                    {/* Mobile Navigation Placeholder (Simple link for now) */}
                    <div className="md:hidden">
                        <Link href="#contatti" className="text-brand-teal font-semibold">
                            Contattaci
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-brand-navy/80 hover:text-brand-teal font-medium transition-colors text-sm uppercase tracking-wide"
        >
            {children}
        </Link>
    );
}
