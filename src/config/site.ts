export interface SocialLink {
  name: string;
  href: string;
}

const siteUrl = import.meta.env.PUBLIC_SITE_URL ?? 'https://luminacreative.tech';
const whatsappNumber = import.meta.env.PUBLIC_WHATSAPP_NUMBER ?? '6287762951844';

export const siteConfig = {
  name: 'Lumina Creative Studio',
  shortName: 'Lumina',
  url: siteUrl,
  email: 'contact@luminacreative.tech',
  phone: {
    display: '+62 877-6295-1844',
    whatsapp: whatsappNumber,
  },
  whatsappMessage: 'Hi Lumina Creative Studio, I would like to discuss a project.',
  defaultOgImage: '/lumina-logo.png',
  socials: [] as SocialLink[],
};

export function whatsappUrl(): string {
  return `https://wa.me/${siteConfig.phone.whatsapp}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;
}
