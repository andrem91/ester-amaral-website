"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
    {
        question: "Como funciona a primeira sessão?",
        answer:
            "A primeira sessão é um momento de conhecimento mútuo. Você poderá falar sobre suas questões, expectativas e tirar dúvidas sobre o processo terapêutico. É um espaço seguro e acolhedor para você se sentir à vontade.",
    },
    {
        question: "Qual o valor da sessão?",
        answer:
            "O valor da sessão é conversado individualmente, levando em consideração a modalidade de atendimento (presencial ou online) e a frequência. Entre em contato para mais informações.",
    },
    {
        question: "Você atende por convênio?",
        answer:
            "Não atendo diretamente por convênio, mas emito recibo para reembolso. Muitos planos de saúde oferecem reembolso parcial ou integral para consultas com psicólogos. Consulte seu plano para verificar essa possibilidade.",
    },
    {
        question: "Como funciona o sigilo profissional?",
        answer:
            "O sigilo é um pilar fundamental da psicoterapia e está previsto no Código de Ética do Psicólogo. Tudo o que for conversado durante as sessões é estritamente confidencial.",
    },
    {
        question: "Qual a duração e frequência das sessões?",
        answer:
            "As sessões têm duração de 50 minutos. A frequência é combinada de acordo com as necessidades de cada pessoa, sendo mais comum o atendimento semanal.",
    },
    {
        question: "Como funciona o atendimento online?",
        answer:
            "O atendimento online acontece por videochamada em plataforma segura. Funciona da mesma forma que o presencial, com a praticidade de você poder estar em qualquer lugar com internet estável e privacidade.",
    },
    {
        question: "O que é a abordagem Winnicottiana?",
        answer:
            "É uma abordagem psicanalítica que foca no cuidado, no ambiente facilitador e no desenvolvimento da criatividade e espontaneidade. Buscamos resgatar o seu 'verdadeiro self' através de uma relação terapêutica segura e confiável.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                        Dúvidas Frequentes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
                        Perguntas e Respostas
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        Tire suas principais dúvidas sobre o atendimento psicológico.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-neutral-100 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                            >
                                <span className="font-semibold text-neutral-900 pr-4">
                                    {item.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown
                                        size={20}
                                        className="text-terracotta-500"
                                    />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-neutral-600 leading-relaxed">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
