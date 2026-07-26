"use client";

const FEATURES = [
  {
    title: "Best Rates, Bigger Smiles",
    description:
      "Avg. customers save £2.13 for every £100 sent vs market average.",
    image: "/images/best-rates.png",
  },
  {
    title: "Speed-to-Hand",
    description:
      "Avg. transfer reaches recipient in ~1 minute. Fast, reliable, and seamless.",
    image: "/images/faster-rates.png",
  },
  {
    title: "Repeat Love Rate",
    description:
      "Over 70% of customers make another transfer within the same month.",
    image: "/images/repeat-rates.png",
  },
];

export function WhyChoosePaymit() {
  return (
    <section
      className="relative mx-auto w-full"
      style={{
        maxWidth: "var(--layoutMaxWidth)",
        padding: "var(--sectionPaddingY) var(--layoutMargin)",
      
      }}
    >
      {/* Section heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2
          className="text-[36px] font-bold leading-[1.1] tracking-[-1px] text-black md:text-[48px] md:tracking-[-1.4px]"
          style={{ textWrap: "balance" }}
        >
          Why Choose Paymit
        </h2>
        <p className="mt-4 text-[16px] font-medium leading-[26px] text-black/60 md:text-[18px]">
          Fast, affordable, and secure money transfers trusted by thousands.
        </p>
      </div>

      {/* Cards grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="group flex flex-col overflow-hidden rounded-[var(--borderRadiusMd)] border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderColor: "var(--colorBorderLight)" }}
          >
            {/* Text block */}
            <div className="px-7 pt-8">
              <h3 className="text-[22px] font-semibold leading-[1.2] tracking-[-0.5px] text-[var(--colorTextPrimary)]">
                {feature.title}
              </h3>
              <p className="mt-3 text-[15px] font-normal leading-[1.6] text-[var(--colorNeutral600)]">
                {feature.description}
              </p>
            </div>

            {/* Illustration */}
            <div className="relative mt-6 flex flex-1 items-end justify-center overflow-hidden px-4 pb-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={feature.image}
                alt={feature.title}
                className="h-auto w-full max-w-[220px] object-contain"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}