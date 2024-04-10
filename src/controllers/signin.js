import Joi from "joi";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import { User } from "../model/user";

const SignInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = SignInSchema.validate(req.body, { abortEarly: true });
    if (error) {
      const message = error.details.map((err) => err.message);
      return res.status(StatusCodes.BAD_REQUEST).json({ message });
    }

    const checkEmail = await User.findOne({ email });
    if (!checkEmail) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Email not found" });
    }
    const checkPass = await bcryptjs.compare(password, checkEmail.password);

    if (!checkPass) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Sai mật khẩu " });
    }
    console.log(checkPass);

    const token = jwt.sign({ uid: checkEmail._id }, "heheee", {
      expiresIn: "7d",
    });
    return res.status(StatusCodes.CREATED).json({ checkEmail, token });
  } catch (error) {}
};
