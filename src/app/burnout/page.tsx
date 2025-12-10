import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, BatteryLow, Brain, Flame, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Burnout e Esgotamento Mental | Psicóloga Ester Amaral - São Paulo",
    description:
        "Tratamento para burnout e esgotamento mental em São Paulo. Psicoterapia especializada para sobrecarga, exaustão e estresse crônico. Atendimento presencial e online.",
    keywords: [
        "psicóloga burnout",
        "tratamento burnout São Paulo",
        "esgotamento mental",
        "síndrome de burnout",
        "sobrecarga mental",
        "exaustão profissional",
        "estresse crônico",
        "psicóloga online burnout",
    ],
    openGraph: {
        title: "Burnout e Esgotamento Mental | Psicóloga Ester Amaral",
        description:
            "Tratamento especializado para burnout e esgotamento. Recupere seu equilíbrio emocional.",
    },
};

const sintomasBurnout = [
    {
        icon: BatteryLow,
        title: "Exaustão Profunda",
        description:
            "Cansaço que não passa com descanso. Sensação de estar completamente esgotado física e emocionalmente.",
    },
    {
        icon: Brain,
        title: "Dificuldade de Concentração",
        description:
            "Problemas para focar, esquecimentos frequentes, sensação de 'mente vazia' ou confusa.",
    },
    {
        icon: Flame,
        title: "Cinismo e Distanciamento",
        description:
            "Perda de entusiasmo, desapego emocional do trabalho, irritabilidade com colegas ou clientes.",
    },
    {
        icon: Heart,
        title: "Sintomas Físicos",
        description:
            "Dores de cabeça, tensão muscular, problemas de sono, alterações no apetite, queda de imunidade.",
    },
];

export default function BurnoutPage() {
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
                                Burnout e{" "}
                                <span className="text-gradient">Esgotamento Mental</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                A Síndrome de Burnout é o resultado de um estresse crônico no
                                trabalho que não foi gerenciado adequadamente. Se você se
                                sente constantemente exausto, desmotivado e sobrecarregado,
                                pode estar vivendo isso.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Na terapia, trabalhamos para compreender as causas do seu
                                esgotamento, desenvolver estratégias de autocuidado e
                                reconstruir sua relação com o trabalho e consigo mesmo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20burnout%20e%20esgotamento"
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
                                    src="/image/Psicologa-Ester-Amaral-01.jpg"
                                    alt="Psicóloga Ester Amaral - Tratamento para Burnout"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sintomas Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Sinais do Burnout
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Reconhecer os sinais é o primeiro passo para buscar ajuda. Você
                            se identifica com algum desses sintomas?
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {sintomasBurnout.map((item) => (
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

            {/* Diferença Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                                Burnout não é Frescura
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12">
                            <div className="space-y-6 text-neutral-600 leading-relaxed">
                                <p>
                                    Muitas pessoas minimizam seus sintomas, achando que é só
                                    "cansaço normal" ou que precisam "aguentar firme". Mas o
                                    burnout é uma condição séria, reconhecida pela OMS como um
                                    fenômeno ocupacional.
                                </p>
                                <p>
                                    A cultura de produtividade excessiva nos leva a ignorar
                                    nossos limites até que o corpo e a mente dizem "basta".
                                    Pedir ajuda não é fraqueza - é um ato de autocuidado.
                                </p>
                                <p className="font-medium text-neutral-900">
                                    Na terapia, trabalhamos para:
                                </p>
                                <ul className="space-y-3 ml-4">
                                    {[
                                        "Identificar os fatores que levaram ao esgotamento",
                                        "Desenvolver estratégias de autocuidado e limites",
                                        "Ressignificar sua relação com o trabalho",
                                        "Reconstruir sua energia e motivação",
                                        "Prevenir recaídas no futuro",
                                    ].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
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
                        Recupere seu equilíbrio
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Você não precisa chegar ao limite. Busque ajuda e comece a
                        reconstruir sua saúde mental.
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20burnout%20e%20esgotamento"
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
