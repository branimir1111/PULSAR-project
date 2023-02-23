import Product from '../schemas/Product.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errorsCustom/index.js';

const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ numOfProducts: products.length, products });
};

const getFeaturedProducts = async (req, res) => {
  const featuredProducts = await Product.find({ featured: true });
  res.status(StatusCodes.OK).json({ featuredProducts });
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  const singleProduct = await Product.findOne({ _id: id });
  if (!singleProduct) {
    throw new NotFoundError(`There is no product with id:${id}`);
  }
  res.status(StatusCodes.OK).json({ singleProduct });
};

export { getAllProducts, getSingleProduct, getFeaturedProducts };
