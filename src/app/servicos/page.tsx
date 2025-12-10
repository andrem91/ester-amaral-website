import type { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Baby,
    Users,
    HeartCrack,
    Heart,
    Frown,
    Salad,
    CircleDot,
    BatteryLow,
    HeartHandshake,
    MapPin,
    Video,
    ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
    title: "Serviços | Psicóloga Ester Amaral - Especialidades e Atendimento",
    description:
        "Conheça os serviços e especialidades oferecidos pela Psicóloga Ester Amaral. Atendimento em maternidade, ansiedade, depressão, luto, autoconhecimento e mais.",
    openGraph: {
        title: "Serviços e Especialidades | Psicóloga Ester Amaral",
        description:
            "Psicoterapia especializada em maternidade, ansiedade, depressão, luto, autoconhecimento. Atendimento presencial em SP e online.",
    },
};

const especialidades = [
    {
        icon: Baby,
        title: "Maternidade",
        description:
            "Acompanhamento para gestantes e mães em todas as fases da maternidade, incluindo ambivalências, dificuldades de adaptação e sobrecarga.",
        href: "/maternidade",
    },
    {
        icon: Users,
        title: "Adolescentes",
        description:
            "Atendimento especializado para adolescentes, lidando com questões de identidade, ansiedade, autoestima e relacionamentos.",
        href: "/adolescentes",
    },
    {
        icon: HeartCrack,
        title: "Luto e Perdas",
        description:
            "Acolhimento e suporte no processo de luto, seja por perda de entes queridos, relacionamentos, ou outras transições de vida.",
        href: "/luto",
    },
    {
        icon: Frown,
        title: "Ansiedade e Depressão",
        description:
            "Tratamento para sintomas de ansiedade, depressão e outras questões de saúde mental, com foco no bem-estar emocional.",
        href: "/ansiedade-e-depressao",
    },
    {
        icon: BatteryLow,
        title: "Burnout e Esgotamento",
        description:
            "Suporte para quem se sente sobrecarregado, exausto ou esgotado mentalmente, desenvolvendo estratégias de autocuidado.",
        href: "/burnout",
    },
    {
        icon: HeartHandshake,
        title: "Relacionamentos Afetivos",
        description:
            "Auxílio para questões relacionadas a relacionamentos amorosos, dificuldades de conexão e padrões repetitivos.",
        href: "/relacionamentos",
    },
    {
        icon: Heart,
        title: "Conflitos Familiares",
        description:
            "Ajuda para compreender e lidar com dinâmicas familiares conflituosas, melhorando a comunicação e os relacionamentos.",
    },
    {
        icon: CircleDot,
        title: "Autoestima e Autoconhecimento",
        description:
            "Trabalho focado no desenvolvimento da autoestima, autoconfiança e compreensão de si mesmo.",
    },
    {
        icon: Salad,
        title: "Transtornos Alimentares",
        description:
            "Acompanhamento psicológico para pessoas que enfrentam dificuldades com alimentação e imagem corporal.",
    },
];

export default function ServicosPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-terracotta-50 to-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-6">
                            Áreas de Atuação
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
                            Especialidades e <span className="text-gradient">Serviços</span>
                        </h1>
                        <p className="text-lg text-neutral-600">
                            Trabalho com diversas questões emocionais, sempre com acolhimento e
                            respeito ao seu tempo. Cada pessoa é única e o tratamento é
                            personalizado para suas necessidades.
                        </p>
                    </div>
                </div>
            </section>

            {/* Especialidades Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {especialidades.map((item) => {
                            const CardContent = (
                                <>
                                    <div className="w-14 h-14 rounded-2xl bg-terracotta-100 group-hover:bg-terracotta-500 flex items-center justify-center mb-6 transition-colors">
                                        <item.icon
                                            size={28}
                                            className="text-terracotta-600 group-hover:text-white transition-colors"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-600 leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    {item.href && (
                                        <span className="inline-flex items-center gap-2 text-terracotta-600 font-semibold text-sm group-hover:gap-3 transition-all">
                                            Saiba mais
                                            <ArrowRight size={16} />
                                        </span>
                                    )}
                                </>
                            );

                            if (item.href) {
                                return (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="group bg-neutral-50 hover:bg-white rounded-3xl p-8 transition-all hover:shadow-xl hover:shadow-terracotta-500/5 border border-transparent hover:border-terracotta-100 block"
                                    >
                                        {CardContent}
                                    </Link>
                                );
                            }

                            return (
                                <div
                                    key={item.title}
                                    className="group bg-neutral-50 hover:bg-white rounded-3xl p-8 transition-all hover:shadow-xl hover:shadow-terracotta-500/5 border border-transparent hover:border-terracotta-100"
                                >
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Formas de Atendimento */}
            <section className="py-20 bg-neutral-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                            Como Funciona
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
                            Formas de Atendimento
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Presencial */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
                            <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                                <MapPin size={28} className="text-terracotta-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                Atendimento Presencial
                            </h3>
                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                Consultas realizadas em consultório particular, em um espaço
                                preparado para oferecer conforto, privacidade e acolhimento.
                            </p>
                            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                                <p className="font-semibold text-neutral-900 mb-2">
                                    Localização
                                </p>
                                <p className="text-sm text-neutral-600">
                                    R. dos Cafezais, 363 - Jardim Prudência
                                    <br />
                                    São Paulo - SP, 04364-000
                                </p>
                            </div>
                        </div>

                        {/* Online */}
                        <div className="bg-white rounded-3xl p-8 border border-neutral-100 shadow-sm">
                            <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                                <Video size={28} className="text-terracotta-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                                Atendimento Online
                            </h3>
                            <p className="text-neutral-600 mb-6 leading-relaxed">
                                Sessões por videochamada com a mesma qualidade do atendimento
                                presencial. Ideal para quem busca praticidade e flexibilidade.
                            </p>
                            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100">
                                <p className="font-semibold text-neutral-900 mb-2">
                                    Como Funciona
                                </p>
                                <p className="text-sm text-neutral-600">
                                    Atendimento via plataformas seguras de videochamada, com total
                                    sigilo e privacidade garantidos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Pronto para dar o primeiro passo?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Entre em contato para agendar uma primeira conversa e entender como
                        a terapia pode te auxiliar.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-terracotta-600 px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:-translate-y-1"
                        >
                            <Phone size={22} />
                            Agendar via WhatsApp
                        </Link>
                        <Link
                            href="/contato"
                            className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/30 transition-all"
                        >
                            Ver formas de contato
                            <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
