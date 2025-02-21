const rooms = [
  {
    id: 1,
    name: 'Kwatera 1 na piętrze',
    url: '/kwatery/kwatera-1-pietro',
    slug: 'kwatera-1-pietro',
    personRange: '3',
    description:
      'Pokój dla 3 lub 4 Gości z dwoma łóżkami pojedynczymi i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera1/kwatera_pietro1_img1.webp',
        alt: 'Kwatera pracownicza na piętrze nr 1 - widok na przestronne pomieszczenie z łóżkami, idealne dla 3 osób.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera1/kwatera_pietro1_img2.webp',
        alt: 'Kwatera pracownicza na piętrze nr 1 - widok na łóżka i przestrzeń do przechowywania.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera1/kwatera_pietro1_img3.webp',
        alt: 'Kwatera pracownicza na piętrze nr 1 - widok na łazienkę z pełnym wyposażeniem.',
      },
      {
        id: 4,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera1/kwatera_pietro1_img4.webp',
        alt: 'Kwatera pracownicza na piętrze nr 1 - ogólny widok na pomieszczenie z łóżkami i meblami.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '3', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '3', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 2,
    name: 'Kwatera 2 na piętrze',
    url: '/kwatery/kwatera-2-pietro',
    slug: 'kwatera-2-pietro',
    personRange: '2',
    description:
      'Pokój dla 2 lub 3 Gości z jednym łóżkiem pojedynczym i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera2/kwatera_pietro2_img1.webp',
        alt: 'Przytulny pokój z dwoma łóżkami, szafą i biurkiem do pracy. Doskonałe miejsce na relaks po długim dniu pracy.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera2/kwatera_pietro2_img2.webp',
        alt: 'Kwatera pracownicza na piętrze nr 2 - widok na łóżka i przestrzeń do relaksu.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera2/kwatera_pietro2_img3.webp',
        alt: 'Kwatera pracownicza na piętrze nr 2 - widok na łazienkę z pełnym wyposażeniem.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '2', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '2', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 3,
    name: 'Kwatera 3 na piętrze',
    url: '/kwatery/kwatera-3-pietro',
    slug: 'kwatera-3-pietro',
    personRange: '2',
    description:
      'Pokój dla 2 lub 3 Gości z jednym łóżkiem pojedynczym i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera3/kwatera_pietro3_img1.webp',
        alt: 'Nowoczesna kwatera z dużym oknem, prywatną łazienką i szafkami nocnymi. Jasne wnętrze zapewnia komfortowy pobyt.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera3/kwatera_pietro3_img2.webp',
        alt: 'Kwatera pracownicza na piętrze nr 3 - widok na łóżka i przestrzeń do przechowywania.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera3/kwatera_pietro3_img3.webp',
        alt: 'Kwatera pracownicza na piętrze nr 3 - widok na łazienkę z pełnym wyposażeniem.',
      },
      {
        id: 4,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera3/kwatera_pietro3_img4.webp',
        alt: 'Kwatera pracownicza na piętrze nr 3 - ogólny widok na pomieszczenie z łóżkami i meblami.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '2', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '2', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 4,
    name: 'Kwatera 4 na piętrze',
    url: '/kwatery/kwatera-4-pietro',
    slug: 'kwatera-4-pietro',
    personRange: '2',
    description:
      'Pokój dla 2 Gości z dwoma łóżkami pojedynczymi. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera4/kwatera_pietro4_img1.webp',
        alt: 'Pokój z aneksem kuchennym, wyposażony w wygodne łóżka i strefę do spożywania posiłków. Idealne rozwiązanie dla dłuższych pobytów.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera4/kwatera_pietro4_img2.webp',
        alt: 'Kwatera pracownicza na piętrze nr 4 - widok na łóżka i przestrzeń do relaksu.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera4/kwatera_pietro4_img3.webp',
        alt: 'Kwatera pracownicza na piętrze nr 4 - widok na łazienkę z pełnym wyposażeniem.',
      },
      {
        id: 4,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera4/kwatera_pietro4_img4.webp',
        alt: 'Kwatera pracownicza na piętrze nr 4 - ogólny widok na pomieszczenie z łóżkami i meblami.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '2', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '2', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 5,
    name: 'Kwatera 5 na piętrze',
    url: '/kwatery/kwatera-5-pietro',
    slug: 'kwatera-5-pietro',
    personRange: '2',
    description: 'Pokój dla 2 Gości z dwoma łóżkami pojedynczymi.',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera5/kwatera_pietro5_img1.webp',
        alt: 'Komfortowa kwatera z ergonomicznym biurkiem i szybkim WiFi. Doskonałe warunki dla osób pracujących zdalnie.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '2', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '2', label: 'łóżka' },
    ],
  },

  {
    id: 6,
    name: 'Kwatera 1 na parterze',
    url: '/kwatery/kwatera-1-parter',
    slug: 'kwatera-1-parter',
    personRange: '3',
    description:
      'Pokój dla 3 lub 4 Gości z dwoma łóżkami pojedynczymi i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera1/kwatera_parter1_img1.webp',
        alt: 'Przestronny pokój z dwoma pojedynczymi i podwójnym łóżkiem, dodatkową sofą i miejscem na bagaż. Świetny wybór dla małych grup i rodzin.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera1/kwatera_parter1_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 1 - widok na łóżka i przestrzeń do przechowywania.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera1/kwatera_parter1_img3.webp',
        alt: 'Kwatera pracownicza na parterze nr 1 - widok na łazienkę z pełnym wyposażeniem.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '3', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '3', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 7,
    name: 'Kwatera 2 na parterze',
    url: '/kwatery/kwatera-2-parter',
    slug: 'kwatera-2-parter',
    personRange: '3',
    description:
      'Pokój dla 3 lub 4 Gości z dwoma łóżkami pojedynczymi i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera2/kwatera_parter2_img1.webp',
        alt: 'Pokój pracowniczy z dwoma pojedynczymi łóżkami i jednym piętrowym z własną łazienką. Funkcjonalna przestrzeń w spokojnej okolicy.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera2/kwatera_parter2_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 2 - widok na łóżka i przestrzeń do relaksu.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera2/kwatera_parter2_img3.webp',
        alt: 'Kwatera pracownicza na parterze nr 2 - widok na łazienkę z pełnym wyposażeniem.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '3', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '3', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 8,
    name: 'Kwatera 3 na parterze',
    url: '/kwatery/kwatera-3-parter',
    slug: 'kwatera-3-parter',
    personRange: '3',
    description:
      'Pokój dla 3 lub 4 Gości z dwoma łóżkami pojedynczymi i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera3/kwatera_parter3_img1.webp',
        alt: 'Jasna kwatera z dużą szafą, stolikiem i nowoczesnym wystrojem. Bliskość parkingu ułatwia pobyt osobom zmotoryzowanym.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera3/kwatera_parter3_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 3 - widok na łóżka i przestrzeń do przechowywania.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera3/kwatera_parter3_img3.webp',
        alt: 'Kwatera pracownicza na parterze nr 3 - widok na łazienkę z pełnym wyposażeniem.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '3', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '3', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 9,
    name: 'Kwatera 4 na parterze',
    url: '/kwatery/kwatera-4-parter',
    slug: 'kwatera-4-parter',
    personRange: '3',
    description:
      'Pokój dla 3 lub 4 Gości z dwoma łóżkami pojedynczymi i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera4/kwatera_parter4_img1.webp',
        alt: 'Elegancko urządzony pokój z wygodnym miejscem do wypoczynku i dostępem do ogrodu.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera4/kwatera_parter4_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 4 - widok na łóżka i przestrzeń do relaksu.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera4/kwatera_parter4_img3.webp',
        alt: 'Kwatera pracownicza na parterze nr 4 - widok na łazienkę z pełnym wyposażeniem.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '3', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '3', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 10,
    name: 'Kwatera 5 na parterze',
    url: '/kwatery/kwatera-5-parter',
    slug: 'kwatera-5-parter',
    personRange: '3',
    description:
      'Pokój dla 3 lub 4 Gości z dwoma łóżkami pojedynczymi i jednym piętrowym. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera5/kwatera_parter5_img1.webp',
        alt: 'Duża kwatera dla grupy pracowników, wyposażona w łóżka piętrowe i osobne szafki na rzeczy osobiste. Praktyczne rozwiązanie dla firm.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera5/kwatera_parter5_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 5 - widok na łóżka i przestrzeń do przechowywania.',
      },
      {
        id: 3,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera5/kwatera_parter5_img3.webp',
        alt: 'Kwatera pracownicza na parterze nr 5 - widok na łazienkę z pełnym wyposażeniem.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '3', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '3', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },

  {
    id: 11,
    name: 'Kwatera 6 na parterze',
    url: '/kwatery/kwatera-6-parter',
    slug: 'kwatera-6-parter',
    personRange: '6',
    description:
      'Pokój dla 6 lub 8 Gości z czterema łóżkami piętrowymi. Prywatna łazienka',
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera6/kwatera_parter6_img1.webp',
        alt: 'Przestronna kwatera na parterze dla 6 osób, z łazienką i wygodnymi łóżkami.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera6/kwatera_parter6_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 6 - widok na łóżka i przestrzeń do przechowywania.',
      },
    ],
    details: [
      { icon: 'RoomPersonIcon', value: '6', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '8', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },
];

export default rooms;
