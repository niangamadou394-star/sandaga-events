// Configuration centrale — tout modifier ici, jamais dans les composants
export const config = {
  whatsapp: {
    numero: import.meta.env.VITE_WHATSAPP_NUMERO ?? '33600000000',
    messageClient: 'Bonjour Sandaga Events, je prépare une cérémonie et j\'aimerais des prestataires.',
    messagePrestataire: 'Bonjour Sandaga Events, je suis prestataire et je souhaite rejoindre votre sélection.',
  },
  instagram: import.meta.env.VITE_INSTAGRAM ?? 'sandaga.events',
  linkedin: import.meta.env.VITE_LINKEDIN ?? 'sandaga-events',
  tiktok: import.meta.env.VITE_TIKTOK ?? 'sandaga.events',
  siteUrl: import.meta.env.VITE_SITE_URL ?? 'https://sandaga-events.vercel.app',
  objectifMensuelDefaut: 500,
}

export function lienWhatsApp(message: string): string {
  return `https://wa.me/${config.whatsapp.numero}?text=${encodeURIComponent(message)}`
}

export const whatsAppClient = () => lienWhatsApp(config.whatsapp.messageClient)
export const whatsAppPrestataire = () => lienWhatsApp(config.whatsapp.messagePrestataire)
export const whatsAppContact = (numero: string, message = '') =>
  `https://wa.me/${numero.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
