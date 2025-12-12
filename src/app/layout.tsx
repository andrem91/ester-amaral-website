import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics, MicrosoftClarity } from "@/components/analytics";
import { CONTACT, ADDRESS, SITE } from "@/lib/constants";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psicologaesteramaral.com.br"),
  title: "Psicóloga Ester Amaral | Psicoterapia Clínica em São Paulo",
  description:
    "Psicóloga Clínica CRP 06/204114 com abordagem Winnicottiana. Atendimento especializado em maternidade, ansiedade, depressão, luto e autoconhecimento. Presencial em SP e Online.",
  keywords: [
    "psicóloga",
    "psicoterapia",
    "psicóloga São Paulo",
    "ansiedade",
    "depressão",
    "maternidade",
    "luto",
    "terapia online",
    "Winnicott",
    "psicóloga para mulheres",
  ],
  authors: [{ name: "Ester Amaral" }],
  creator: "Ester Amaral",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://psicologaesteramaral.com.br",
    siteName: "Psicóloga Ester Amaral",
    title: "Psicóloga Ester Amaral | Acolhimento, Crescimento e Tranquilidade",
    description:
      "Psicoterapia com abordagem Winnicottiana. Um espaço seguro para seu desenvolvimento pessoal e bem-estar emocional.",
    images: [
      {
        url: "/image/Ester Amaral Psicologa clinica para mulheres_v3.png",
        width: 1200,
        height: 630,
        alt: "Psicóloga Ester Amaral - Psicoterapia Clínica",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Ester Amaral | Psicoterapia Clínica",
    description: "Psicoterapia com abordagem Winnicottiana em São Paulo e Online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "1Adz2Xw4A4I0N7i7Xkaj1K9ZvTd3PdrKxiT7cSQd_Mw",
  },
};

// Schema.org JSON-LD for Local Business (Psychology Practice)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": SITE.url,
  name: SITE.name,
  description:
    "Psicóloga Clínica com abordagem Winnicottiana. Atendimento especializado em maternidade, ansiedade, depressão, luto e autoconhecimento.",
  url: SITE.url,
  telephone: `+55 ${CONTACT.phoneFormatted}`,
  email: CONTACT.email,
  image: `${SITE.url}/image/Ester Amaral Psicologa clinica para mulheres_v3.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.648360,
    longitude: -46.670775,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    CONTACT.instagramUrl,
  ],
  medicalSpecialty: [
    "Psychology",
    "Psychotherapy",
    "Clinical Psychology",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Psicoterapia Individual",
      description: "Atendimento psicológico individual com abordagem Winnicottiana",
    },
    {
      "@type": "MedicalProcedure",
      name: "Terapia Online",
      description: "Atendimento psicológico por videochamada",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "15",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={manrope.variable}>
      <head>
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics />
        <MicrosoftClarity />
      </body>
    </html>
  );
}
