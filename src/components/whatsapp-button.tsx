"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Psic%C3%B3loga%20Ester%20Amaral"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Agendar consulta pelo WhatsApp"
        >
            {/* Pulse ring */}
            <motion.span
                className="absolute inset-0 rounded-full bg-green-500"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Button */}
            <motion.div
                className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg shadow-green-500/30 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Icon only on mobile */}
                <div className="flex items-center justify-center w-14 h-14 md:w-auto md:h-auto md:py-4 md:pl-5 md:pr-6">
                    <MessageCircle size={24} className="flex-shrink-0" />
                    <span className="hidden md:inline ml-2 font-semibold text-sm whitespace-nowrap">
                        Conversar
                    </span>
                </div>
            </motion.div>

            {/* Tooltip on mobile */}
            <motion.div
                className="absolute bottom-full right-0 mb-2 md:hidden"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
            >
                <div className="bg-neutral-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                    Fale conosco no WhatsApp
                    <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-900" />
                </div>
            </motion.div>
        </Link>
    );
}
