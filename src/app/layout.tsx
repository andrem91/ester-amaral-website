import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ScrollToTop } from "@/components/scroll-to-top";

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
    google: "adicione-seu-codigo-aqui",
  },
};

// Schema.org JSON-LD for Local Business (Psychology Practice)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "@id": "https://psicologaesteramaral.com.br",
  name: "Psicóloga Ester Amaral",
  description:
    "Psicóloga Clínica com abordagem Winnicottiana. Atendimento especializado em maternidade, ansiedade, depressão, luto e autoconhecimento.",
  url: "https://psicologaesteramaral.com.br",
  telephone: "+55 11 98840-5439",
  email: "contato@psicologaesteramaral.com.br",
  image: "https://psicologaesteramaral.com.br/image/Ester Amaral Psicologa clinica para mulheres_v3.png",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. dos Cafezais, 363",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    postalCode: "04364-000",
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
    "https://www.instagram.com/psicologaesteramaral/",
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
      </body>
    </html>
  );
}
