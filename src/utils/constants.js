// Site Configuration
export const SITE_CONFIG = {
  name: 'Broches',
  tagline: 'Каждая брошь создается с душой',
  description: 'Уникальные броши из биссера, созданные с любовью и вниманием к деталям',
  email: 'info@broshki-mama.ru',
  telegram: '@IvanAbramoov',
  telegramLink: 'https://t.me/IvanAbramoov',
  instagram: '#',
  copyright: '2024 Все права защищены.'
};

export const TELEGRAM_LINK = SITE_CONFIG.telegramLink;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const PRODUCTS = [
  {
    id: 1,
    name: 'Брошь "Тюльпаны"',
    description: 'Нежная брошь с цветами тюльпанов, выполненная в весенних тонах',
    image: '/images/catalog/tulips/image.png',
    price: '4500 ₽'
  },
  {
    id: 2,
    name: 'Брошь "Сова"',
    description: 'Мудрая сова с детализированными перьями и выразительными глазами',
    image: '/images/catalog/owl/image.png',
    price: '5500 ₽'
  },
  {
    id: 3,
    name: 'Брошь "Гранат"',
    description: 'Сочная брошь с гранатом, передающая богатство осенних красок',
    image: '/images/catalog/pomegrande/image.png',
    price: '5000 ₽'
  },
  {
    id: 4,
    name: 'Брошь "Стрекоза"',
    description: 'Изящная стрекоза с тонкими крыльями и переливающимися оттенками',
    image: '/images/catalog/dragonfly/image.png',
    price: '4800 ₽'
  },
  {
    id: 5,
    name: 'Брошь "Жук"',
    description: 'Яркий жук с металлическим блеском и реалистичными деталями',
    image: '/images/catalog/bug/image.png',
    price: '4200 ₽'
  },
  {
    id: 6,
    name: 'Брошь "Кленовый лист"',
    description: 'Осенний кленовый лист с натуральными прожилками и теплыми тонами',
    image: '/images/catalog/maple/image.png',
    price: '3800 ₽'
  }
];
