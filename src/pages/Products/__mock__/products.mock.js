const STATIC_IMAGES_PATH = '/images/guitarImages';

const mock = [
  {
    name: 'Floyd Rose 1',
    quantityAvailable: 10,
    category: 'Floyd',
    price: 1800.99,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/floyd-1/1200x395.jpg`,
        tags: 'les-paul',
        size: '1200x395',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-1/320x105.jpg`,
        tags: 'les-paul',
        size: '320x105',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-1/180x59.jpg`,
        tags: 'les-paul',
        size: '180x59',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Floyd Rose 2',
    quantityAvailable: 2,
    category: 'Floyd',
    price: 3005.12,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/floyd-2/1200x420.jpg`,
        tags: 'les-paul',
        size: '1200x420',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-2/320x112.jpg`,
        tags: 'les-paul',
        size: '320x112',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-2/180x63.jpg`,
        tags: 'les-paul',
        size: '180x63',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Fly in V',
    quantityAvailable: 2,
    category: 'Fly in V',
    price: 5425.11,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/flyInV/1200x395.jpg`,
        tags: 'les-paul',
        size: '1200x395',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/flyInV/320x127.jpg`,
        tags: 'les-paul',
        size: '320x127',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/flyInV/180x71.jpg`,
        tags: 'les-paul',
        size: '180x71',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Les paul model 1',
    quantityAvailable: 2,
    category: 'Les Paul',
    price: 5425.11,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/lespaul/1200x450.jpg`,
        tags: 'les-paul',
        size: '1200x450',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/lespaul/320x120.jpg`,
        tags: 'les-paul',
        size: '320x120',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/lespaul/180x68.jpg`,
        tags: 'les-paul',
        size: '180x68',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Floyd Rose 1',
    quantityAvailable: 10,
    category: 'Floyd',
    price: 1800.99,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/floyd-1/1200x395.jpg`,
        tags: 'les-paul',
        size: '1200x395',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-1/320x105.jpg`,
        tags: 'les-paul',
        size: '320x105',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-1/180x59.jpg`,
        tags: 'les-paul',
        size: '180x59',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Floyd Rose 2',
    quantityAvailable: 2,
    category: 'Floyd',
    price: 3005.12,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/floyd-2/1200x420.jpg`,
        tags: 'les-paul',
        size: '1200x420',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-2/320x112.jpg`,
        tags: 'les-paul',
        size: '320x112',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/floyd-2/180x63.jpg`,
        tags: 'les-paul',
        size: '180x63',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Fly in V',
    quantityAvailable: 2,
    category: 'Fly in V',
    price: 5425.11,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/flyInV/1200x395.jpg`,
        tags: 'les-paul',
        size: '1200x395',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/flyInV/320x127.jpg`,
        tags: 'les-paul',
        size: '320x127',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/flyInV/180x71.jpg`,
        tags: 'les-paul',
        size: '180x71',
        type: 'THUMBNAIL',
      },
    ]
  },
  {
    name: 'Les paul model 1',
    quantityAvailable: 2,
    category: 'Les Paul',
    price: 5425.11,
    description: 'Very usefull guitar',
    images: [
      {
        path: `${STATIC_IMAGES_PATH}/lespaul/1200x450.jpg`,
        tags: 'les-paul',
        size: '1200x450',
        type: 'FULL',
      },
      {
        path: `${STATIC_IMAGES_PATH}/lespaul/320x120.jpg`,
        tags: 'les-paul',
        size: '320x120',
        type: 'LIST',
      },
      {
        path: `${STATIC_IMAGES_PATH}/lespaul/180x68.jpg`,
        tags: 'les-paul',
        size: '180x68',
        type: 'THUMBNAIL',
      },
    ]
  },
];

const singleProductSample = {
  name: 'Les paul model 1',
  quantityAvailable: 2,
  category: 'Les Paul',
  price: 5425.11,
  description: 'Very usefull guitar',
  images: [
    {
      path: `${STATIC_IMAGES_PATH}/lespaul/1200x450.jpg`,
      tags: 'les-paul',
      size: '1200x450',
      type: 'FULL',
    },
    {
      path: `${STATIC_IMAGES_PATH}/lespaul/320x120.jpg`,
      tags: 'les-paul',
      size: '320x120',
      type: 'LIST',
    },
    {
      path: `${STATIC_IMAGES_PATH}/lespaul/180x68.jpg`,
      tags: 'les-paul',
      size: '180x68',
      type: 'THUMBNAIL',
    },
  ]
};

export default { products: mock, product: singleProductSample };