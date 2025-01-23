/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'], // Obsługiwane formaty obrazów
  },

  sassOptions: {
    additionalData: `$var: red;`,
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
