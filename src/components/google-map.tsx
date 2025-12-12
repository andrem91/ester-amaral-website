"use client";

import { useState } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import { ADDRESS } from "@/lib/constants";

const MAPS_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.771307045542!2d-46.67329752378589!3d-23.64835976479594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5100a8b62c41%3A0xc39e5a9bed3d8edb!2sPsic%C3%B3loga%20Ester%20Amaral%20-%20Presencial%20e%20Online!5e0!3m2!1spt-BR!2sbr!4v1765307951166!5m2!1spt-BR!2sbr";

const MAPS_LINK =
    "https://www.google.com/maps/place/Psic%C3%B3loga+Ester+Amaral+-+Presencial+e+Online/@-23.6483598,-46.6732975,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5100a8b62c41:0xc39e5a9bed3d8edb!8m2!3d-23.6483598!4d-46.6707226!16s%2Fg%2F11wqbybctf?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D";

export function GoogleMap() {
    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        return (
            <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-100 bg-neutral-100">
                <div className="flex flex-col items-center justify-center h-[350px] gap-4 p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-terracotta-100 flex items-center justify-center">
                        <MapPin size={32} className="text-terracotta-600" />
                    </div>
                    <div>
                        <p className="font-semibold text-neutral-900 mb-1">
                            Localização do Consultório
                        </p>
                        <p className="text-sm text-neutral-600">
                            {ADDRESS.shortAddress}
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 mt-2">
                        <button
                            onClick={() => setLoaded(true)}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-white font-semibold text-sm transition-colors cursor-pointer"
                        >
                            <MapPin size={18} />
                            Carregar Mapa
                        </button>
                        <a
                            href={MAPS_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-700 font-semibold text-sm border border-neutral-200 transition-colors"
                        >
                            <ExternalLink size={18} />
                            Abrir no Google Maps
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-100">
            <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório da Psicóloga Ester Amaral"
                className="w-full"
            />
        </div>
    );
}
