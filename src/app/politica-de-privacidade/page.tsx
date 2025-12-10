import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Política de Privacidade | Psicóloga Ester Amaral",
    description:
        "Política de Privacidade do site da Psicóloga Ester Amaral. Saiba como coletamos, usamos e protegemos seus dados pessoais.",
    robots: {
        index: false,
        follow: true,
    },
};

export default function PoliticaDePrivacidadePage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-12 bg-gradient-to-br from-neutral-50 to-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                            Política de Privacidade
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
                        <h2>1. Introdução</h2>
                        <p>
                            A Psicóloga Ester Amaral ("nós", "nosso" ou "site") está
                            comprometida em proteger a privacidade dos visitantes do nosso
                            site. Esta Política de Privacidade explica como coletamos, usamos,
                            divulgamos e protegemos suas informações pessoais quando você
                            visita nosso site ou utiliza nossos serviços.
                        </p>

                        <h2>2. Informações que Coletamos</h2>
                        <p>Podemos coletar os seguintes tipos de informações:</p>
                        <h3>2.1 Informações fornecidas por você</h3>
                        <ul>
                            <li>Nome completo</li>
                            <li>Endereço de e-mail</li>
                            <li>Número de telefone</li>
                            <li>Mensagens enviadas através do formulário de contato</li>
                        </ul>

                        <h3>2.2 Informações coletadas automaticamente</h3>
                        <ul>
                            <li>Endereço IP</li>
                            <li>Tipo de navegador</li>
                            <li>Páginas visitadas</li>
                            <li>Data e hora de acesso</li>
                            <li>
                                Cookies e tecnologias similares (consulte nossa seção sobre
                                Cookies)
                            </li>
                        </ul>

                        <h2>3. Como Usamos Suas Informações</h2>
                        <p>Utilizamos as informações coletadas para:</p>
                        <ul>
                            <li>Responder às suas solicitações e perguntas</li>
                            <li>Agendar e confirmar consultas</li>
                            <li>Enviar comunicações relevantes sobre nossos serviços</li>
                            <li>Melhorar nosso site e serviços</li>
                            <li>Cumprir obrigações legais</li>
                        </ul>

                        <h2>4. Compartilhamento de Informações</h2>
                        <p>
                            Não vendemos, alugamos ou compartilhamos suas informações pessoais
                            com terceiros para fins de marketing. Podemos compartilhar suas
                            informações apenas nas seguintes situações:
                        </p>
                        <ul>
                            <li>Com seu consentimento expresso</li>
                            <li>Para cumprir obrigações legais</li>
                            <li>
                                Com prestadores de serviços que nos auxiliam na operação do site
                                (como serviços de hospedagem e análise), sempre sob acordos de
                                confidencialidade
                            </li>
                        </ul>

                        <h2>5. Segurança dos Dados</h2>
                        <p>
                            Implementamos medidas de segurança técnicas e organizacionais para
                            proteger suas informações pessoais contra acesso não autorizado,
                            alteração, divulgação ou destruição. No entanto, nenhuma
                            transmissão de dados pela Internet é 100% segura.
                        </p>

                        <h2>6. Seus Direitos (LGPD)</h2>
                        <p>
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
                            direito a:
                        </p>
                        <ul>
                            <li>
                                Confirmar a existência de tratamento de seus dados pessoais
                            </li>
                            <li>Acessar seus dados pessoais</li>
                            <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                            <li>
                                Solicitar a anonimização, bloqueio ou eliminação de dados
                                desnecessários
                            </li>
                            <li>
                                Solicitar a portabilidade dos dados a outro fornecedor de
                                serviço
                            </li>
                            <li>
                                Revogar o consentimento a qualquer momento, quando o tratamento
                                for baseado em consentimento
                            </li>
                        </ul>

                        <h2>7. Cookies</h2>
                        <p>
                            Utilizamos cookies e tecnologias similares para melhorar sua
                            experiência em nosso site. Cookies são pequenos arquivos de texto
                            armazenados em seu dispositivo. Você pode configurar seu navegador
                            para recusar cookies, mas isso pode afetar algumas
                            funcionalidades do site.
                        </p>

                        <h2>8. Alterações nesta Política</h2>
                        <p>
                            Podemos atualizar esta Política de Privacidade periodicamente.
                            Quando fizermos alterações significativas, publicaremos a nova
                            política nesta página e atualizaremos a data de "última
                            atualização".
                        </p>

                        <h2>9. Contato</h2>
                        <p>
                            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre
                            o tratamento de seus dados pessoais, entre em contato conosco:
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
