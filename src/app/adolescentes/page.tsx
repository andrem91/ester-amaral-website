import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, User, Brain, Shield, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Psicóloga para Adolescentes | Ester Amaral - São Paulo",
    description:
        "Psicoterapia especializada para adolescentes em São Paulo. Atendimento acolhedor para questões de identidade, ansiedade, relacionamentos e autoestima. Presencial e online.",
    keywords: [
        "psicóloga adolescentes",
        "terapia para adolescentes",
        "psicóloga jovens",
        "psicólogo adolescente São Paulo",
        "ansiedade adolescente",
        "depressão adolescente",
        "terapia juvenil",
        "psicóloga online adolescente",
    ],
    openGraph: {
        title: "Psicóloga para Adolescentes | Ester Amaral",
        description:
            "Psicoterapia especializada para adolescentes. Atendimento acolhedor em São Paulo e online.",
    },
};

const temas = [
    {
        icon: User,
        title: "Identidade e Autoconhecimento",
        description:
            "Suporte para as questões de identidade típicas da adolescência: Quem sou eu? O que quero? Onde me encaixo?",
    },
    {
        icon: Brain,
        title: "Ansiedade e Pressões",
        description:
            "Ajuda para lidar com a ansiedade escolar, vestibular, pressões sociais e expectativas familiares.",
    },
    {
        icon: Shield,
        title: "Autoestima e Imagem Corporal",
        description:
            "Trabalho com questões de autoestima, aceitação do corpo e construção de uma autoimagem saudável.",
    },
    {
        icon: MessageCircle,
        title: "Relacionamentos e Conflitos",
        description:
            "Suporte para dificuldades com amizades, namoros, família e conflitos geracionais.",
    },
];

export default function AdolescentesPage() {
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
                                Terapia para{" "}
                                <span className="text-gradient">Adolescentes</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                A adolescência é uma fase de intensas transformações físicas,
                                emocionais e sociais. É natural que surjam dúvidas, conflitos
                                e dificuldades durante esse período.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Ofereço um espaço acolhedor e sem julgamentos, onde o
                                adolescente pode falar sobre suas questões, ser ouvido e
                                desenvolver recursos para lidar com os desafios dessa fase.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20para%20adolescente"
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
                                    src="/image/Ester Amaral Psicologa clinica para mulheres_v3.png"
                                    alt="Psicóloga Ester Amaral - Atendimento para Adolescentes"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Temas Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Temas Frequentes na Adolescência
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            A terapia pode ajudar o adolescente a lidar com diversos
                            desafios dessa fase da vida.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {temas.map((item) => (
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

            {/* Para Pais Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                                Para Pais e Responsáveis
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12">
                            <div className="space-y-6 text-neutral-600 leading-relaxed">
                                <p>
                                    Às vezes, percebemos que nosso filho está passando por
                                    dificuldades, mas não sabemos como ajudar. A terapia pode ser
                                    um recurso valioso para o adolescente e também um apoio para
                                    vocês, pais.
                                </p>
                                <p className="font-medium text-neutral-900">
                                    Sinais de que seu filho pode se beneficiar da terapia:
                                </p>
                                <ul className="space-y-3 ml-4">
                                    {[
                                        "Mudanças bruscas de comportamento ou humor",
                                        "Isolamento social ou dificuldades de relacionamento",
                                        "Queda no rendimento escolar",
                                        "Alterações no sono ou apetite",
                                        "Expressões de tristeza, ansiedade ou irritabilidade frequentes",
                                        "Dificuldade de comunicação em casa",
                                    ].map((sinal) => (
                                        <li key={sinal} className="flex items-start gap-3">
                                            <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                            <span>{sinal}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p>
                                    A primeira conversa pode ser feita com os pais para
                                    entendermos a situação antes de iniciar o atendimento com o
                                    adolescente.
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
                        Vamos ajudar seu filho nessa fase?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Entre em contato para uma conversa inicial. Juntos, podemos
                        entender como a terapia pode apoiar o adolescente.
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20para%20adolescente"
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
