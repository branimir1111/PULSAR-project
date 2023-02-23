import {
  UnauthenticatedError,
  UnauthorizedError,
} from '../errorsCustom/index.js';
import { isTokenValid } from './cookieTokenCreate.js';

const authenticateUser = (req, res, next) => {
  const token = req.signedCookies.pulsar; //na kraju je 'token' zato sto smo nas cookie nazvali 'token'
  if (!token) {
    throw new UnauthenticatedError('Authorization Invalid');
  }
  try {
    const { name, userId, role } = isTokenValid({ token });
    req.user = { name, userId, role };
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authorization Invalid');
  }
};

const authorizeUser = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError('Unathorized to access this route.');
    }
    next();
  };
};

export { authenticateUser, authorizeUser };
