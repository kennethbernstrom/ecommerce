import { db } from '../src/lib/db';
import { products } from '../src/lib/db/schema';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const nikeProducts = [
  {
    name: 'Nike Air Max 90',
    description: 'The Nike Air Max 90 stays true to its OG running roots with the iconic Waffle sole, stitched overlays and classic TPU details.',
    price: '119.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/air-max-90-mens-shoes-6n7J06.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 50,
  },
  {
    name: 'Nike Air Force 1',
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best.',
    price: '109.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-jBrhbr.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 75,
  },
  {
    name: 'Nike Dri-FIT T-Shirt',
    description: 'The Nike Dri-FIT T-Shirt delivers a soft feel, sweat-wicking performance and great range of motion to get you through your workout in total comfort.',
    price: '29.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/16a6a4e5-5b8c-4c2e-9b8a-8b8b8b8b8b8b/dri-fit-mens-fitness-t-shirt-HPdvJq.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 100,
  },
  {
    name: 'Nike React Infinity Run',
    description: 'The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run.',
    price: '159.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8439f823-86cf-4086-81d2-4f9ff9a66866/react-infinity-run-flyknit-mens-running-shoe-zX42Nc.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 30,
  },
  {
    name: 'Nike Sportswear Hoodie',
    description: 'The Nike Sportswear Club Fleece Hoodie is made with soft fleece fabric for all-day comfort.',
    price: '59.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3396ee3c-08cc-4ada-baa9-655f12e32071/sportswear-club-fleece-mens-pullover-hoodie-LcSw5q.png',
    category: 'Apparel',
    brand: 'Nike',
    stock: 60,
  },
  {
    name: 'Nike Air Jordan 1',
    description: 'The Air Jordan 1 Retro High OG lets you fly in the original that started it all.',
    price: '169.99',
    imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6da41fa-1be4-4ce5-9be8-5b7b8b8b8b8b/air-jordan-1-retro-high-og-mens-shoes-Pn0A0X.png',
    category: 'Shoes',
    brand: 'Nike',
    stock: 25,
  },
];

async function seed() {
  try {
    console.log('Seeding database...');
    
    await db.insert(products).values(nikeProducts);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seed();