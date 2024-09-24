const services = [
  {
    id: 1,
    name: 'Photography',
    description:
      'Professional photography, including portraits, wedding shoots, and other events.',
    price: { amount: 1300, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 2,
    name: 'Video',
    description:
      'Event video shooting, including wedding ceremonies, corporate events, and other occasions.',
    price: { amount: 1900, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 3,
    name: 'Editing',
    description:
      'Professional video editing, including editing and processing video materials.',
    price: { amount: 1500, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 4,
    name: 'Photo Editing',
    description:
      'Creating compositions from multiple photos using graphic effects.',
    price: { amount: 1700, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 5,
    name: 'Video Editing',
    description: 'Editing videos with special effects and transitions.',
    price: { amount: 1800, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 6,
    name: 'Adding Special Effects',
    description:
      'Adding special effects to video materials to make them more appealing.',
    price: { amount: 900, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 7,
    name: 'Photo Retouching',
    description:
      'Professional photo retouching, including color correction and retouching.',
    price: { amount: 500, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 8,
    name: 'Video Quality Improvement',
    description: 'Editing and enhancing the quality of video materials.',
    price: { amount: 1200, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 9,
    name: 'Photo Collage',
    description: 'Creating collages from photos that tell a story.',
    price: { amount: 800, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 10,
    name: 'Photo Printing',
    description: 'Printing photos in various formats on high-quality paper.',
    price: { amount: 300, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 11,
    name: 'Long Video',
    description:
      'Recording long videos of events such as concerts or sports competitions.',
    price: { amount: 1200, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 12,
    name: 'Studio Rental',
    description: 'Renting a professional studio with necessary equipment.',
    price: { amount: 1700, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 13,
    name: 'Photo Filtering',
    description: 'Filtering photos to enhance their aesthetics.',
    price: { amount: 1300, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 14,
    name: 'Outdoor Photography',
    description: 'Shooting photos outdoors, in nature, or in urban settings.',
    price: { amount: 1900, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 15,
    name: 'Studio Photography',
    description:
      'Professional studio photography using professional equipment.',
    price: { amount: 2000, currencyCode: 'UAH', symbol: '₴' },
    category: 'Photography',
  },
  {
    id: 16,
    name: 'Wedding Video',
    description:
      'Professional video shooting of wedding ceremonies with editing.',
    price: { amount: 23000, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 17,
    name: 'Interactive Video',
    description:
      'Creating interactive videos that allow the viewer to interact with the content.',
    price: { amount: 1700, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 18,
    name: 'Corporate Video',
    description:
      'Shooting corporate events and creating promotional videos for businesses.',
    price: { amount: 23999, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 19,
    name: 'Educational Video',
    description:
      'Creating educational videos for schools, universities, and courses.',
    price: { amount: 12000, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 20,
    name: 'Promo Video',
    description: 'Creating promotional videos for products or services.',
    price: { amount: 14900, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 21,
    name: 'Video Business Card',
    description: 'A short video to present a company or individual.',
    price: { amount: 6000, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 22,
    name: 'Long-Term Shooting',
    description:
      'Shooting events over a long period with subsequent processing.',
    price: { amount: 14200, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
  {
    id: 23,
    name: 'Video for Photo Studio',
    description: 'Creating promotional videos for photo studios.',
    price: { amount: 5500, currencyCode: 'UAH', symbol: '₴' },
    category: 'Video',
  },
];

export const fetchServices = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 1000);
  });
};
