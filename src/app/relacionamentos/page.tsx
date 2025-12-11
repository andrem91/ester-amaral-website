import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, HeartHandshake, Heart, Users, MessageCircle, ArrowRight } from "lucide-react";
import { SpecialtyFAQ } from "@/components/specialty-faq";

const faqItems = [
    {
        question: "A terapia ajuda com dependência emocional?",
        answer: "Sim! Trabalhamos para você compreender os padrões que levam à dependência emocional, fortalecendo sua autoestima e capacidade de estabelecer relações mais saudáveis.",
    },
    {
        question: "Preciso estar em um relacionamento para fazer terapia?",
        answer: "Não! Trabalhamos tanto questões de relacionamentos atuais quanto padrões que se repetem, dificuldades em iniciar relacionamentos ou elaborar términos.",
    },
    {
        question: "Você faz terapia de casal?",
        answer: "Meu foco é no atendimento individual, onde trabalhamos suas questões relacionais. Para terapia de casal, específica, posso indicar profissionais especializados.",
    },
    {
        question: "Por que sempre me envolvo com pessoas erradas?",
        answer: "Essa é uma pergunta que muitos pacientes trazem. Geralmente envolve padrões inconscientes formados na infância. Na terapia, identificamos esses padrões e trabalhamos para transformá-los.",
    },
];

export const metadata: Metadata = {
    title: "Relacionamentos Afetivos | Psicóloga Ester Amaral - São Paulo",
    description:
        "Psicoterapia para relacionamentos afetivos em São Paulo. Trabalhe questões de vínculo, dependência emocional e padrões repetitivos. Atendimento presencial e online.",
    keywords: [
        "psicóloga relacionamentos",
        "terapia relacionamento",
        "dependência emocional",
        "dificuldade de vínculo",
        "padrões relacionamento",
        "psicóloga São Paulo",
        "relacionamentos tóxicos",
        "autoestima relacionamento",
    ],
    openGraph: {
        title: "Relacionamentos Afetivos | Psicóloga Ester Amaral",
        description:
            "Psicoterapia para questões de relacionamento. Compreenda seus padrões e construa relações mais saudáveis.",
    },
};

const temas = [
    {
        icon: HeartHandshake,
        title: "Padrões Repetitivos",
        description:
            "Entenda por que você atrai ou se envolve sempre com o mesmo tipo de pessoa e como quebrar esse ciclo.",
    },
    {
        icon: Heart,
        title: "Dependência Emocional",
        description:
            "Trabalhe a dificuldade de estar sozinho, o medo do abandono e a necessidade excessiva do outro.",
    },
    {
        icon: Users,
        title: "Dificuldade de Vínculo",
        description:
            "Compreenda as barreiras que impedem você de se conectar verdadeiramente com outras pessoas.",
    },
    {
        icon: MessageCircle,
        title: "Comunicação e Conflitos",
        description:
            "Desenvolva habilidades para se expressar melhor e lidar com conflitos de forma mais saudável.",
    },
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

export default function RelacionamentosPage() {
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
                                Relacionamentos{" "}
                                <span className="text-gradient">Afetivos</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                Os relacionamentos são uma parte fundamental da nossa vida e
                                podem ser fonte tanto de alegria quanto de sofrimento. Se
                                você está enfrentando dificuldades nessa área, a terapia pode
                                ajudar.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Na terapia, trabalhamos para compreender seus padrões de
                                relacionamento, sua história afetiva e como construir vínculos
                                mais saudáveis e satisfatórios.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20relacionamentos"
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
                                    alt="Psicóloga Ester Amaral - Terapia para Relacionamentos"
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
                            Temas que Trabalhamos
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Cada história é única, mas alguns temas são comuns quando falamos
                            de relacionamentos afetivos.
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

            {/* Sinais Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            Você Se Identifica?
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8">
                            Alguns sinais de que a terapia pode te ajudar com questões de
                            relacionamento:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {[
                                "Sempre se envolve com pessoas indisponíveis",
                                "Medo intenso de abandono ou rejeição",
                                "Dificuldade em confiar nas pessoas",
                                "Tendência a se anular para agradar o outro",
                                "Relacionamentos que causam mais sofrimento que alegria",
                                "Dificuldade em estabelecer limites saudáveis",
                                "Sensação de vazio quando está sozinho",
                                "Padrão de relacionamentos tóxicos ou abusivos",
                            ].map((sinal) => (
                                <div
                                    key={sinal}
                                    className="flex items-start gap-3 bg-white rounded-xl p-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                    <span className="text-neutral-700">{sinal}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <SpecialtyFAQ
                title="Perguntas sobre Relacionamentos"
                subtitle="Dúvidas frequentes sobre terapia para questões afetivas."
                items={faqItems}
            />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Construa relacionamentos mais saudáveis
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Entender sua história afetiva é o primeiro passo para transformar
                        seus relacionamentos. Vamos conversar?
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20relacionamentos"
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
