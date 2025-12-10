import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Sparkles, HandHeart, Shield, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Abordagem Winnicottiana | Psicóloga Ester Amaral - São Paulo",
    description:
        "Conheça a abordagem Winnicottiana utilizada pela Psicóloga Ester Amaral. Psicoterapia focada no acolhimento, holding e desenvolvimento do verdadeiro self.",
    keywords: [
        "abordagem Winnicottiana",
        "Winnicott psicoterapia",
        "holding psicologia",
        "verdadeiro self",
        "ambiente facilitador",
        "psicanálise Winnicott",
        "psicóloga Winnicott São Paulo",
        "teoria Winnicott",
    ],
    openGraph: {
        title: "Abordagem Winnicottiana | Psicóloga Ester Amaral",
        description:
            "Uma abordagem terapêutica focada no acolhimento, holding e desenvolvimento do verdadeiro self.",
    },
};

const conceitos = [
    {
        icon: HandHeart,
        title: "Holding (Sustentação)",
        description:
            "Assim como uma mãe sustenta seu bebê, o terapeuta oferece uma sustentação emocional que permite ao paciente sentir-se seguro para explorar suas emoções mais profundas.",
    },
    {
        icon: Shield,
        title: "Ambiente Facilitador",
        description:
            "A terapia cria um ambiente seguro, confiável e livre de julgamentos, onde o paciente pode ser autêntico e desenvolver-se emocionalmente.",
    },
    {
        icon: Sparkles,
        title: "Criatividade e Espontaneidade",
        description:
            "O objetivo não é apenas aliviar sintomas, mas resgatar a capacidade de viver de forma criativa e espontânea, reconectando-se com o prazer de existir.",
    },
    {
        icon: Heart,
        title: "Verdadeiro Self",
        description:
            "Trabalhamos para que você possa deixar de lado as máscaras e defesas, permitindo que seu verdadeiro eu emerja e se desenvolva.",
    },
];

export default function AbordagemPage() {
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
                                Minha Abordagem
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
                                A Perspectiva{" "}
                                <span className="text-gradient">Winnicottiana</span>
                            </h1>
                            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                                A teoria de Donald Winnicott, psicanalista britânico, é a base
                                do meu trabalho. Ela valoriza o ambiente emocional, a relação
                                terapêutica e a capacidade de ser verdadeiro consigo mesmo.
                            </p>
                            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                                Diferente de abordagens focadas apenas em sintomas, a
                                perspectiva Winnicottiana busca compreender suas experiências
                                de vida, seus padrões de relacionamento e ajudá-lo a
                                desenvolver um sentimento mais autêntico de si mesmo.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20abordagem%20Winnicottiana"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:shadow-xl hover:-translate-y-1"
                                >
                                    <Phone size={20} />
                                    Agendar Consulta
                                </Link>
                                <Link
                                    href="/sobre"
                                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 px-8 py-4 rounded-full font-bold text-base border border-neutral-200 transition-all"
                                >
                                    Sobre a Ester
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/Ester Amaral Psicologa clinica para mulheres_v3.png"
                                    alt="Psicóloga Ester Amaral - Abordagem Winnicottiana"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conceitos Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Conceitos Fundamentais
                        </h2>
                        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                            A teoria Winnicottiana traz conceitos únicos que orientam o
                            trabalho terapêutico.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {conceitos.map((item) => (
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

            {/* Na Prática Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                                Como Isso Funciona na Prática?
                            </h2>
                        </div>

                        <div className="bg-white rounded-3xl p-8 md:p-12">
                            <div className="space-y-6 text-neutral-600 leading-relaxed">
                                <p>
                                    Na prática, a abordagem Winnicottiana significa que você
                                    encontrará um espaço de acolhimento genuíno, onde não há
                                    pressa para "resolver problemas" ou atingir metas fixas.
                                </p>
                                <p>
                                    O ritmo da terapia respeita seu processo individual. Não há
                                    julgamentos sobre o que você sente ou pensa - apenas escuta
                                    e compreensão.
                                </p>
                                <p className="font-medium text-neutral-900">
                                    O que você pode esperar:
                                </p>
                                <ul className="space-y-3 ml-4">
                                    {[
                                        "Um espaço seguro para ser você mesmo",
                                        "Respeito ao seu tempo e ritmo",
                                        "Compreensão profunda das suas experiências",
                                        "Trabalho com suas emoções, não apenas com ideias",
                                        "Foco no desenvolvimento pessoal, não apenas em sintomas",
                                        "Uma relação terapêutica baseada em confiança",
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

            {/* Quem era Winnicott */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
                            Quem foi Donald Winnicott?
                        </h2>
                        <div className="text-neutral-600 leading-relaxed space-y-4 text-left">
                            <p>
                                Donald Woods Winnicott (1896-1971) foi um pediatra e
                                psicanalista britânico que revolucionou a forma como
                                entendemos o desenvolvimento emocional humano.
                            </p>
                            <p>
                                Sua experiência como pediatra, atendendo milhares de famílias,
                                deu-lhe uma visão única sobre a importância do ambiente
                                emocional no desenvolvimento saudável. Ele cunhou conceitos
                                como "mãe suficientemente boa", "objeto transicional" e
                                "verdadeiro self/falso self".
                            </p>
                            <p>
                                Suas ideias continuam extremamente atuais e são aplicadas não
                                apenas na psicoterapia individual, mas também na compreensão
                                das relações humanas, da criatividade e da saúde mental.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Experimente uma abordagem diferente
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Se você busca uma terapia mais humanizada e profunda, vamos
                        conversar sobre como posso te ajudar.
                    </p>
                    <Link
                        href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta"
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
