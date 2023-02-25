import jwt from 'jsonwebtoken';

const cretaeJWT = ({ payload }) => {
  //for token we need three things: header, payload and signature
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
  return token;
};

const createTokenUser = (user) => {
  return { userId: user._id, name: user.name, role: user.role };
};

const isTokenValid = ({ token }) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const connectCookieAndResponse = ({ res, user }) => {
  const token = cretaeJWT({ payload: user });
  const eightHours = 1000 * 60 * 60 * 8;

  res.cookie('pulsar', token, {
    httpOnly: true,
    expires: new Date(Date.now() + eightHours),
    secure: process.env.NODE_ENV === 'production',
    signed: true,
  });
};

export { createTokenUser, isTokenValid, connectCookieAndResponse };
