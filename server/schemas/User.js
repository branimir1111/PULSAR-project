import mongoose from 'mongoose';
const { Schema } = mongoose;
import bycript from 'bcryptjs';
import validator from 'validator';

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email'],
    validate: {
      validator: validator.isEmail, //validator.isEmail je poseban package za validaciju email-a
      message: 'Please provide valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 6,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

//soljenje i hash-ovanje password-a Ne koristiti arrow function
UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return; //ako nismo menjali pass onda necemo opet da je hash-ujemo
  const salt = await bycript.genSalt(10);
  this.password = await bycript.hash(this.password, salt);
});

//poredimo passworde i vracamo true ili false Ne koristiti arrow function
UserSchema.methods.comparePassword = async function (userPassword) {
  const isMatch = await bycript.compare(userPassword, this.password);
  return isMatch;
};

const User = mongoose.model('User', UserSchema);
export default User;
