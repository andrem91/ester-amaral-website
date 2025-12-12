"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { trackEvent } from "@/lib/track-event";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [honeypot, setHoneypot] = useState(""); // Campo armadilha anti-spam
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-spam: se honeypot estiver preenchido, é bot
        if (honeypot) {
            // Simula sucesso para não alertar o bot
            setStatus("success");
            return;
        }

        setStatus("loading");

        // Send data to API
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Erro ao enviar");

            // Track successful form submission
            trackEvent("form_submit", { form_name: "contact_form" });

            setStatus("success");
            setFormData({ name: "", email: "", phone: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="formulario" className="py-20 bg-neutral-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-terracotta-600 font-bold tracking-widest uppercase text-sm">
                            Entre em Contato
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6">
                            Envie uma mensagem
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-6">
                            Prefere um contato inicial por e-mail? Preencha o formulário ao lado
                            e entrarei em contato em até 24 horas úteis.
                        </p>
                        <div className="space-y-4 text-neutral-600">
                            <p className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                                <span>Resposta em até 24 horas úteis</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                                <span>Sigilo absoluto em todas as comunicações</span>
                            </p>
                            <p className="flex items-start gap-3">
                                <CheckCircle size={20} className="text-terracotta-500 mt-0.5 flex-shrink-0" />
                                <span>Sem compromisso de agendamento</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white rounded-3xl p-8 shadow-xl shadow-neutral-900/5 border border-neutral-100"
                        >
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={32} className="text-green-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                                        Mensagem enviada!
                                    </h3>
                                    <p className="text-neutral-600">
                                        Entrarei em contato em breve. Obrigada!
                                    </p>
                                </motion.div>
                            ) : (
                                <>
                                    {/* Honeypot - Campo invisível anti-spam */}
                                    <div
                                        aria-hidden="true"
                                        style={{
                                            position: "absolute",
                                            left: "-9999px",
                                            top: "-9999px",
                                        }}
                                    >
                                        <label htmlFor="website">Website</label>
                                        <input
                                            type="text"
                                            id="website"
                                            name="website"
                                            value={honeypot}
                                            onChange={(e) => setHoneypot(e.target.value)}
                                            tabIndex={-1}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div className="space-y-5">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-medium text-neutral-700 mb-2"
                                            >
                                                Nome completo
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all text-neutral-900"
                                                placeholder="Seu nome"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-neutral-700 mb-2"
                                            >
                                                E-mail
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all text-neutral-900"
                                                placeholder="seu@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-neutral-700 mb-2"
                                            >
                                                Telefone (opcional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all text-neutral-900"
                                                placeholder="(11) 99999-9999"
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="message"
                                                className="block text-sm font-medium text-neutral-700 mb-2"
                                            >
                                                Mensagem
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                rows={4}
                                                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-terracotta-500 focus:ring-2 focus:ring-terracotta-500/20 outline-none transition-all resize-none text-neutral-900"
                                                placeholder="Como posso te ajudar?"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full mt-6 flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-terracotta-300 text-white px-6 py-4 rounded-xl font-semibold transition-all"
                                    >
                                        {status === "loading" ? (
                                            <>
                                                <Loader2 size={20} className="animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            <>
                                                <Send size={20} />
                                                Enviar Mensagem
                                            </>
                                        )}
                                    </button>

                                    {status === "error" && (
                                        <p className="text-red-500 text-sm text-center mt-4">
                                            Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.
                                        </p>
                                    )}
                                </>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
