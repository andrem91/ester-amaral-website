import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,

  async redirects() {
    return [
      // Redirects from old site URLs to new pages
      {
        source: '/sobre-a-ester-psicologa-para-mulheres',
        destination: '/sobre',
        permanent: true,
      },
      {
        source: '/blog-psicologa-ester-amaral',
        destination: '/',
        permanent: true,
      },
      {
        source: '/relacionamentos-afetivos',
        destination: '/relacionamentos',
        permanent: true,
      },
      {
        source: '/e-se-eu-nao-souber-o-que-dizer-na-terapia',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sobrecarga-mental-e-exaustao',
        destination: '/burnout',
        permanent: true,
      },
      {
        source: '/autoestima-e-autoconhecimento',
        destination: '/servicos',
        permanent: true,
      },
      {
        source: '/luto-e-perdas-emocionais',
        destination: '/luto',
        permanent: true,
      },
      {
        source: '/a-maternidade-real-tambem-tem-ambivalencia',
        destination: '/maternidade',
        permanent: true,
      },
      {
        source: '/quando-a-exaustao-nao-e-so-cansaco',
        destination: '/burnout',
        permanent: true,
      },
      {
        source: '/terapia-para-maternidade',
        destination: '/maternidade',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

