import Product from '../schemas/Product.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errorsCustom/index.js';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cloud from 'cloudinary';
const cloudinary = cloud.v2;
import fs from 'fs';

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

const createProduct = async (req, res) => {
  req.body.user = req.user.userId;
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const updateProduct = async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    throw new CustomError.NotFoundError(
      `There is no product with id:${productId}`
    );
  }
  res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  res.send('delete Product');

  const { id: productId } = req.params;
  const product = await Product.findOne({ _id: productId });
  if (!product) {
    throw new CustomError.NotFoundError(
      `There is no product with id:${productId}`
    );
  }
  await product.remove();
  res.status(StatusCodes.OK).json({ msg: 'Success! Product removed!' });
};

const uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: 'shopProjectFiles',
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });

  // this is when we want to store images on our server
  // let productImage = req.files.image;
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = path.dirname(__filename);

  // const imagePath = path.join(
  //   __dirname,
  //   `../uploadedPictures/${productImage.name}`
  // );
  // await productImage.mv(imagePath);
  // res
  //   .status(StatusCodes.OK)
  //   .json({ image: { src: `/uploadedPictures/${req.files.image.name}` } });
};

export {
  getAllProducts,
  getSingleProduct,
  getFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadImage,
};
