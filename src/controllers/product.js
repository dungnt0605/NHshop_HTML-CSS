import { StatusCodes } from "http-status-codes";
import { Product } from "../model/product.js";
import slugify from "slugify";

export const create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.name, "_"); // Tự động thêm slug
    const response = await Product.create(req.body);
    return res.status(StatusCodes.CREATED).json(response);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const get = async (req, res) => {
  try {
    const products = await Product.find({});
    if (products.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Không có sản phẩm nào!" });
    }
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
// export const get = async (req, res) => {
//   const { _page = 1, _limit = 10, _sort = "createdAt", _order = "asc", _expand } = req.query;
//   const options = {
//       page: _page,
//       limit: _limit,
//       sort: { [_sort]: _order === "desc" ? -1 : 1 },
//   };
//   const populateOptions = _expand ? [{ path: "category", select: "name" }] : [];
//   try {
//       const result = await Product.paginate(
//           { categoryId: null },
//           { ...options, populate: populateOptions }
//       );
//       if (result.docs.length === 0) throw new Error("No products found");
//       const response = {
//           data: result.docs,
//           pagination: {
//               currentPage: result.page,
//               totalPages: result.totalPages,
//               totalItems: result.totalDocs,
//           },
//       };
//       return res.status(200).json(response);
//   } catch (error) {
//       return res.status(400).json({ message: error.message });
//   }
// };
export const getId = async (req, res) => {
  try {
    const products = await Product.findOne({ slug: req.params.slug });
    console.log(req.params.slug);
    if (products.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const RelatedProduct = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.id });
    console.log(req.params.id);
    if (products.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    return res.status(StatusCodes.OK).json(products);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
export const update = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
      }
    );

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ slug: req.params.slug });

    return res.status(StatusCodes.OK).json(product);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error });
  }
};
