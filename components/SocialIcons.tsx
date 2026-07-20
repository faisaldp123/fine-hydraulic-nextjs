export function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.22 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.22 22 17.08 22 12.06Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.06 1 2.5 1s2.48 1.12 2.48 2.5ZM.24 8.25h4.5V23H.24V8.25ZM8.24 8.25h4.31v2.01h.06c.6-1.13 2.07-2.33 4.26-2.33 4.55 0 5.39 3 5.39 6.9V23h-4.5v-6.29c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.64-2.42 3.33V23h-4.5V8.25Z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 12s0-3.6-.46-5.32a2.9 2.9 0 0 0-2.05-2.05C18.77 4.17 12 4.17 12 4.17s-6.77 0-8.49.46A2.9 2.9 0 0 0 1.46 6.68C1 8.4 1 12 1 12s0 3.6.46 5.32a2.9 2.9 0 0 0 2.05 2.05c1.72.46 8.49.46 8.49.46s6.77 0 8.49-.46a2.9 2.9 0 0 0 2.05-2.05C23 15.6 23 12 23 12Z M9.75 15.02V8.98L15.5 12l-5.75 3.02Z" fillRule="evenodd" />
    </svg>
  );
}
