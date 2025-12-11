import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Brain, Frown, Heart, Shield, ArrowRight } from "lucide-react";
import { SpecialtyFAQ } from "@/components/specialty-faq";

const faqItems = [
    {
        question: "Quanto tempo dura o tratamento para ansiedade ou depressão?",
        answer: "O tempo de tratamento varia de pessoa para pessoa. Depende da intensidade dos sintomas, da sua história e de como você responde à terapia. O importante é respeitar seu ritmo.",
    },
    {
        question: "Preciso tomar remédio junto com a terapia?",
        answer: "Nem sempre. A medicação pode ser necessária em alguns casos, e essa decisão é sempre tomada em conjunto com um psiquiatra. A terapia complementa e potencializa o tratamento.",
    },
    {
        question: "Como saber se o que sinto é ansiedade ou depressão?",
        answer: "Ansiedade e depressão podem coexistir. Na terapia, ajudo você a compreender o que está sentindo e a identificar os sintomas específicos do seu caso.",
    },
    {
        question: "A terapia online funciona para ansiedade e depressão?",
        answer: "Sim! Estudos mostram que a terapia online é tão eficaz quanto a presencial. O mais importante é você se sentir confortável e comprometido com o processo.",
    },
    {
        question: "Estou em crise, vocês fazem atendimento emergencial?",
        answer: "Se você está em crise, o ideal é buscar um CAPS ou pronto-socorro psiquiátrico. Para acompanhamento contínuo, agende uma sessão e começaremos seu tratamento.",
    },
];

export const metadata: Metadata = {
    title: "Ansiedade e Depressão | Psicóloga Ester Amaral - São Paulo",
    description:
        "Tratamento psicológico para ansiedade e depressão em São Paulo. Psicoterapia com abordagem acolhedora e humanizada. Atendimento presencial e online.",
    keywords: [
        "psicóloga ansiedade",
        "psicóloga depressão",
        "tratamento ansiedade São Paulo",
        "tratamento depressão SP",
        "terapia para ansiedade",
        "psicoterapia depressão",
        "transtorno de ansiedade",
        "psicóloga online ansiedade",
    ],
    openGraph: {
        title: "Ansiedade e Depressão | Psicóloga Ester Amaral",
        description:
            "Tratamento especializado para ansiedade e depressão. Psicoterapia humanizada em São Paulo e online.",
    },
};

const sintomasAnsiedade = [
    "Preocupação excessiva e constante",
    "Dificuldade para relaxar ou desligar a mente",
    "Sensação de que algo ruim vai acontecer",
    "Coração acelerado, sudorese, tremores",
    "Dificuldade para dormir",
    "Irritabilidade e inquietação",
];

const sintomasDepressao = [
    "Tristeza persistente e vazio emocional",
    "Perda de interesse em atividades que gostava",
    "Alterações no sono e apetite",
    "Cansaço e falta de energia constantes",
    "Dificuldade de concentração",
    "Sentimentos de culpa ou inutilidade",
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer,
        },
    })),
};

export default function AnsiedadeDepressaoPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
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
                                Ansiedade e{" "}
                                <span className="text-gradient">Depressão</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                A ansiedade e a depressão são condições que afetam milhões de
                                pessoas e podem impactar profundamente a qualidade de vida.
                                Mas saiba que existe ajuda e é possível melhorar.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Na terapia, trabalhamos juntos para compreender suas emoções,
                                identificar padrões de pensamento e desenvolver recursos para
                                lidar com esses desafios de forma mais saudável.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20ansiedade%20e%20depress%C3%A3o"
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
                                    alt="Psicóloga Ester Amaral - Tratamento para Ansiedade e Depressão"
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
                            Reconhecendo os Sinais
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Identificar os sintomas é o primeiro passo para buscar ajuda.
                            Você se identifica com algum desses sinais?
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Ansiedade */}
                        <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center">
                                    <Brain size={28} className="text-terracotta-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900">
                                    Ansiedade
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {sintomasAnsiedade.map((sintoma) => (
                                    <li key={sintoma} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                        <span className="text-neutral-600">{sintoma}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Depressão */}
                        <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center">
                                    <Frown size={28} className="text-terracotta-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-neutral-900">
                                    Depressão
                                </h3>
                            </div>
                            <ul className="space-y-3">
                                {sintomasDepressao.map((sintoma) => (
                                    <li key={sintoma} className="flex items-start gap-3">
                                        <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                        <span className="text-neutral-600">{sintoma}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Como a Terapia Ajuda */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                                Como a Terapia Pode Ajudar
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center mx-auto mb-4">
                                    <Heart size={24} className="text-terracotta-600" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">
                                    Acolhimento
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    Um espaço seguro e sem julgamentos para expressar o que você
                                    sente.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center mx-auto mb-4">
                                    <Brain size={24} className="text-terracotta-600" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">
                                    Compreensão
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    Entender as raízes da sua ansiedade ou depressão e seus
                                    padrões emocionais.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 text-center">
                                <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center mx-auto mb-4">
                                    <Shield size={24} className="text-terracotta-600" />
                                </div>
                                <h3 className="font-bold text-neutral-900 mb-2">
                                    Recursos Internos
                                </h3>
                                <p className="text-sm text-neutral-600">
                                    Desenvolver ferramentas para lidar com os desafios de forma
                                    mais saudável.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <SpecialtyFAQ
                title="Perguntas sobre Ansiedade e Depressão"
                subtitle="Dúvidas frequentes sobre o tratamento psicológico."
                items={faqItems}
            />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Você não precisa enfrentar isso sozinho
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Buscar ajuda é um ato de coragem. Agende uma conversa e dê o
                        primeiro passo para se sentir melhor.
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20ansiedade%20e%20depress%C3%A3o"
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
