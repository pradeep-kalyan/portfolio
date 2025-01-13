/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "lavishly-yours": ["Lavishly Yours", "serif"],
        "dancing-script": ["Dancing Script", "serif"],
        audiowide: ["Audiowide", "serif"],
        electrolize: ["Electrolize", "serif"],
        cookie: ["Cookie", "serif"],
        "courier-prime": ["Courier Prime", "serif"],
        caveat: ["Caveat", "serif"],
        "ibm-plex-sans": ["IBM Plex Sans", "serif"],
        "great-vibes": ["Great Vibes", "serif"],
      },
    },
  },
  plugins: [],
};
