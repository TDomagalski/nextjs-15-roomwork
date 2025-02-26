/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Wymusza generowanie statycznych plików
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
