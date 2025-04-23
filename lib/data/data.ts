export interface Link {
  name: string
  path: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface ContactInfo {
  type: string
  text: string
  icon: string
}

export interface Section {
  title: string
}

export interface FooterSections {
  quickLinks: Section
  contactUs: Section
}

export interface CompanyInfo {
  name: string
  description: string
  logo: string
  copyright: string
}

export const links: Link[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

export const footerSections: FooterSections = {
  quickLinks: {
    title: "Quick Links",
  },
  contactUs: {
    title: "Contact Us",
  },
}

export const socialLinks: SocialLink[] = [
  {
    label: "Github",
    href: "https://github.com/herrgallardo",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/antonio-gallardo-girela/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/antonio.gallardo",
    icon: "facebook",
  },
]

export const contactInfo: ContactInfo[] = [
  {
    type: "email",
    text: "antonio@frontender.se",
    icon: "email",
  },
  {
    type: "phone",
    text: "+46739930848",
    icon: "phone",
  },
  {
    type: "address",
    text: "Vårvädersvägen 6A lgh 1502 \n222 27 Lund\nSweden",
    icon: "location",
  },
]

export const companyInfo: CompanyInfo = {
  name: "Frontender",
  description:
    "Professional web developer specializing in modern, responsive web applications and user-friendly interfaces.",
  logo: "/logo/logo.png",
  copyright: "All rights reserved.",
}
