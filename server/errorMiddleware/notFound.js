import { StatusCodes } from 'http-status-codes';

const notFound = (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).send('This route does not exists');
};

export default notFound;
