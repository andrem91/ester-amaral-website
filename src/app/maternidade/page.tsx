import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Baby, Heart, Users, Sparkles, ArrowRight } from "lucide-react";
import { SpecialtyFAQ } from "@/components/specialty-faq";

export const metadata: Metadata = {
    title: "Maternidade e Puerpério | Psicóloga Ester Amaral - São Paulo",
    description:
        "Psicoterapia especializada em maternidade, puerpério e parentalidade. Acolhimento para gestantes e mães em todas as fases. Atendimento presencial em SP e online.",
    keywords: [
        "psicóloga maternidade",
        "psicóloga puerpério",
        "terapia para mães",
        "psicóloga para gestantes",
        "psicóloga parentalidade",
        "depressão pós-parto",
        "ansiedade materna",
        "psicóloga São Paulo",
    ],
    openGraph: {
        title: "Maternidade e Puerpério | Psicóloga Ester Amaral",
        description:
            "Psicoterapia especializada para gestantes, mães e puérperas. Acolhimento em todas as fases da maternidade.",
    },
};

const topicos = [
    {
        icon: Baby,
        title: "Puerpério e Pós-Parto",
        description:
            "Acompanhamento para o período pós-parto, incluindo blues puerperal, adaptação à nova rotina e desafios emocionais dessa fase intensa.",
    },
    {
        icon: Heart,
        title: "Ambivalência Materna",
        description:
            "Espaço seguro para falar sobre os sentimentos contraditórios da maternidade, sem julgamentos. É normal sentir amor e exaustão ao mesmo tempo.",
    },
    {
        icon: Users,
        title: "Parentalidade",
        description:
            "Suporte para pais e mães na construção de relações saudáveis com os filhos, lidando com desafios cotidianos e questões educacionais.",
    },
    {
        icon: Sparkles,
        title: "Gestação",
        description:
            "Acompanhamento psicológico durante a gravidez, preparação emocional para a chegada do bebê e elaboração de expectativas.",
    },
];

const faqItems = [
    {
        question: "Quando devo procurar ajuda psicológica na maternidade?",
        answer: "Sempre que sentir que precisa de apoio. Não é necessário estar em crise para buscar terapia. Se você está se sentindo sobrecarregada, ansiosa, com dificuldade de conexão com o bebê ou simplesmente precisa de um espaço para falar, a terapia pode ajudar.",
    },
    {
        question: "Você atende gestantes?",
        answer: "Sim! O acompanhamento psicológico durante a gestação é muito valioso. Trabalhamos questões como medos, expectativas, preparação emocional para a chegada do bebê e mudanças na identidade e nos relacionamentos.",
    },
    {
        question: "Como funciona a terapia no puerpério com bebê pequeno?",
        answer: "Entendo as limitações dessa fase. Oferecemos flexibilidade de horários e atendimento online, facilitando o acesso à terapia mesmo com um recém-nascido em casa. Se necessário, o bebê pode estar presente na sessão.",
    },
    {
        question: "É normal sentir arrependimento ou ambivalência na maternidade?",
        answer: "Sim, é mais comum do que você imagina. Muitas mães sentem sentimentos contraditórios, e isso não significa que você não ama seu filho. Na terapia, criamos um espaço seguro para falar sobre esses sentimentos sem julgamento.",
    },
    {
        question: "Atende casos de depressão pós-parto?",
        answer: "Sim. A depressão pós-parto requer atenção especializada. Trabalho em parceria com psiquiatras quando necessário, garantindo um acompanhamento completo e seguro.",
    },
];

export default function MaternidadePage() {
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
                                Maternidade e{" "}
                                <span className="text-gradient">Puerpério</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                A maternidade é uma das experiências mais intensas e
                                transformadoras da vida. Se você está enfrentando desafios
                                emocionais nessa jornada, saiba que não precisa passar por isso
                                sozinha.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Ofereço um espaço de acolhimento para gestantes, mães e
                                puérperas, onde você pode falar sobre suas dificuldades,
                                medos, frustrações e também sobre as alegrias da maternidade.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20maternidade"
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
                                    alt="Psicóloga Ester Amaral - Especialista em Maternidade"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tópicos Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Como Posso Te Ajudar
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            Trabalho com diversas questões relacionadas à maternidade,
                            sempre com acolhimento e respeito ao seu tempo.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {topicos.map((item) => (
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

            {/* Sintomas Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                            Você Não Está Sozinha
                        </h2>
                        <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                            Muitas mulheres vivenciam desafios emocionais na maternidade,
                            mas nem sempre falam sobre isso. Alguns sinais de que você pode
                            se beneficiar de acompanhamento psicológico:
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {[
                                "Sentimento de culpa frequente",
                                "Dificuldade de se conectar com o bebê",
                                "Choro fácil e irritabilidade",
                                "Sensação de não ser boa mãe",
                                "Medo intenso de algo acontecer com o bebê",
                                "Exaustão que vai além do cansaço físico",
                                "Perda de interesse em atividades que gostava",
                                "Solidão mesmo estando acompanhada",
                            ].map((sintoma) => (
                                <div
                                    key={sintoma}
                                    className="flex items-start gap-3 bg-white rounded-xl p-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-terracotta-500 mt-2 flex-shrink-0" />
                                    <span className="text-neutral-700">{sintoma}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <SpecialtyFAQ
                title="Perguntas sobre Maternidade"
                subtitle="Dúvidas frequentes sobre o acompanhamento psicológico para mães e gestantes."
                items={faqItems}
            />

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Vamos conversar sobre sua jornada?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        A maternidade não precisa ser vivida em silêncio. Agende uma
                        conversa e descubra como a terapia pode te apoiar.
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20maternidade"
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

