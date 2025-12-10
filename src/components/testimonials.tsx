"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        text: "A Ester tem uma escuta muito acolhedora. Me sinto segura para falar sobre qualquer assunto. A terapia tem me ajudado muito a entender meus padrões e a lidar melhor com a ansiedade.",
        author: "M.S.",
        role: "34 anos, mãe",
    },
    {
        text: "Depois de muita resistência, finalmente decidi buscar ajuda. A abordagem da Ester é leve e profunda ao mesmo tempo. Recomendo para quem busca autoconhecimento.",
        author: "C.R.",
        role: "42 anos",
    },
    {
        text: "O atendimento online funciona super bem. Mesmo à distância, consigo me sentir acolhida e à vontade. A Ester é uma profissional incrível.",
        author: "A.L.",
        role: "28 anos",
    },
    {
        text: "Estou passando por um momento difícil de luto e a terapia tem sido essencial para mim. A Ester tem muita sensibilidade para lidar com temas delicados.",
        author: "J.P.",
        role: "55 anos",
    },
];

export function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [autoPlay]);

    const next = () => {
        setAutoPlay(false);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setAutoPlay(false);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                        Depoimentos
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">
                        O que dizem sobre a terapia
                    </h2>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Testimonial Card */}
                    <div className="bg-terracotta-50 rounded-3xl p-8 md:p-12 min-h-[280px] flex flex-col justify-center relative overflow-hidden">
                        {/* Quote icon */}
                        <Quote
                            size={80}
                            className="absolute top-4 right-4 text-terracotta-200/50"
                        />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="text-center relative z-10"
                            >
                                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-8 italic">
                                    &ldquo;{testimonials[current].text}&rdquo;
                                </p>
                                <div>
                                    <p className="font-bold text-neutral-900">
                                        {testimonials[current].author}
                                    </p>
                                    <p className="text-sm text-neutral-600">
                                        {testimonials[current].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-terracotta-100 flex items-center justify-center text-neutral-600 hover:text-terracotta-600 transition-all"
                            aria-label="Depoimento anterior"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* Dots */}
                        <div className="flex items-center gap-3">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setAutoPlay(false);
                                        setCurrent(index);
                                    }}
                                    className={`relative flex items-center justify-center min-w-[44px] min-h-[44px] transition-all ${index === current
                                        ? "before:bg-terracotta-500 before:w-8 before:h-3"
                                        : "before:bg-neutral-300 hover:before:bg-neutral-400 before:w-3 before:h-3"
                                        } before:rounded-full before:transition-all`}
                                    aria-label={`Ir para depoimento ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-terracotta-100 flex items-center justify-center text-neutral-600 hover:text-terracotta-600 transition-all"
                            aria-label="Próximo depoimento"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
