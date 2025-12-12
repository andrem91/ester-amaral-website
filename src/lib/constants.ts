/**
 * Dados de contato centralizados
 * Atualize aqui para refletir em todo o site
 */

export const CONTACT = {
    phone: "5511988405439",
    phoneFormatted: "(11) 98840-5439",
    email: "contato@psicologaesteramaral.com.br",
    instagram: "psicologaesteramaral",
    instagramUrl: "https://www.instagram.com/psicologaesteramaral/",
    crp: "06/204114",
} as const;

export const WHATSAPP = {
    baseUrl: `https://wa.me/${CONTACT.phone}`,
    messages: {
        agendamento: "Olá, gostaria de agendar uma consulta",
        agendamentoCompleto: "Olá, gostaria de agendar uma consulta com a Psicóloga Ester Amaral",
    },
    get linkAgendamento() {
        return `${this.baseUrl}?text=${encodeURIComponent(this.messages.agendamento)}`;
    },
    get linkAgendamentoCompleto() {
        return `${this.baseUrl}?text=${encodeURIComponent(this.messages.agendamentoCompleto)}`;
    },
} as const;

export const ADDRESS = {
    street: "R. dos Cafezais, 363",
    neighborhood: "Jardim Prudência",
    city: "São Paulo",
    state: "SP",
    cep: "04364-000",
    get full() {
        return `${this.street} - ${this.neighborhood}, ${this.city} - ${this.state}, ${this.cep}`;
    },
    get shortAddress() {
        return `${this.street} - ${this.neighborhood}, ${this.city} - ${this.state}`;
    },
} as const;

export const SITE = {
    name: "Psicóloga Ester Amaral",
    url: "https://psicologaesteramaral.com.br",
    title: "Psicóloga Ester Amaral | Psicoterapia Clínica em São Paulo",
} as const;
