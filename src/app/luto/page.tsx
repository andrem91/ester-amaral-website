import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Heart, Clock, Flower2, Sun, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Luto e Perdas Emocionais | Psicóloga Ester Amaral - São Paulo",
    description:
        "Acompanhamento psicológico para luto e perdas em São Paulo. Suporte especializado para enfrentar a dor da perda com acolhimento. Atendimento presencial e online.",
    keywords: [
        "psicóloga luto",
        "terapia para luto",
        "psicóloga perdas",
        "acompanhamento luto São Paulo",
        "psicoterapia luto",
        "perda de ente querido",
        "elaboração do luto",
        "psicóloga online luto",
    ],
    openGraph: {
        title: "Luto e Perdas Emocionais | Psicóloga Ester Amaral",
        description:
            "Acompanhamento especializado para o processo de luto. Psicoterapia humanizada em São Paulo e online.",
    },
};

const tiposLuto = [
    {
        icon: Heart,
        title: "Perda de Entes Queridos",
        description:
            "Suporte para elaborar a dor da perda de pessoas amadas, respeitando seu tempo e processo individual.",
    },
    {
        icon: Clock,
        title: "Transições de Vida",
        description:
            "Acompanhamento para perdas simbólicas: fim de relacionamentos, mudança de carreira, aposentadoria, mudanças de cidade.",
    },
    {
        icon: Flower2,
        title: "Luto Gestacional",
        description:
            "Espaço acolhedor para elaborar a perda gestacional ou perinatal, uma dor frequentemente invisibilizada pela sociedade.",
    },
    {
        icon: Sun,
        title: "Ressignificação",
        description:
            "Trabalho terapêutico para encontrar um novo sentido e reconstruir a vida após a perda.",
    },
];

export default function LutoPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-terracotta-50 to-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta-100/30 to-transparent" />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-6">
                                Especialidade
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
                                Luto e{" "}
                                <span className="text-gradient">Perdas Emocionais</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                O luto é uma das experiências mais difíceis que enfrentamos.
                                Perder alguém importante ou passar por uma grande mudança de
                                vida pode trazer uma dor profunda que precisa ser acolhida.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Não existe uma forma "certa" de viver o luto. Na terapia,
                                ofereço um espaço seguro para você sentir, falar e elaborar sua
                                dor no seu próprio ritmo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20luto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:shadow-xl hover:-translate-y-1"
                                >
                                    <Phone size={20} />
                                    Agendar Consulta
                                </Link>
                                <Link
                                    href="/servicos"
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 px-8 py-4 rounded-full font-bold text-base border border-neutral-200 transition-all"
                                >
                                    Ver Outras Especialidades
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/Ester-Amaral-Psicóloga-para-mulheres_01.jpg"
                                    alt="Psicóloga Ester Amaral - Acompanhamento para Luto"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tipos de Luto */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Diferentes Formas de Perda
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            O luto não se limita à morte. Trabalhamos com diversas formas de
                            perda que impactam nossa vida emocional.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {tiposLuto.map((item) => (
                            <div
                                key={item.title}
                                className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                                    <item.icon size={28} className="text-terracotta-600" />
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Processo Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                                O Processo do Luto
                            </h2>
                            <p className="text-lg text-neutral-600">
                                Cada pessoa vivencia o luto de forma única. Não há prazo nem
                                forma "correta" de sentir.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12">
                            <div className="space-y-6 text-neutral-600 leading-relaxed">
                                <p>
                                    Na sociedade atual, muitas vezes somos pressionados a "superar"
                                    rapidamente a dor da perda. Mas o luto precisa de tempo e de
                                    um espaço para ser vivido.
                                </p>
                                <p>
                                    Na terapia, trabalhamos para:
                                </p>
                                <ul className="space-y-3 ml-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                        <span>Acolher a dor sem pressa de "superá-la"</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                        <span>Compreender os sentimentos que surgem (tristeza, raiva, culpa)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                        <span>Honrar a memória de quem partiu ou o que foi perdido</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                        <span>Gradualmente reconstruir sentido e seguir em frente</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Sua dor merece ser acolhida
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Você não precisa passar por isso sozinho. Agende uma conversa e
                        encontre um espaço seguro para elaborar sua perda.
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20luto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-terracotta-600 px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                    >
                        <Phone size={22} />
                        Agendar Primeira Conversa
                    </Link>
                </div>
            </section>
        </>
    );
}
