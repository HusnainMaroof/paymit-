export type Currency = {
  code: string;
  iso: string;
  symbol: string;
};

export const CURRENCIES: Currency[] = [
  { code: "GBP", iso: "gb", symbol: "£" },
  { code: "USD", iso: "us", symbol: "$" },
  { code: "EUR", iso: "eu", symbol: "€" },
  { code: "NGN", iso: "ng", symbol: "₦" },
  { code: "NOK", iso: "no", symbol: "kr" },
  { code: "INR", iso: "in", symbol: "₹" },
  { code: "GHS", iso: "gh", symbol: "₵" },
  { code: "KES", iso: "ke", symbol: "KSh" },
  { code: "CAD", iso: "ca", symbol: "C$" },
  { code: "AUD", iso: "au", symbol: "A$" },
  { code: "JPY", iso: "jp", symbol: "¥" },
  { code: "BRL", iso: "br", symbol: "R$" },
  { code: "GMD", iso: "gm", symbol: "D" },
  { code: "XOF", iso: "sn", symbol: "Fr" },
  { code: "PKR", iso: "pk", symbol: "₨" },
  { code: "BDT", iso: "bd", symbol: "৳" },
];

export const SEND_CURRENCIES: Currency[] = CURRENCIES.filter(
  (c) => c.code === "GBP",
);

const RECEIVE_CODES = ["NGN", "GHS", "GMD", "XOF", "PKR", "INR", "BDT"];
export const RECEIVE_CURRENCIES: Currency[] = RECEIVE_CODES.map((code) =>
  CURRENCIES.find((c) => c.code === code)!,
).filter((c): c is Currency => c !== undefined);

