import Link from "next/link";
import { cn } from "@/lib/utils";

/*
  PrimaryCta — link.com's primary CTA: medium (10–12px) radius, weight 500,
  weight-capped at 16px, with a 32px trailing icon tile (rx-1) whose NE-arrow
  nudges north-east on hover. The tile visualizes forward motion; the arrow
  tracks the gesture (150ms expo-out). One primary CTA per screen.
*/
type Props = {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
  full?: boolean;
  className?: string;
  arrowOnHover?: boolean;
} & Omit<React.ComponentProps<typeof Link>, "href">;

export function PrimaryCta({
  href,
  children,
  onDark = false,
  full = false,
  className,
  arrowOnHover = true,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group btn inline-flex h-12 items-center justify-center gap-3 rounded-xl px-6",
        "text-sm font-medium transition-colors duration-[var(--dur-fast)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
        onDark
          ? "bg-white text-[var(--brand-900)] hover:bg-white/90 focus-visible:ring-offset-[var(--brand-900)]"
          : "bg-[var(--brand-900)] text-white hover:bg-[var(--brand-850)] focus-visible:ring-offset-white",
        full ? "w-full" : "",
        className,
      )}
      {...rest}
    >
      <span>{children}</span>
      {arrowOnHover && (
        <span
          aria-hidden
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md",
            "transition-colors duration-[var(--dur-fast)]",
            onDark
              ? "bg-[var(--brand-900)] text-white"
              : "bg-white/12 text-white",
          )}
        >
          <svg
            className="arrow-nudge h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </span>
      )}
    </Link>
  );
}

/*
  SecondaryCta — quiet, equal-weight sibling used beside a primary action
  (link.com's paired Decline/Approve pattern and "How it works" companion).
  Borders over fills on light surfaces; 4% white hairline on dark surfaces.
*/
export function SecondaryCta({
  href,
  children,
  onDark = false,
  full = false,
  className,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "btn inline-flex h-12 items-center justify-center rounded-xl px-6",
        "text-sm font-medium transition-colors duration-[var(--dur-fast)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2",
        onDark
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-offset-[var(--brand-900)]"
          : "border border-[var(--neutral-300)] bg-white text-[var(--ink)] hover:border-[var(--neutral-400)] focus-visible:ring-offset-white",
        full ? "w-full" : "",
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}