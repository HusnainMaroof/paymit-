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
      "Supporting your connections across Nigeria. Whether your family is in Lagos, Abuja, Kano, Port Harcourt, or anywhere else, Paymit lets you send money quickly and securely. Your funds reach loved ones safely and on time, making support easy and reliable whenever it's needed.",
    deliveryMethods: ["Bank Deposit"],
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
      "Bringing Ghana closer to you. Whether your loved ones are in Accra, Kumasi, Tamale, Takoradi, or anywhere across the country, Paymit makes sending money effortless, fast, and secure. Enjoy peace of mind knowing your funds arrive safely and promptly, empowering your family and friends with the support they deserve. With Paymit, transferring money is simple, reliable, and stress-free every time.",
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
      "Connecting you to Senegal effortlessly. Whether your loved ones are in Dakar, Saint-Louis, Thiès, or anywhere across the country, Paymit helps you send money quickly and securely. Your funds arrive safely and on time, providing support whenever it's needed most. Simple, reliable, and stress-free.",
    deliveryMethods: ["Mobile Wallet"],
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
      "Bringing Pakistan closer with every transfer. Whether you're sending love to Punjab, Sindh, Khyber Pakhtunkhwa, Balochistan, Islamabad, or anywhere across Pakistan, Paymit makes it easy, fast, and secure. Our platform ensures your money moves safely and reaches your loved ones exactly when they need it. No stress and no hassle.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup"],
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
      "Now India is just a click away. Move your money quickly and securely with no queues, no delays, and no hassle. Whether it's for family support or a special occasion, your funds reach home in minutes. Fast, simple, and reliable.",
    deliveryMethods: ["Bank Deposit", "Cash Pickup"],
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
      "Bangladesh is always within reach. With Paymit, your money moves fast and securely—straight to any bank, ready for cash pickup, or delivered to mobile wallets from Dhaka to Sylhet and beyond. Sending money to Bangladesh has never been easier.",
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