export const RATES: Record<string, Record<string, number>> = {
  GBP: { USD: 1.27, EUR: 1.17, NGN: 1800, NOK: 13.8, INR: 106.5, GHS: 15.8, KES: 165, CAD: 1.72, AUD: 1.95, JPY: 191, BRL: 6.2, GMD: 85, XOF: 760, PKR: 350, BDT: 150 },
  USD: { GBP: 0.79, EUR: 0.92, NGN: 1417, NOK: 10.87, INR: 83.8, GHS: 12.4, KES: 129.9, CAD: 1.35, AUD: 1.54, JPY: 150.4, BRL: 4.88, GMD: 66.9, XOF: 598, PKR: 275.6, BDT: 118.1 },
  EUR: { GBP: 0.85, USD: 1.09, NGN: 1538, NOK: 11.8, INR: 91, GHS: 13.5, KES: 141, CAD: 1.47, AUD: 1.67, JPY: 163.2, BRL: 5.3, GMD: 72.6, XOF: 650, PKR: 299, BDT: 128.2 },
  NGN: { GBP: 0.00056, USD: 0.00071, EUR: 0.00065, NOK: 0.0077, INR: 0.059, GHS: 0.0088, KES: 0.092, CAD: 0.00096, AUD: 0.0011, JPY: 0.106, BRL: 0.0034, GMD: 0.0472, XOF: 0.422, PKR: 0.194, BDT: 0.0833 },
  NOK: { GBP: 0.072, USD: 0.092, EUR: 0.085, NGN: 130, INR: 7.7, GHS: 1.14, KES: 11.9, CAD: 0.125, AUD: 0.141, JPY: 13.8, BRL: 0.45, GMD: 6.16, XOF: 55.1, PKR: 25.4, BDT: 10.9 },
  INR: { GBP: 0.0094, USD: 0.012, EUR: 0.011, NGN: 16.9, NOK: 0.13, GHS: 0.148, KES: 1.55, CAD: 0.016, AUD: 0.018, JPY: 1.79, BRL: 0.058, GMD: 0.798, XOF: 7.14, PKR: 3.29, BDT: 1.41 },
  GHS: { GBP: 0.063, USD: 0.081, EUR: 0.074, NGN: 114, NOK: 0.88, INR: 6.7, KES: 10.4, CAD: 0.109, AUD: 0.123, JPY: 12.1, BRL: 0.39, GMD: 5.38, XOF: 48.1, PKR: 22.2, BDT: 9.49 },
  KES: { GBP: 0.0061, USD: 0.0077, EUR: 0.0071, NGN: 10.9, NOK: 0.084, INR: 0.65, GHS: 0.096, CAD: 0.01, AUD: 0.012, JPY: 1.16, BRL: 0.038, GMD: 0.515, XOF: 4.61, PKR: 2.12, BDT: 0.909 },
  CAD: { GBP: 0.58, USD: 0.74, EUR: 0.68, NGN: 1044, NOK: 8.0, INR: 61.8, GHS: 9.2, KES: 95.8, AUD: 1.13, JPY: 111, BRL: 3.6, GMD: 49.4, XOF: 442, PKR: 203.5, BDT: 87.2 },
  AUD: { GBP: 0.51, USD: 0.65, EUR: 0.6, NGN: 921, NOK: 7.1, INR: 54.7, GHS: 8.1, KES: 84.7, CAD: 0.88, JPY: 98, BRL: 3.18, GMD: 43.6, XOF: 390, PKR: 179.5, BDT: 76.9 },
  JPY: { GBP: 0.0052, USD: 0.0066, EUR: 0.0061, NGN: 9.4, NOK: 0.072, INR: 0.56, GHS: 0.083, KES: 0.86, CAD: 0.009, AUD: 0.01, BRL: 0.032, GMD: 0.445, XOF: 3.98, PKR: 1.83, BDT: 0.785 },
  BRL: { GBP: 0.16, USD: 0.2, EUR: 0.19, NGN: 290, NOK: 2.2, INR: 17.2, GHS: 2.6, KES: 26.5, CAD: 0.28, AUD: 0.31, JPY: 30.8, GMD: 13.7, XOF: 122.6, PKR: 56.5, BDT: 24.2 },
  GMD: { GBP: 0.0118, USD: 0.0149, EUR: 0.0138, NGN: 21.2, NOK: 0.162, INR: 1.25, GHS: 0.186, KES: 1.94, CAD: 0.0202, AUD: 0.0229, JPY: 2.25, BRL: 0.0729, XOF: 8.94, PKR: 4.12, BDT: 1.76 },
  XOF: { GBP: 0.00132, USD: 0.00167, EUR: 0.00154, NGN: 2.37, NOK: 0.0182, INR: 0.14, GHS: 0.0208, KES: 0.217, CAD: 0.00226, AUD: 0.00257, JPY: 0.251, BRL: 0.00816, GMD: 0.112, PKR: 0.461, BDT: 0.197 },
  PKR: { GBP: 0.00286, USD: 0.00363, EUR: 0.00334, NGN: 5.14, NOK: 0.0394, INR: 0.304, GHS: 0.0451, KES: 0.471, CAD: 0.00491, AUD: 0.00557, JPY: 0.546, BRL: 0.0177, GMD: 0.243, XOF: 2.17, BDT: 0.429 },
  BDT: { GBP: 0.00667, USD: 0.00847, EUR: 0.0078, NGN: 12, NOK: 0.092, INR: 0.71, GHS: 0.105, KES: 1.1, CAD: 0.0115, AUD: 0.013, JPY: 1.27, BRL: 0.0413, GMD: 0.567, XOF: 5.07, PKR: 2.33 },
};

export function getRate(from: string, to: string): number {
  if (from === to) return 1;
  return RATES[from]?.[to] ?? 0;
}

export function getSymbol(code: string): string {
  return CURRENCIES.find((c) => c.code === code)?.symbol ?? "";
}

export function formatRate(rate: number): string {
  return rate.toFixed(4);
}

export function fmt(n: number, min = 0, max = 0): string {
  return n.toLocaleString("en-US", { minimumFractionDigits: min, maximumFractionDigits: max });
}
