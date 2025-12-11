/* eslint-disable @typescript-eslint/no-explicit-any */
interface Window {
    gtag: (command: string, ...args: any[]) => void;
    dataLayer: any[];
}
