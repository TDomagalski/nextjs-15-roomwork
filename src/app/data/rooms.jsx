const rooms = [
  {
    id: 1,
    name: 'Kwatera 1 na piętrze',
    url: '/kwatery/kwatera-1-pietro',
    slug: 'kwatera-1-pietro',
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
    personRange: '3',
    description:
      'Przestronna kwatera na piętrze dla 3 osób, z łazienką i wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera2/kwatera_pietro2_img1.webp',
        alt: 'Kwatera pracownicza na piętrze nr 2 - widok na przytulne pomieszczenie z łóżkami dla 2 osób.',
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
    personRange: '2',
    description:
      'Przytulna kwatera na piętrze dla 2 osób, z łazienką i wygodnymi łóżkami.',
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

    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera3/kwatera_pietro3_img1.webp',
        alt: 'Kwatera pracownicza na piętrze nr 3 - widok na przestronne pomieszczenie z łóżkami dla 2 osób.',
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
    personRange: '2',
    description:
      'Komfortowa kwatera na piętrze dla 2 osób, z łazienką i wygodnymi łóżkami.',
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

    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera4/kwatera_pietro4_img1.webp',
        alt: 'Kwatera pracownicza na piętrze nr 4 - widok na przytulne pomieszczenie z łóżkami dla 2 osób.',
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
    personRange: '2',
    description:
      'Przytulna kwatera na piętrze dla 2 osób, z łazienką i wygodnymi łóżkami.',
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

    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/pietro/kwatera5/kwatera_pietro5_img1.webp',
        alt: 'Kwatera pracownicza na piętrze nr 5 - widok na przestronne pomieszczenie z łóżkami dla 2 osób.',
      },
    ],
    personRange: '2',
    description:
      'Komfortowa kwatera na piętrze dla 2 osób, z wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera1/kwatera_parter1_img1.webp',
        alt: 'Kwatera pracownicza na parterze nr 1 - widok na przestronne pomieszczenie z łóżkami dla 3 osób.',
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
    personRange: '3',
    description:
      'Przestronna kwatera na parterze dla 3 osób, z łazienką i wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera2/kwatera_parter2_img1.webp',
        alt: 'Kwatera pracownicza na parterze nr 2 - widok na przytulne pomieszczenie z łóżkami dla 3 osób.',
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
    personRange: '3',
    description:
      'Przytulna kwatera na parterze dla 3 osób, z łazienką i wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera3/kwatera_parter3_img1.webp',
        alt: 'Kwatera pracownicza na parterze nr 3 - widok na przestronne pomieszczenie z łóżkami dla 3 osób.',
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
    personRange: '3',
    description:
      'Przestronna kwatera na parterze dla 3 osób, z łazienką i wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera4/kwatera_parter4_img1.webp',
        alt: 'Kwatera pracownicza na parterze nr 4 - widok na przytulne pomieszczenie z łóżkami dla 3 osób.',
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
    personRange: '3',
    description:
      'Przytulna kwatera na parterze dla 3 osób, z łazienką i wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera5/kwatera_parter5_img1.webp',
        alt: 'Kwatera pracownicza na parterze nr 5 - widok na przestronne pomieszczenie z łóżkami dla 3 osób.',
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
    personRange: '3',
    description:
      'Przestronna kwatera na parterze dla 3 osób, z łazienką i wygodnymi łóżkami.',
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
    images: [
      {
        id: 1,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera6/kwatera_parter6_img1.webp',
        alt: 'Kwatera pracownicza na parterze nr 6 - widok na przestronne pomieszczenie z łóżkami dla 6 osób.',
      },
      {
        id: 2,
        url: '/kwatery/kwatery_pracownicze/parter/kwatera6/kwatera_parter6_img2.webp',
        alt: 'Kwatera pracownicza na parterze nr 6 - widok na łóżka i przestrzeń do przechowywania.',
      },
    ],
    personRange: '6',
    description:
      'Przestronna kwatera na parterze dla 6 osób, z łazienką i wygodnymi łóżkami.',
    details: [
      { icon: 'RoomPersonIcon', value: '6', label: 'osoby' },
      { icon: 'RoomBedIcon', value: '8', label: 'łóżka' },
      { icon: 'RoomBathroomIcon', value: '1', label: 'łazienka' },
    ],
  },
];

export default rooms;
