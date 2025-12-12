"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Instagram, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, WHATSAPP } from "@/lib/constants";

const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Mim" },
    { href: "/servicos", label: "Serviços" },
    { href: "/abordagem", label: "Abordagem" },
    { href: "/contato", label: "Contato" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 md:w-12 md:h-12">
                            <Image
                                src="/image/EA-Simbolo 2.png"
                                alt="Logo Ester Amaral"
                                fill
                                className="object-contain"
                                sizes="48px"
                            />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-base md:text-lg font-bold text-neutral-800 group-hover:text-terracotta-600 transition-colors">
                                Psicóloga Ester Amaral
                            </p>
                            <p className="text-xs text-neutral-500">CRP 06/204114</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-neutral-600 hover:text-terracotta-600 transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-500 transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href={WHATSAPP.linkAgendamento}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all hover:shadow-lg hover:shadow-terracotta-500/25 hover:-translate-y-0.5"
                        >
                            <Phone size={16} />
                            Conversar no WhatsApp
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 text-neutral-600 hover:text-terracotta-600 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Enhanced */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white border-t border-neutral-100"
                    >
                        <div className="container mx-auto px-4 py-6">
                            {/* Profile Section */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-4 pb-6 mb-4 border-b border-neutral-100"
                            >
                                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-terracotta-200">
                                    <Image
                                        src="/image/Ester_amaral_redonda.png"
                                        alt="Psicóloga Ester Amaral"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-neutral-900">Ester Amaral</p>
                                    <p className="text-sm text-neutral-500">Psicóloga Clínica</p>
                                    <p className="text-xs text-terracotta-600">CRP 06/204114</p>
                                </div>
                            </motion.div>

                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.08 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="flex items-center py-3 px-4 text-lg font-medium text-neutral-700 hover:text-terracotta-600 hover:bg-terracotta-50 rounded-xl transition-all"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Social Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center justify-center gap-4 py-6 mt-4 border-t border-neutral-100"
                            >
                                <Link
                                    href={CONTACT.instagramUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-terracotta-100 flex items-center justify-center text-neutral-600 hover:text-terracotta-600 transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={22} />
                                </Link>
                                <Link
                                    href={`mailto:${CONTACT.email}`}
                                    className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-terracotta-100 flex items-center justify-center text-neutral-600 hover:text-terracotta-600 transition-all"
                                    aria-label="Email"
                                >
                                    <Mail size={22} />
                                </Link>
                                <Link
                                    href={WHATSAPP.baseUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-neutral-100 hover:bg-terracotta-100 flex items-center justify-center text-neutral-600 hover:text-terracotta-600 transition-all"
                                    aria-label="WhatsApp"
                                >
                                    <Phone size={22} />
                                </Link>
                            </motion.div>

                            {/* CTA Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Link
                                    href={WHATSAPP.linkAgendamento}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-terracotta-500/20"
                                >
                                    <Phone size={18} />
                                    Conversar no WhatsApp
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
