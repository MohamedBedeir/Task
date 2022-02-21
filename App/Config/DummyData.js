import Images from "./Images";

const DummyData = {
  TAGS: [
    {
      name: 'Breakfast',
      image:
        'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/breakfast.png?alt=media&token=9ddb1cc2-8e2f-46e7-99f1-9a6e4e143130',
    },
    {
      name: 'Sandwich',
      image:
        'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/sandwich.png?alt=media&token=24612ee9-cb30-4b4e-a9ea-8d4a5b7e0bf5',
    },
    {
      name: 'Pizza',
      image:
        'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/pizza.png?alt=media&token=9c581ae6-889d-4bf2-b796-3e29c62bcb20',
    },
    {
      name: 'Breakfast',
      image:
        'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/breakfast.png?alt=media&token=9ddb1cc2-8e2f-46e7-99f1-9a6e4e143130',
    },
  ],
  DATA: [
    {
      name: 'Pizza Hut',
      logo: 'https://ty-dashboard.s3.amazonaws.com/unnamed%20%281%29-1640219353386.jpg',
      cover: Images.cover,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      branches: [
        {
          name: 'Nasr City',
        },
        {
          name: 'Masr Al Jadidah',
        },
        {
          name: 'Maadi',
        },
        {
          name: 'Haram',
        },
      ],
      items: [
        {
          name: 'small sie pizza',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
        {
          name: 'VIggie pizza',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: 'price On selection',
          in_cart: false,
        },
        {
          name: 'Cheese pizza',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
        {
          name: 'VIggie pizza',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: 'price On selection',
          in_cart: false,
        },
      ],
      tags: [
        {
          name: 'Sandwich',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/sandwich.png?alt=media&token=24612ee9-cb30-4b4e-a9ea-8d4a5b7e0bf5',
        },
        {
          name: 'Burger',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/burger.jpg?alt=media&token=9503ac54-fc9f-47eb-92c7-548ee6234c23',
        },
      ],
    },
    {
      name: "McDonald's",
      logo: 'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/mcdonalds-logo.png?alt=media&token=2be2db3e-e6e3-4625-9ff0-4ca7e8756e1b',
      cover: Images.cover,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      branches: [
        {
          name: 'Nasr City',
        },
        {
          name: 'Masr Al Jadidah',
        },
        {
          name: 'Maadi',
        },
        {
          name: 'Haram',
        },
      ],
      items: [
        {
          name: 'double burger',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
        {
          name: 'combo burger',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: 'price On selection',
          in_cart: true,
        },
        {
          name: 'Cheese burger',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
      ],
      tags: [
        {
          name: 'Pizza',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/pizza.png?alt=media&token=9c581ae6-889d-4bf2-b796-3e29c62bcb20',
        },
        {
          name: 'Breakfast',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/breakfast.png?alt=media&token=9ddb1cc2-8e2f-46e7-99f1-9a6e4e143130',
        },
        {
          name: 'Sandwich',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/sandwich.png?alt=media&token=24612ee9-cb30-4b4e-a9ea-8d4a5b7e0bf5',
        },
        {
          name: 'Burger',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/burger.jpg?alt=media&token=9503ac54-fc9f-47eb-92c7-548ee6234c23',
        },
      ],
    },
    {
      name: "Hardee's",
      logo: 'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/hardees-logo.png?alt=media&token=2834eb58-30e0-44e8-a935-29572994a486',
      cover: Images.cover,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      branches: [
        {
          name: 'Nasr City',
        },
        {
          name: 'Masr Al Jadidah',
        },
      ],
      items: [
        {
          name: 'combo sandawich',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
        {
          name: 'double cheese sandawich',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: 'price On selection',
          in_cart: true,
        },
        {
          name: 'small size combo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '120 LE.',
          in_cart: true,
        },
      ],
      tags: [
        {
          name: 'Pizza',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/pizza.png?alt=media&token=9c581ae6-889d-4bf2-b796-3e29c62bcb20',
        },
        {
          name: 'Breakfast',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/breakfast.png?alt=media&token=9ddb1cc2-8e2f-46e7-99f1-9a6e4e143130',
        },
        {
          name: 'Beef',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/beef.jpg?alt=media&token=acf5aaa6-1748-4083-a091-c3079b543cc6',
        },
        {
          name: 'Fast Food',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/fast-food.jpg?alt=media&token=2c626623-98d5-4a5a-b523-cfb142a2b2ff',
        },
      ],
    },
    {
      name: 'Koshary El Tahrir',
      logo: 'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/koshary-tahrir-logo.jpg?alt=media&token=4b532e9e-ce6b-4275-906b-2ad94b0c30c5',
      cover: Images.cover,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      branches: [
        {
          name: 'Nasr City',
        },
        {
          name: 'Masr Al Jadidah',
        },
      ],
      items: [
        {
          name: 'super item',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: '60 LE.',
          in_cart: true,
        },
      ],
      tags: [
        {
          name: 'Breakfast',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/breakfast.png?alt=media&token=9ddb1cc2-8e2f-46e7-99f1-9a6e4e143130',
        },
        {
          name: 'Beef',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/beef.jpg?alt=media&token=acf5aaa6-1748-4083-a091-c3079b543cc6',
        },
        {
          name: 'Fast Food',
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/fast-food.jpg?alt=media&token=2c626623-98d5-4a5a-b523-cfb142a2b2ff',
        },
      ],
    },
  ],
};
export default DummyData;
