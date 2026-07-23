import { cn } from "@/lib/utils";

/*
  Container — the master shell every section uses. Inspired by link.com's
  24-col subgrid, scaled down to a 12-col feel. Nested children stay aligned
  to the same rhythm because they all flow through this one container.
*/
export function Container({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        "max-w-[var(--layoutMaxWidth)]",
        "px-6 sm:px-6 lg:px-[var(--layoutMargin)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

type SectionVariant = "surface" | "offset" | "dark" | "wash";

export function Section({
  id,
  className,
  // "surface" = white  ·  "offset" = neutral-50 whisper-gray (Link BackgroundOffset)
  // "dark" = navy ink band  ·  "wash" = brand-25 whisper-blue hero tint
  variant = "surface",
  children,
  ...props
}: React.HTMLAttributes<HTMLElement> & {
  variant?: SectionVariant;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-[var(--headerNavOffset)]",
        variant === "offset" && "bg-[var(--neutral-50)]",
        variant === "wash" && "bg-[var(--brand-25)]",
        variant === "dark" &&
          "bg-[var(--brand-900)] text-white border-[var(--hairline-light)]",
        variant === "dark" ? "border-b" : "border-b border-[var(--neutral-200)]",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  highlight,
  description,
  align = "left",
  className,
}: {
  title: string;
  // Emphasis word gets brand-300 hue (upright, not italic) — link.com's "*wallet*" mechanism
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <h2 className="text-balance text-[clamp(2rem,4.5vw,3rem)] font-medium leading-[0.98] tracking-[-0.026em] text-[var(--ink)]">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-[var(--brand-300)]">{highlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-xl text-lg leading-relaxed text-[var(--neutral-600)]",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}