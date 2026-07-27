export type NavItem = {
  label: string;
  href: string;
};

export type NavDropdownItem = {
  label: string;
  href: string;
  flag?: string;
};

export type NavDropdown = {
  label: string;
  items: NavDropdownItem[];
};

export const NAV_LINKS: (NavItem | NavDropdown)[] = [
  { label: "About Us", href: "/about-us" },
  { label: "Careers", href: "/careers" },
  { label: "Promotions", href: "/promotions" },
  {
    label: "Send Money To",
    items: [
      { label: "Nigeria", href: "/send-money/nigeria", flag: "ng" },
      { label: "Ghana", href: "/send-money/ghana", flag: "gh" },
      { label: "Gambia", href: "/send-money/gambia", flag: "gm" },
      { label: "Cameroon", href: "/send-money/cameroon", flag: "cm" },
      { label: "Senegal", href: "/send-money/senegal", flag: "sn" },
      { label: "Zambia", href: "/send-money/zambia", flag: "zm" },
      { label: "Pakistan", href: "/send-money/pakistan", flag: "pk" },
      { label: "India", href: "/send-money/india", flag: "in" },
      { label: "Bangladesh", href: "/send-money/bangladesh", flag: "bd" },
    ],
  },
  { label: "Mobile App", href: "/mobile-app" },
];

export function isDropdown(item: NavItem | NavDropdown): item is NavDropdown {
  return (item as NavDropdown).items !== undefined;
}