interface FooterLink {
  label: string;
  openInNewTab: boolean;
  href: string;
};

const footerLinks: FooterLink[] = [
  {
    label: "github",
    openInNewTab: true,
    href: "https://github.com/brandonnorsworthy/personal-site"
  },
  {
    label: "design",
    openInNewTab: true,
    href: "https://www.figma.com/file/SN39CrloYz54AqNiWd8TeW/Personal-Site?type=design&mode=design&t=6fZHfx3OEvGxBCFC-1"
  },
  {
    label: "linked in",
    openInNewTab: true,
    href: "https://www.linkedin.com/in/brandonnorsworthy/"
  },
];

export default footerLinks;