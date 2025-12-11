/**
 * Envia um evento para o Google Analytics 4
 * @param eventName - Nome do evento (ex: "click_whatsapp", "form_submit")
 * @param params - Parâmetros adicionais do evento
 */
export function trackEvent(
    eventName: string,
    params?: Record<string, string | number | boolean>
) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, params);
    }
}
