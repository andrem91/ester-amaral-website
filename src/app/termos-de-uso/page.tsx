import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Termos de Uso | Psicóloga Ester Amaral",
    description:
        "Termos de Uso do site da Psicóloga Ester Amaral. Conheça as condições de uso do nosso site e serviços.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function TermosDeUsoPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 bg-gradient-to-br from-neutral-50 to-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Termos de Uso
                        </h1>
                        <p className="text-neutral-600">
                            Última atualização: Dezembro de 2024
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto prose prose-neutral prose-lg">
                        <h2>1. Aceitação dos Termos</h2>
                        <p>
                            Ao acessar e usar o site da Psicóloga Ester Amaral, você concorda
                            com estes Termos de Uso. Se você não concordar com qualquer parte
                            destes termos, não deve usar nosso site.
                        </p>

                        <h2>2. Descrição dos Serviços</h2>
                        <p>
                            Este site fornece informações sobre os serviços de psicoterapia
                            oferecidos pela Psicóloga Ester Amaral, incluindo:
                        </p>
                        <ul>
                            <li>Informações sobre a profissional e sua abordagem</li>
                            <li>Descrição dos serviços e especialidades</li>
                            <li>Formas de contato e agendamento</li>
                            <li>Conteúdo informativo sobre saúde mental</li>
                        </ul>

                        <h2>3. Natureza Informativa</h2>
                        <p>
                            O conteúdo disponibilizado neste site tem caráter exclusivamente
                            informativo e não substitui consulta, diagnóstico ou tratamento
                            psicológico profissional. As informações aqui presentes não devem
                            ser utilizadas para autodiagnóstico ou automedicação.
                        </p>
                        <p>
                            Se você está passando por uma crise ou emergência de saúde mental,
                            procure ajuda profissional imediata ou ligue para o CVV (Centro de
                            Valorização da Vida) pelo número 188.
                        </p>

                        <h2>4. Uso Aceitável</h2>
                        <p>Ao usar nosso site, você concorda em:</p>
                        <ul>
                            <li>Fornecer informações verdadeiras e precisas</li>
                            <li>
                                Não usar o site para qualquer finalidade ilegal ou não
                                autorizada
                            </li>
                            <li>
                                Não tentar obter acesso não autorizado a qualquer parte do site
                            </li>
                            <li>
                                Não reproduzir, duplicar ou copiar qualquer conteúdo do site sem
                                autorização prévia
                            </li>
                        </ul>

                        <h2>5. Propriedade Intelectual</h2>
                        <p>
                            Todo o conteúdo deste site, incluindo textos, imagens, logotipos,
                            design e código, é de propriedade da Psicóloga Ester Amaral ou de
                            seus licenciadores e é protegido por leis de direitos autorais e
                            propriedade intelectual.
                        </p>

                        <h2>6. Agendamento e Consultas</h2>
                        <p>
                            O agendamento de consultas realizado através deste site está
                            sujeito à disponibilidade e confirmação. A marcação de uma
                            consulta não garante a prestação do serviço até que seja
                            confirmada pela profissional.
                        </p>
                        <p>
                            Em caso de cancelamento ou reagendamento, solicitamos que o
                            contato seja feito com antecedência mínima de 24 horas.
                        </p>

                        <h2>7. Sigilo Profissional</h2>
                        <p>
                            A Psicóloga Ester Amaral segue rigorosamente o Código de Ética
                            Profissional do Psicólogo, garantindo o sigilo das informações
                            compartilhadas durante as sessões de psicoterapia, exceto nos
                            casos previstos em lei.
                        </p>

                        <h2>8. Links Externos</h2>
                        <p>
                            Nosso site pode conter links para sites de terceiros. Não somos
                            responsáveis pelo conteúdo, políticas de privacidade ou práticas
                            de sites de terceiros.
                        </p>

                        <h2>9. Limitação de Responsabilidade</h2>
                        <p>
                            Não nos responsabilizamos por quaisquer danos diretos, indiretos,
                            incidentais ou consequentes decorrentes do uso ou incapacidade de
                            uso deste site, incluindo, mas não se limitando a, danos por perda
                            de dados ou lucros.
                        </p>

                        <h2>10. Alterações nos Termos</h2>
                        <p>
                            Reservamo-nos o direito de modificar estes Termos de Uso a
                            qualquer momento. As alterações entrarão em vigor imediatamente
                            após a publicação no site. O uso continuado do site após quaisquer
                            alterações constitui aceitação dos novos termos.
                        </p>

                        <h2>11. Lei Aplicável</h2>
                        <p>
                            Estes Termos de Uso são regidos pelas leis da República Federativa
                            do Brasil. Qualquer disputa relacionada a estes termos será
                            resolvida no foro da cidade de São Paulo, SP.
                        </p>

                        <h2>12. Contato</h2>
                        <p>
                            Para dúvidas sobre estes Termos de Uso, entre em contato:
                        </p>
                        <ul>
                            <li>
                                <strong>E-mail:</strong>{" "}
                                <Link
                                    href="mailto:contato@psicologaesteramaral.com.br"
                                    className="text-terracotta-600 hover:text-terracotta-700"
                                >
                                    contato@psicologaesteramaral.com.br
                                </Link>
                            </li>
                            <li>
                                <strong>WhatsApp:</strong>{" "}
                                <Link
                                    href="https://wa.me/5511988405439"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-terracotta-600 hover:text-terracotta-700"
                                >
                                    (11) 98840-5439
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-12 pt-8 border-t border-neutral-200">
                            <Link
                                href="/"
                                className="text-terracotta-600 hover:text-terracotta-700 font-medium"
                            >
                                ← Voltar para a página inicial
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
