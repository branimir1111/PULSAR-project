import Product from '../schemas/Product.js';
import { StatusCodes } from 'http-status-codes';
import { NotFoundError } from '../errorsCustom/index.js';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import cloud from 'cloudinary';
const cloudinary = cloud.v2;

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
  res.send('update Product');

  // const { id: productId } = req.params;
  // const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
  //   new: true,
  //   runValidators: true,
  // });
  // if (!product) {
  //   throw new CustomError.NotFoundError(
  //     `There is no product with id:${productId}`
  //   );
  // }
  // res.status(StatusCodes.OK).json({ product });
};

const deleteProduct = async (req, res) => {
  res.send('delete Product');

  // const { id: productId } = req.params;
  // const product = await Product.findOne({ _id: productId });
  // if (!product) {
  //   throw new CustomError.NotFoundError(
  //     `There is no product with id:${productId}`
  //   );
  // }
  // await product.remove();
  // res.status(StatusCodes.OK).json({ msg: 'Success! Product removed!' });
};

const uploadImage = async (req, res) => {
  let productImage = req.files.image;
  console.log(productImage);
  // const result = await cloudinary.uploader.upload(
  //   req.files.image.tempFilePath,
  //   {
  //     use_filename: true,
  //     folder: 'fileUpload',
  //   }
  // );
  // fs.unlinkSync(req.files.image.tempFilePath);
  // res
  //   .status(StatusCodes.OK)
  //   .json({ image: { src: `/uploads/${result.secure_url}` } });
  // if (!req.files) {
  //   throw new CustomError.BadRequestError(`No file uploaded`);
  // }
  // if (!req.files.image.mimetype.startsWith('image')) {
  //   throw new CustomError.BadRequestError(`Please upload an image`);
  // }
  // const maxSize = 1024 * 1024;
  // if (req.files.image.size > maxSize) {
  //   throw new CustomError.BadRequestError(
  //     `Please upload image smaller than 1MB`
  //   );
  // }

  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);
  const imagePath = path.join(
    __dirname,
    `../uploadedPictures/${productImage.name}`
  );
  await productImage.mv(imagePath);
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
