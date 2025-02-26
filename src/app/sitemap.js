import rooms from './data/rooms';

export default async function sitemap() {
  const baseUrl = 'https://roomwork.pl/';

  const urls = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/kwatery`, lastModified: new Date() },
    { url: `${baseUrl}/kontakt`, lastModified: new Date() },
    // { url: `${baseUrl}/blog`, lastModified: new Date() },
    ...rooms.map((room) => ({
      url: `${baseUrl}/kwatery/${room.slug}`,
      lastModified: isValidDate(room.updatedAt)
        ? new Date(room.updatedAt)
        : new Date(),
    })),
  ];

  return urls;
}

// Funkcja sprawdzająca poprawność daty
function isValidDate(date) {
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime()); // Sprawdza, czy data jest poprawna
}
