import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { GoogleMap } from "@/components/google-map";

export const metadata: Metadata = {
    title: "Contato | Psicóloga Ester Amaral - Agende sua Consulta",
    description:
        "Entre em contato com a Psicóloga Ester Amaral. Agende sua consulta presencial em São Paulo ou online. WhatsApp, email e formulário de contato.",
    openGraph: {
        title: "Contato | Psicóloga Ester Amaral",
        description:
            "Agende sua consulta com a Psicóloga Ester Amaral. Atendimento presencial em São Paulo e online.",
    },
};

export default function ContatoPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-terracotta-50 to-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-6">
                            Fale Comigo
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
                            Entre em <span className="text-gradient">Contato</span>
                        </h1>
                        <p className="text-lg text-neutral-600">
                            Estou disponível para esclarecer suas dúvidas e agendar a sua
                            primeira consulta. Escolha a forma de contato que preferir.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {/* WhatsApp */}
                        <Link
                            href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-neutral-50 hover:bg-terracotta-50 rounded-2xl p-6 border border-neutral-100 hover:border-terracotta-200 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-terracotta-100 group-hover:bg-terracotta-500 flex items-center justify-center mb-4 transition-colors">
                                <Phone
                                    size={24}
                                    className="text-terracotta-600 group-hover:text-white transition-colors"
                                />
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">WhatsApp</h3>
                            <p className="text-terracotta-600 font-medium">(11) 98840-5439</p>
                            <p className="text-sm text-neutral-500 mt-2">
                                Resposta rápida em horário comercial
                            </p>
                        </Link>

                        {/* Email */}
                        <Link
                            href="mailto:contato@psicologaesteramaral.com.br"
                            className="group bg-neutral-50 hover:bg-terracotta-50 rounded-2xl p-6 border border-neutral-100 hover:border-terracotta-200 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-terracotta-100 group-hover:bg-terracotta-500 flex items-center justify-center mb-4 transition-colors">
                                <Mail
                                    size={24}
                                    className="text-terracotta-600 group-hover:text-white transition-colors"
                                />
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">E-mail</h3>
                            <p className="text-terracotta-600 font-medium text-sm break-all">
                                contato@psicologaesteramaral.com.br
                            </p>
                            <p className="text-sm text-neutral-500 mt-2">
                                Para informações detalhadas
                            </p>
                        </Link>

                        {/* Instagram */}
                        <Link
                            href="https://www.instagram.com/psicologaesteramaral/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-neutral-50 hover:bg-terracotta-50 rounded-2xl p-6 border border-neutral-100 hover:border-terracotta-200 transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-terracotta-100 group-hover:bg-terracotta-500 flex items-center justify-center mb-4 transition-colors">
                                <Instagram
                                    size={24}
                                    className="text-terracotta-600 group-hover:text-white transition-colors"
                                />
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">Instagram</h3>
                            <p className="text-terracotta-600 font-medium">
                                @psicologaesteramaral
                            </p>
                            <p className="text-sm text-neutral-500 mt-2">
                                Conteúdo e dicas de psicologia
                            </p>
                        </Link>

                        {/* Horário */}
                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100">
                            <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center mb-4">
                                <Clock size={24} className="text-terracotta-600" />
                            </div>
                            <h3 className="font-bold text-neutral-900 mb-2">Horário</h3>
                            <p className="text-neutral-600 font-medium">Seg a Sex</p>
                            <p className="text-sm text-neutral-500 mt-2">08:00 às 20:00</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Map */}
            <section className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Location Info */}
                            <div>
                                <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                                    Atendimento Presencial
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
                                    Localização do Consultório
                                </h2>
                                <div className="bg-white rounded-2xl p-6 border border-neutral-100 mb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin size={24} className="text-terracotta-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-neutral-900 mb-2">
                                                Endereço
                                            </h3>
                                            <p className="text-neutral-600">
                                                R. dos Cafezais, 363 - Jardim Prudência
                                                <br />
                                                São Paulo - SP, 04364-000
                                            </p>
                                            <Link
                                                href="https://maps.google.com/?q=R.+dos+Cafezais,+363+-+Jardim+Prudência,+São+Paulo+-+SP"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-terracotta-600 hover:text-terracotta-700 font-medium mt-3 transition-colors"
                                            >
                                                Ver no Google Maps
                                                <MapPin size={16} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-neutral-600 leading-relaxed">
                                    O consultório está localizado na Zona Sul de São Paulo, em uma
                                    região de fácil acesso. Possui estacionamento próximo e é
                                    acessível por transporte público.
                                </p>
                            </div>

                            {/* Map */}
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <ContactForm />
        </>
    );
}
