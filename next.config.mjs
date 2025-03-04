/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Zapewnia, że Next.js wygeneruje pliki jako /kontakt/index.html zamiast kontakt.html
  images: {
    formats: ['image/webp'], // Obsługiwane formaty obrazów
    unoptimized: true, // Konieczne dla hostingu bez optymalizacji obrazków (np. SeoHost)
  },

  sassOptions: {
    additionalData: `$var: red;`,
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
