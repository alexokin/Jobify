import { BadRequestError } from "../../errors/index.js";
import User from "../../models/User.js";
import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userExists = await User.findOne({email})
  if (userExists) {
    throw new BadRequestError('Email already in use.')
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send("login user");
};

const updateUser = async (req, res) => {
  res.send("updateUser ");
};

export { register, login, updateUser };
