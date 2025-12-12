import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT, WHATSAPP, ADDRESS } from "@/lib/constants";

const footerLinks = {
    menu: [
        { href: "/", label: "Início" },
        { href: "/sobre", label: "Sobre Mim" },
        { href: "/servicos", label: "Serviços" },
        { href: "/abordagem", label: "Abordagem" },
        { href: "/contato", label: "Contato" },
    ],
    especialidades: [
        { href: "/ansiedade-e-depressao", label: "Ansiedade e Depressão" },
        { href: "/maternidade", label: "Maternidade" },
        { href: "/luto", label: "Luto" },
        { href: "/burnout", label: "Burnout" },
        { href: "/adolescentes", label: "Adolescentes" },
        { href: "/relacionamentos", label: "Relacionamentos" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                                <Image
                                    src="/image/EA-Simbolo 2.png"
                                    alt="Logo Ester Amaral"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-bold">Ester Amaral</p>
                                <p className="text-xs text-neutral-400">Psicóloga Clínica</p>
                            </div>
                        </Link>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                            Psicoterapia com abordagem Winnicottiana. Um espaço seguro para o
                            desenvolvimento do seu verdadeiro eu.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href={CONTACT.instagramUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-terracotta-600 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={18} />
                            </Link>
                            <Link
                                href={`mailto:${CONTACT.email}`}
                                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-terracotta-600 flex items-center justify-center transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={18} />
                            </Link>
                            <Link
                                href={WHATSAPP.baseUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-neutral-800 hover:bg-terracotta-600 flex items-center justify-center transition-colors"
                                aria-label="WhatsApp"
                            >
                                <Phone size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Menu Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Menu</h3>
                        <ul className="space-y-3">
                            {footerLinks.menu.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-400 hover:text-terracotta-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Especialidades Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Especialidades</h3>
                        <ul className="space-y-3">
                            {footerLinks.especialidades.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-300 hover:text-terracotta-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-bold text-lg mb-6">Contato</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone size={18} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-neutral-300 text-sm">WhatsApp</p>
                                    <Link
                                        href={WHATSAPP.baseUrl}
                                        className="text-white hover:text-terracotta-400 transition-colors text-sm"
                                    >
                                        {CONTACT.phoneFormatted}
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={18} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-neutral-300 text-sm">Email</p>
                                    <Link
                                        href={`mailto:${CONTACT.email}`}
                                        className="text-white hover:text-terracotta-400 transition-colors text-sm break-all"
                                    >
                                        {CONTACT.email}
                                    </Link>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                                <div>
                                    <p className="text-neutral-300 text-sm">Atendimento Presencial</p>
                                    <p className="text-white text-sm">
                                        {ADDRESS.street} - {ADDRESS.neighborhood}
                                        <br />
                                        {ADDRESS.city} - {ADDRESS.state}, {ADDRESS.cep}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-800">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-300">
                        <p>© {currentYear} Psicóloga Ester Amaral. Todos os direitos reservados.</p>
                        <div className="flex items-center gap-6">
                            <Link href="/politica-de-privacidade" className="text-neutral-300 hover:text-white transition-colors">
                                Política de Privacidade
                            </Link>
                            <Link href="/termos-de-uso" className="text-neutral-300 hover:text-white transition-colors">
                                Termos de Uso
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
