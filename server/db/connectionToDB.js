import mongoose from 'mongoose';

// strictQuery: same value as 'strict' by default (true), may be false, true, or 'throw'.
// Sets the default strictQuery mode for schemas.
// The default value will be switched back to false in Mongoose 7,
// use mongoose.set('strictQuery', false); if you want to prepare for the change.
mongoose.set('strictQuery', false);

const connectToDB = (url) => {
  // mongoose.connect(url)-open default mongoose connection.
  return mongoose.connect(url);
};

export default connectToDB;
