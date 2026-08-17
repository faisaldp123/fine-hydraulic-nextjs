import { siteConfig } from "@/lib/data";

export function WhatsAppButton() {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  const message = encodeURIComponent("Hello Fine Hydraulic, I would like to enquire about a heavy-equipment part.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fine Hydraulic on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-graphite/30 transition-transform hover:scale-110 focus-visible:outline-white sm:bottom-7 sm:right-7"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor">
        <path d="M16.02 3C8.84 3 3 8.84 3 16.02c0 2.3.6 4.54 1.75 6.52L3 29l6.64-1.72A13 13 0 1 0 16.02 3Zm0 23.64a10.56 10.56 0 0 1-5.38-1.47l-.38-.23-3.94 1.02 1.05-3.84-.25-.4a10.58 10.58 0 1 1 8.9 4.92Zm5.8-7.92c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.52-.16-.74.16-.22.32-.85 1.06-1.04 1.28-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.59-1.91-1.78-2.23-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.4-.3.32-1.14 1.12-1.14 2.73s1.17 3.17 1.33 3.39c.16.21 2.29 3.49 5.54 4.9.77.33 1.37.53 1.84.68.77.24 1.47.21 2.02.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.13-.29-.21-.61-.37Z" />
      </svg>
      <span className="sr-only">WhatsApp us</span>
    </a>
  );
}
