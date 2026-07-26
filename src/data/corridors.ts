export type Corridor = {
  slug: string;
  country: string;
  iso: string;
  flag: string;
  region: string;
  currency: string;
  currencyCode: string;
  headline: string;
  description: string;
  deliveryMethods: string[];
  benefits: string[];
};

export const CORRIDORS: Corridor[] = [
  {
    slug: "nigeria",
    country: "Nigeria",
    iso: "NG",
    flag: "ng",
    region: "Africa",
    currency: "Nigerian Naira",
    currencyCode: "NGN",
    headline: "Send Money to Nigeria",
    description:
      "Send money to your loved ones in Nigeria with fast delivery, great exchange rates, and zero hassle. Paymit makes it easy to support family and friends back home.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup", "Mobile Wallet"],
    benefits: [
      "Same-day delivery to most banks",
      "Competitive NGN exchange rates",
      "Cash pickup at locations across Nigeria",
      "Real-time transfer tracking",
      "First transfer fee-free",
    ],
  },
  {
    slug: "ghana",
    country: "Ghana",
    iso: "GH",
    flag: "gh",
    region: "Africa",
    currency: "Ghanaian Cedi",
    currencyCode: "GHS",
    headline: "Send Money to Ghana",
    description:
      "Send money to Ghana quickly and securely with Paymit. Enjoy competitive rates and multiple delivery options to reach your family and friends.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup", "Mobile Wallet"],
    benefits: [
      "Fast transfer to Ghanaian banks",
      "Great GHS exchange rates",
      "Wide cash pickup network",
      "Live push notifications",
      "First transfer fee-free",
    ],
  },
  {
    slug: "gambia",
    country: "Gambia",
    iso: "GM",
    flag: "gm",
    region: "Africa",
    currency: "Gambian Dalasi",
    currencyCode: "GMD",
    headline: "Send Money to Gambia",
    description:
      "Send money to The Gambia with Paymit's reliable transfer service. Fast, affordable, and secure — so your family gets more of what you send.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup"],
    benefits: [
      "Reliable delivery to Gambia",
      "Competitive exchange rates",
      "Cash pickup available nationwide",
      "Transparent fees — no hidden costs",
      "First transfer fee-free",
    ],
  },
  {
    slug: "cameroon",
    country: "Cameroon",
    iso: "CM",
    flag: "cm",
    region: "Africa",
    currency: "Central African CFA Franc",
    currencyCode: "XAF",
    headline: "Send Money to Cameroon",
    description:
      "Transfer money to Cameroon with Paymit. Fast delivery, competitive rates, and a secure platform to support your loved ones.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup"],
    benefits: [
      "Fast processing times",
      "Competitive XAF rates",
      "Cash pickup across Cameroon",
      "Secure and regulated transfers",
      "First transfer fee-free",
    ],
  },
  {
    slug: "senegal",
    country: "Senegal",
    iso: "SN",
    flag: "sn",
    region: "Africa",
    currency: "West African CFA Franc",
    currencyCode: "XOF",
    headline: "Send Money to Senegal",
    description:
      "Send money to Senegal with Paymit. Enjoy fast transfers, excellent rates, and a simple, secure experience from the UK.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup"],
    benefits: [
      "Quick delivery to Senegalese banks",
      "Great XOF exchange rates",
      "Cash pickup locations in Senegal",
      "Transparent pricing",
      "First transfer fee-free",
    ],
  },
  {
    slug: "zambia",
    country: "Zambia",
    iso: "ZM",
    flag: "zm",
    region: "Africa",
    currency: "Zambian Kwacha",
    currencyCode: "ZMW",
    headline: "Send Money to Zambia",
    description:
      "Send money to Zambia quickly and affordably with Paymit. Competitive rates and reliable delivery to support your family.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup", "Mobile Wallet"],
    benefits: [
      "Fast transfers to Zambian banks",
      "Competitive ZMW rates",
      "Cash pickup across Zambia",
      "Mobile wallet options available",
      "First transfer fee-free",
    ],
  },
  {
    slug: "pakistan",
    country: "Pakistan",
    iso: "PK",
    flag: "pk",
    region: "South Asia",
    currency: "Pakistani Rupee",
    currencyCode: "PKR",
    headline: "Send Money to Pakistan",
    description:
      "Send money to Pakistan with Paymit's trusted remittance service. Fast delivery, great exchange rates, and complete transparency.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup", "Mobile Wallet"],
    benefits: [
      "Same-day delivery to major banks",
      "Competitive PKR exchange rates",
      "Wide cash pickup network in Pakistan",
      "Real-time tracking",
      "First transfer fee-free",
    ],
  },
  {
    slug: "india",
    country: "India",
    iso: "IN",
    flag: "in",
    region: "South Asia",
    currency: "Indian Rupee",
    currencyCode: "INR",
    headline: "Send Money to India",
    description:
      "Send money to India with Paymit. Fast, secure, and affordable transfers with excellent exchange rates and multiple delivery options.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup", "Mobile Wallet"],
    benefits: [
      "Fast delivery to Indian banks",
      "Great INR exchange rates",
      "Cash pickup across India",
      "Mobile wallet transfers available",
      "First transfer fee-free",
    ],
  },
  {
    slug: "bangladesh",
    country: "Bangladesh",
    iso: "BD",
    flag: "bd",
    region: "South Asia",
    currency: "Bangladeshi Taka",
    currencyCode: "BDT",
    headline: "Send Money to Bangladesh",
    description:
      "Send money to Bangladesh with Paymit's reliable service. Competitive rates, fast delivery, and a secure platform for your remittances.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup", "Mobile Wallet"],
    benefits: [
      "Quick delivery to Bangladeshi banks",
      "Competitive BDT exchange rates",
      "Cash pickup nationwide",
      "Mobile wallet options",
      "First transfer fee-free",
    ],
  },
];

export function getCorridor(slug: string): Corridor | undefined {
  return CORRIDORS.find((c) => c.slug === slug);
}
