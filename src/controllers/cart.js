import { StatusCodes } from "http-status-codes";
import Cart from "../model/Cart.js";

export const getCartByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    // console.log("HiHI");
    //cart : { userId : 1 , products : [{productId : Schema.Types.ObjecId]}
    const cartData = {
      products: cart.products.map((item) => ({
        productId: item.productId._id,
        name: item.productId.name,
        quantity: item.quantity,
      })),
    };
    return res.status(StatusCodes.OK).json({ cartData });
  } catch (error) {}
};
export const addItemToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    //kiểm trả giỏ hàng đã tồn tại chưa ? dựa vào UserId
    let cart = await Cart.findOne({ userId });
    //nếu giỏ hnagf chưa tồn tại thì tạo mới

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }
    const existProductIndex = cart.products.findIndex(
      (item) => item.productId.toString() == productId
    );
    //{userId : 1 , productId : 2 , quantity : 100}
    //cart : {userId : 1  , products : [ {productId : 1 , quantity : 2} , {productId : 2 , quantity : 3}]}

    //Kiểm tra xem sản Phẩm cps tồn tại trong giỏ không?
    if (existProductIndex !== -1) {
      //Nếu mà sp tồn tại trong giỏ thì hcunsg ta cập nhật số lượng
      cart.products[1].quantity += quantity;
    } else {
      //Nếu sản phẩm chưa có trong giỏ hàng thì ta thêm mới
      cart.products.push({ productId, quantity });
    }
    //Lưu giỏ hàng
    await cart.save();
    return res.status(StatusCodes.OK).json({ cart });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).json({ error });
  }
};
export const removeToCart = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Cart not fount !!" });
    }
    cart.products = cart.products.filter(
      (product) =>
        product.productId && product.productId.toString() !== productId
    );
    await cart.save();
    return res.status(StatusCodes.OK).json({ cart });
  } catch (error) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "INTERNAL_SERVER_ERROR" });
  }
};
export const updateProductQuantity = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Cart not fount !!" });
    }
    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Cart not fount !!" });
    }
    product.quantity = quantity;
    return res.status(StatusCodes.OK).json({ cart });
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error });
  }
};
// Tăng số lượng của sản phẩm trong giỏ hàng
export const increaseProductQuantity = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    product.quantity++;

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Giảm số lượng của sản phẩm trong giỏ hàng
export const decreaseProductQuantity = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const product = cart.products.find(
      (item) => item.productId.toString() === productId
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    if (product.quantity > 1) {
      product.quantity--;
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
