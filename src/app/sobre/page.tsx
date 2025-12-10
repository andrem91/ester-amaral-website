import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, GraduationCap, Heart, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Sobre Ester Amaral | Psicóloga Clínica em São Paulo",
    description:
        "Conheça a Psicóloga Ester Amaral. Especialista em psicoterapia com abordagem Winnicottiana, atendendo mulheres, mães e adolescentes em São Paulo e Online.",
    openGraph: {
        title: "Sobre Ester Amaral | Psicóloga Clínica",
        description:
            "Conheça a trajetória e formação da Psicóloga Ester Amaral. Atendimento especializado com abordagem Winnicottiana.",
    },
};

export default function SobrePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-terracotta-50 to-white overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta-100/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-terracotta-100/30 to-transparent rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Image */}
                        <div className="relative order-1 lg:order-1">
                            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/image/Ester Amaral Psicologa clinica para mulheres_v3.png"
                                    alt="Psicóloga Ester Amaral"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-2 lg:order-2">
                            <span className="inline-block px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-6">
                                Psicóloga Clínica • CRP 06/204114
                            </span>
                            <h1 className="text-4xl md:text-5xl font-black text-neutral-900 leading-tight mb-6">
                                Olá, sou a <span className="text-gradient">Ester Amaral</span>
                            </h1>
                            <div className="space-y-4 text-neutral-600 leading-relaxed text-lg">
                                <p>
                                    Sou Psicóloga Clínica formada com especialização em abordagem
                                    Winnicottiana. Meu trabalho é focado em acolher e auxiliar no
                                    desenvolvimento emocional de cada pessoa, respeitando seu
                                    tempo e suas particularidades.
                                </p>
                                <p>
                                    Atendo mulheres, mães, adolescentes e homens que buscam um
                                    espaço seguro para lidar com suas questões emocionais. Também
                                    tenho interesse especial em atendimento infantil.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Formação Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                            Formação
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
                            Qualificação Acadêmica e Profissional
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                            <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                                <GraduationCap size={28} className="text-terracotta-600" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                Graduação
                            </h3>
                            <p className="text-neutral-600">
                                Bacharel em Psicologia com formação clínica completa
                            </p>
                        </div>

                        <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                            <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                                <Award size={28} className="text-terracotta-600" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                Especialização
                            </h3>
                            <p className="text-neutral-600">
                                Especialização em Psicoterapia com abordagem Winnicottiana
                            </p>
                        </div>

                        <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 md:col-span-2 lg:col-span-1">
                            <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                                <Heart size={28} className="text-terracotta-600" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-3">
                                Registro Profissional
                            </h3>
                            <p className="text-neutral-600">
                                CRP 06/204114 - Conselho Regional de Psicologia de São Paulo
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filosofia Section */}
            <section className="py-20 bg-terracotta-50">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                                Minha Filosofia
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
                                Uma Abordagem Humanizada
                            </h2>
                            <div className="space-y-4 text-neutral-600 leading-relaxed">
                                <p>
                                    Acredito que a terapia é uma jornada de autoconhecimento e
                                    crescimento, onde você pode se reconectar com seu verdadeiro
                                    eu. Não é sobre "consertar" algo que está quebrado, mas sobre
                                    desenvolver recursos internos para lidar com os desafios da
                                    vida.
                                </p>
                                <p>
                                    A abordagem Winnicottiana, que guia meu trabalho, valoriza o
                                    ambiente facilitador e o "holding" (sustentação emocional). Na
                                    terapia, ofereço um espaço seguro onde você pode explorar seus
                                    sentimentos sem julgamentos.
                                </p>
                                <p>
                                    O foco não é apenas aliviar sintomas, mas resgatar a
                                    espontaneidade e a criatividade no viver. A terapia se torna
                                    um espaço lúdico e seguro onde é possível integrar
                                    experiências e desenvolver um sentimento de realidade pessoal.
                                </p>
                            </div>
                        </div>

                        <div className="relative aspect-square max-w-md mx-auto rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/image/Ester-Amaral-Psicóloga-para-mulheres_01.jpg"
                                alt="Ambiente terapêutico acolhedor"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Vamos iniciar essa jornada juntos?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                        Agende uma primeira conversa e entenda como a psicoterapia pode te
                        ajudar neste momento.
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
