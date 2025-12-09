# Psicóloga Ester Amaral - Website

Website profissional para a Psicóloga Clínica Ester Amaral, desenvolvido com foco em performance, SEO e conversão de leads via WhatsApp.

## 🚀 Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **E-mail:** Resend

## 📦 Instalação

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## 🔑 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz com:

```env
RESEND_API_KEY=re_sua_chave_aqui
```

## 🌐 Deploy

O site está configurado para deploy na **Vercel**. Consulte o `DEPLOY_GUIDE.md` para instruções detalhadas sobre como apontar o domínio da Hostinger para a Vercel.

## 📁 Estrutura

```
src/
├── app/
│   ├── api/send/     # API de envio de e-mail
│   ├── globals.css   # Design system
│   ├── layout.tsx    # Layout global + SEO
│   └── page.tsx      # Página principal
├── components/
│   ├── contact-form.tsx
│   ├── faq.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── scroll-to-top.tsx
│   ├── testimonials.tsx
│   └── whatsapp-button.tsx
└── lib/
    └── utils.ts
```

## ✨ Funcionalidades

- ✅ Design responsivo (Mobile-first)
- ✅ SEO otimizado com Schema Markup (MedicalBusiness)
- ✅ Formulário de contato funcional
- ✅ Integração com WhatsApp
- ✅ FAQ interativo
- ✅ Carrossel de depoimentos
- ✅ Google Maps embed
- ✅ Scroll-to-top button

## 📄 Licença

Projeto privado. Todos os direitos reservados.
