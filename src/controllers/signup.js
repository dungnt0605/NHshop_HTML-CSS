import bcryptjs from "bcryptjs";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import { User } from "../model/user.js";
const signupSchema = Joi.object({
  username: Joi.string().min(3).max(30).required().messages({
    "any.required": "Trưởng Name là bắt buộc",
    "string.empty": "Trường Name k đc để trống ",
    "string.min": "Trường Name ít nhất 3 ký tự",
    "string.max": "Trường Name không vượt quá 30 ký tự",
  }),
  username: Joi.string().min(3).max(30).required().messages({
    "any.required": "Trưởng Name là bắt buộc",
    "string.empty": "Trường Name k đc để trống ",
    "string.min": "Trường Name ít nhất 3 ký tự",
    "string.max": "Trường Name không vượt quá 30 ký tự",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Trưởng Email là bắt buộc",
    "string.empty": "Trường Email k đc để trống ",
    "string.email": "Trường Email phải là Email",
  }),
  password: Joi.string().min(8).required().messages({
    "any.required": "Trưởng Password là bắt buộc",
    "string.empty": "Trường Password k đc để trống ",
    "string.min": "Trường Password ít nhất 3 ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.required": "Trưởng ConfirmPassword là bắt buộc",
    "any.only": "Trưởng ConfirmPassword là Không giống với Password",
  }),
  avatar: Joi.string().uri().messages({
    "string.uri": "Trường Avatar đường dẫn không hợp lệ",
  }),
});

export const signup = async (req, res) => {
  const { email, password } = req.body;

  const { error } = signupSchema.validate(req.body, { abortEarly: false });
  console.log(error);
  if (error) {
    const messages = error.details.map((err) => err.message);

    return res.status(400).json({
      messages,
    });
  }
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res.status(400).json({
      message: "Email đã tồn tại",
    });
  }

  const hashPassword = await bcryptjs.hash(password, 12);
  const role = (await User.countDocuments({})) === 0 ? "admin" : "user";
  const user = await User.create({
    ...req.body,
    password: hashPassword,
    role,
  });
  return res.status(StatusCodes.CREATED).json({ user });
};
export const signin = async (req, res) => {};
export const logout = async (req, res) => {};
