import { StatusCodes } from "http-status-codes";
import Category from "../model/Category.js";
import { Product } from "../model/product.js";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    const response = await Category.create({
      name: req.body.name,
      slug: slugify(req.body.name, "_"),
    });

    return res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const get = async (req, res) => {
  try {
    const categorys = await Category.find({});
    if (categorys.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không có sản phẩm nào!" });
    }
    return res.status(StatusCodes.OK).json(categorys);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const getId = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    const categorys = await Category.findOne({ _id: req.params.id });
    console.log(req.params.id);
    if (categorys.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "category không tìm thấy Sản Phẩm nào" });
    }
    return res.status(StatusCodes.OK).json({ categorys, products });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const update = async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );

    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const remove = async (req, res) => {
  try {
    const category = await Category.findOneAndDelete({ _id: req.params.id });

    return res.status(StatusCodes.OK).json(category);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
