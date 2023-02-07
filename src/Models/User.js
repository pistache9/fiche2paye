import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  entreprises: {type: Array, default: []},
  // favs: {type: Object, default: {}},
  // trads: {type: Object, default: {}},
  // tips: {type: Array, default: []},
  // budget: {type: Number, default: 5},
  // pastries: Array

}, { minimize: false })

const UserModel = mongoose.model('User', UserSchema, 'users');


export default UserModel;
