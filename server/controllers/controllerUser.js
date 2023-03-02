import User from '../schemas/User.js';
import { StatusCodes } from 'http-status-codes';
import {
  UnauthenticatedError,
  BadRequestError,
} from '../errorsCustom/index.js';
import {
  createTokenUser,
  connectCookieAndResponse,
} from '../utils/cookieTokenCreate.js';

const register = async (req, res) => {
  //take data from frontend
  const { name, email, password } = req.body;

  const emailExists = await User.findOne({ email });
  if (emailExists) {
    throw new BadRequestError('This email is already in use');
  }
  const firstUser = (await User.countDocuments({})) === 0;
  const role = firstUser ? 'admin' : 'user';

  const user = await User.create({
    name,
    email,
    password,
    role,
  });
  const userForToken = createTokenUser(user);
  connectCookieAndResponse({ res, user: userForToken });

  res.status(StatusCodes.CREATED).json({ user: userForToken });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  //check if email and password exist, if one missing return 400
  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }
  //find user, if no user return 401
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials');
  }
  //check password, if does not match return 401
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid credentials');
  }
  //if everything is correct, attach cookie and send back the same response as in register
  const userForToken = createTokenUser(user);
  connectCookieAndResponse({ res, user: userForToken });

  res.status(StatusCodes.OK).json({ user: userForToken });
};

const logout = async (req, res) => {
  res.cookie('pulsar', 'logout', {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: 'user logout' });
};

const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

export { register, login, logout, getCurrentUser };
