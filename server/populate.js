import { readFile } from 'fs/promises';

import dotenv from 'dotenv';
dotenv.config();

import connectionToDB from './db/connectionToDB.js';
import Product from './schemas/Product.js';
const start = async () => {
  try {
    await connectionToDB(process.env.MONGO_URL);
    await Product.deleteMany();

    const jsonProducts = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    );
    await Product.create(jsonProducts);
    console.log('Success!!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
