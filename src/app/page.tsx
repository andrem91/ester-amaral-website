"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FAQ } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { ContactForm } from "@/components/contact-form";
import {
  Phone,
  Heart,
  Brain,
  MessageCircle,
  Sparkles,
  HandHeart,
  Shield,
  Users,
  Baby,
  HeartCrack,
  Frown,
  Scale,
  Salad,
  CircleDot,
  HeartHandshake,
  BatteryLow,
  ArrowRight,
  CheckCircle,
  MapPin,
  Video,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

// Data
const benefits = [
  {
    icon: Brain,
    title: "Autoconhecimento",
    description:
      "Compreenda seus padrões, histórias e motivações para viver de forma mais autêntica.",
  },
  {
    icon: Scale,
    title: "Equilíbrio Emocional",
    description:
      "Aprenda a lidar com seus sentimentos e conflitos internos de maneira saudável.",
  },
  {
    icon: MessageCircle,
    title: "Espaço de Escuta",
    description:
      "Um ambiente sigiloso, acolhedor e livre de julgamentos para você ser ouvido.",
  },
];

const especialidades = [
  { icon: Baby, label: "Maternidade" },
  { icon: Users, label: "Parentalidade" },
  { icon: HeartCrack, label: "Conflitos Familiares" },
  { icon: Heart, label: "Luto" },
  { icon: Frown, label: "Ansiedade e Depressão" },
  { icon: Salad, label: "Transtornos Alimentares" },
  { icon: CircleDot, label: "Autoestima e Autoconhecimento" },
  { icon: BatteryLow, label: "Sobrecarga Mental" },
  { icon: HeartHandshake, label: "Relacionamentos Afetivos" },
];

const diferenciais = [
  {
    icon: Sparkles,
    title: "Criatividade",
    description: "Resgate do sentir-se vivo e da espontaneidade no viver.",
  },
  {
    icon: HandHeart,
    title: "Holding",
    description: "Sustentação emocional e ambiente seguro.",
  },
  {
    icon: Shield,
    title: "Ambiente Facilitador",
    description: "Espaço para o verdadeiro self emergir.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-terracotta-50/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-terracotta-100/30 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              <motion.span
                variants={fadeInUp}
                className="inline-block px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-semibold mb-6"
              >
                Psicologia Clínica • CRP 06/204114
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 leading-tight mb-6"
              >
                Acolhimento,{" "}
                <span className="text-gradient">crescimento</span> e
                tranquilidade
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                Psicoterapia com abordagem Winnicottiana. Um espaço seguro para
                o desenvolvimento do seu verdadeiro eu.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Psic%C3%B3loga%20Ester%20Amaral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 rounded-full font-bold text-base transition-all hover:shadow-xl hover:shadow-terracotta-500/25 hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Agendar Primeira Conversa
                </Link>
                <Link
                  href="#abordagem"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 px-8 py-4 rounded-full font-bold text-base border border-neutral-200 transition-all hover:border-terracotta-300"
                >
                  Conheça a Abordagem
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10 text-sm text-neutral-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-terracotta-500" />
                  <span>Atendimento Online</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-terracotta-500" />
                  <span>Presencial em SP</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:max-w-md">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-56 h-56 bg-terracotta-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-terracotta-100/40 rounded-full blur-2xl" />

                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-neutral-900/10">
                  <Image
                    src="/image/Ester Amaral Psicologa clinica para mulheres_v3.png"
                    alt="Psicóloga Ester Amaral - Especialista em Psicoterapia Clínica"
                    width={500}
                    height={625}
                    className="object-cover w-full h-full"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent" />

                  {/* Name badge */}
                  <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-3">
                    <p className="font-bold text-neutral-900 text-sm">
                      Ester Amaral
                    </p>
                    <p className="text-xs text-neutral-600">
                      Psicóloga Clínica • Abordagem Winnicottiana
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            >
              Por que iniciar a terapia?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              A psicoterapia é um caminho contínuo para o autoconhecimento e o
              bem-estar emocional sustentável.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={scaleIn}
                className="group bg-neutral-50 hover:bg-white rounded-3xl p-8 transition-all hover:shadow-xl hover:shadow-terracotta-500/5 border border-transparent hover:border-terracotta-100"
              >
                <div className="w-14 h-14 rounded-2xl bg-terracotta-100 group-hover:bg-terracotta-500 flex items-center justify-center mb-6 transition-colors">
                  <benefit.icon
                    size={28}
                    className="text-terracotta-600 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOBRE SECTION */}
      <section id="sobre" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-lg mx-auto lg:mx-0 rounded-3xl overflow-hidden">
                <Image
                  src="/image/Ester-Amaral-Psicóloga-para-mulheres_01.jpg"
                  alt="Psicóloga Ester Amaral em ambiente de trabalho acolhedor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-4 md:right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center">
                    <Heart className="text-terracotta-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Atendimento</p>
                    <p className="text-sm text-neutral-500">Personalizado</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-terracotta-600 font-bold tracking-widest uppercase text-sm"
              >
                Sobre Mim
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
              >
                Olá, sou a Ester Amaral
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-neutral-600 leading-relaxed"
              >
                <p>
                  Sou Psicóloga Clínica (CRP 06/204114) formada com
                  especialização em abordagem Winnicottiana. Meu trabalho é
                  focado em acolher e auxiliar no desenvolvimento emocional de
                  cada pessoa.
                </p>
                <p>
                  Atendo mulheres, mães, adolescentes e
                  homens que buscam um espaço seguro para lidar com suas
                  questões emocionais. Também tenho interesse especial em
                  atendimento infantil.
                </p>
                <p>
                  Acredito que a terapia é uma jornada de autoconhecimento e
                  crescimento, onde você pode se reconectar com seu verdadeiro
                  eu.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 mt-8"
              >
                <span className="px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-medium">
                  Abordagem Winnicottiana
                </span>
                <span className="px-4 py-2 rounded-full bg-terracotta-100 text-terracotta-700 text-sm font-medium">
                  Psicoterapia Individual
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESPECIALIDADES SECTION */}
      <section id="especialidades" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-terracotta-600 font-bold tracking-widest uppercase text-sm"
            >
              Áreas de Atuação
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4"
            >
              Especialidades e Ênfases
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Trabalho com diversas questões emocionais, sempre com acolhimento
              e respeito ao seu tempo.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
          >
            {especialidades.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 hover:bg-terracotta-50 border border-transparent hover:border-terracotta-200 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-terracotta-100 group-hover:bg-terracotta-500 flex items-center justify-center mb-4 transition-colors">
                  <item.icon
                    size={24}
                    className="text-terracotta-600 group-hover:text-white transition-colors"
                  />
                </div>
                <p className="font-semibold text-neutral-800 text-sm md:text-base">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ABORDAGEM SECTION */}
      <section id="abordagem" className="py-20 bg-terracotta-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-2 lg:order-1"
            >
              <motion.span
                variants={fadeInUp}
                className="text-terracotta-600 font-bold tracking-widest uppercase text-sm"
              >
                Minha Abordagem
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6"
              >
                A Perspectiva Winnicottiana
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="space-y-4 text-neutral-600 leading-relaxed"
              >
                <p>
                  Trabalho com a teoria de Donald Winnicott, que valoriza o
                  ambiente facilitador, o &apos;holding&apos; (sustentação
                  emocional) e a capacidade de ser verdadeiro consigo mesmo.
                </p>
                <p>
                  O foco não é apenas curar sintomas, mas resgatar a
                  espontaneidade e a criatividade no viver. A terapia se torna
                  um espaço lúdico e seguro onde é possível integrar
                  experiências e desenvolver um sentimento de realidade pessoal.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="grid sm:grid-cols-3 gap-6 mt-10"
              >
                {diferenciais.map((item) => (
                  <div key={item.title} className="text-center sm:text-left">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 mx-auto sm:mx-0">
                      <item.icon size={24} className="text-terracotta-600" />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative aspect-[4/3] max-w-lg mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/image/Psicologa-Ester-Amaral-01.jpg"
                  alt="Ambiente terapêutico acolhedor"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ATENDIMENTO SECTION */}
      <section id="contato" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-terracotta-600 font-bold tracking-widest uppercase text-sm"
            >
              Como Funciona
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4"
            >
              Formas de Atendimento
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Presencial */}
            <motion.div
              variants={scaleIn}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                <MapPin size={28} className="text-terracotta-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Atendimento Presencial
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Encontros realizados em consultório particular, em um espaço
                preparado para oferecer conforto e privacidade.
              </p>
              <div className="bg-white rounded-xl p-4 border border-neutral-100">
                <p className="font-semibold text-neutral-900 mb-2">
                  Localização
                </p>
                <p className="text-sm text-neutral-600">
                  R. dos Cafezais, 363 - Jardim Prudência
                  <br />
                  São Paulo - SP, 04364-000
                </p>
              </div>
            </motion.div>

            {/* Online */}
            <motion.div
              variants={scaleIn}
              className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-terracotta-100 flex items-center justify-center mb-6">
                <Video size={28} className="text-terracotta-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                Atendimento Online
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Sessões por videochamada com a mesma qualidade do atendimento
                presencial. Ideal para quem busca praticidade e flexibilidade.
              </p>
              <div className="bg-white rounded-xl p-4 border border-neutral-100">
                <p className="font-semibold text-neutral-900 mb-2">
                  Como Funciona
                </p>
                <p className="text-sm text-neutral-600">
                  Atendimento via plataformas seguras de videochamada, com total
                  sigilo e privacidade garantidos.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="rounded-3xl overflow-hidden shadow-lg border border-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.771307045542!2d-46.67329752378589!3d-23.64835976479594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5100a8b62c41%3A0xc39e5a9bed3d8edb!2sPsic%C3%B3loga%20Ester%20Amaral%20-%20Presencial%20e%20Online!5e0!3m2!1spt-BR!2sbr!4v1765307951166!5m2!1spt-BR!2sbr"
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
            <p className="text-center text-sm text-neutral-500 mt-4">
              📍 R. dos Cafezais, 363 - Jardim Prudência, Zona Sul - SP
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* CONTACT FORM SECTION */}
      <ContactForm />

      {/* FAQ SECTION */}
      <FAQ />

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-terracotta-600 to-terracotta-700 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Pronto para começar sua jornada?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
            >
              Entre em contato para agendar uma primeira conversa e entender
              como a terapia pode te auxiliar neste momento.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link
                href="https://wa.me/5511988405439?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Psic%C3%B3loga%20Ester%20Amaral"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-neutral-100 text-terracotta-600 px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
              >
                <Phone size={22} />
                Agendar Primeira Conversa
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
