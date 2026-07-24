export type NavItem = {
  label: string;
  href: string;
};

export type NavDropdownItem = {
  label: string;
  href: string;
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
      { label: "Nigeria", href: "/send-money/nigeria" },
      { label: "Ghana", href: "/send-money/ghana" },
      { label: "Gambia", href: "/send-money/gambia" },
      { label: "Cameroon", href: "/send-money/cameroon" },
      { label: "Senegal", href: "/send-money/senegal" },
      { label: "Zambia", href: "/send-money/zambia" },
      { label: "Pakistan", href: "/send-money/pakistan" },
      { label: "India", href: "/send-money/india" },
      { label: "Bangladesh", href: "/send-money/bangladesh" },
    ],
  },
  { label: "Mobile App", href: "/#mobile-app-section" },
];

export function isDropdown(item: NavItem | NavDropdown): item is NavDropdown {
  return (item as NavDropdown).items !== undefined;
}