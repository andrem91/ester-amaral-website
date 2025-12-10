# Psicóloga Ester Amaral - Website

Website profissional para a Psicóloga Clínica Ester Amaral, desenvolvido com foco em performance, SEO e conversão de leads via WhatsApp.

## 🚀 Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Estilização:** Tailwind CSS 4
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **E-mail:** Resend
- **Analytics:** Vercel Speed Insights & Analytics

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
│   ├── api/send/             # API de envio de e-mail
│   ├── abordagem/            # Página Abordagem Winnicottiana
│   ├── adolescentes/         # Página Terapia para Adolescentes
│   ├── ansiedade-e-depressao/# Página Ansiedade e Depressão
│   ├── burnout/              # Página Burnout
│   ├── contato/              # Página de Contato
│   ├── luto/                 # Página Luto e Perdas
│   ├── maternidade/          # Página Maternidade
│   ├── politica-de-privacidade/
│   ├── relacionamentos/      # Página Relacionamentos
│   ├── servicos/             # Página Lista de Serviços
│   ├── sobre/                # Página Sobre a Ester
│   ├── termos-de-uso/
│   ├── globals.css           # Design system
│   ├── layout.tsx            # Layout global + SEO
│   ├── page.tsx              # Página principal
│   ├── robots.ts             # Robots.txt
│   └── sitemap.ts            # Sitemap.xml
├── components/
│   ├── contact-form.tsx
│   ├── faq.tsx
│   ├── footer.tsx
│   ├── google-map.tsx
│   ├── header.tsx
│   ├── scroll-to-top.tsx
│   ├── specialty-faq.tsx     # FAQ reutilizável para especialidades
│   ├── testimonials.tsx
│   └── whatsapp-button.tsx
└── lib/
    └── utils.ts
```

## 📄 Páginas

### Core
| Rota | Descrição |
|------|-----------|
| `/` | Página principal |
| `/sobre` | Sobre a Ester Amaral |
| `/servicos` | Lista de especialidades |
| `/contato` | Formulário e mapa |
| `/abordagem` | Abordagem Winnicottiana |

### Especialidades (com FAQs)
| Rota | Descrição |
|------|-----------|
| `/maternidade` | Maternidade, puerpério, parentalidade |
| `/ansiedade-e-depressao` | Ansiedade e depressão |
| `/luto` | Luto e perdas emocionais |
| `/relacionamentos` | Relacionamentos afetivos |
| `/adolescentes` | Terapia para adolescentes |
| `/burnout` | Burnout e esgotamento |

### Legal
| Rota | Descrição |
|------|-----------|
| `/politica-de-privacidade` | Conformidade LGPD |
| `/termos-de-uso` | Termos de uso do site |

## ✨ Funcionalidades

- ✅ Design responsivo (Mobile-first)
- ✅ SEO otimizado com Schema Markup (MedicalBusiness)
- ✅ Sitemap.xml e Robots.txt automáticos
- ✅ 301 Redirects para URLs antigas
- ✅ Formulário de contato funcional
- ✅ Integração com WhatsApp
- ✅ FAQ interativo (geral e por especialidade)
- ✅ Carrossel de depoimentos
- ✅ Google Maps embed (lazy load)
- ✅ Scroll-to-top button
- ✅ Vercel Speed Insights

## 📄 Licença

Projeto privado. Todos os direitos reservados.
