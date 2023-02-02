import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  mobile: {
    type: Number,
    required:true,
    unique:true,
  },
  password: {
    type: String,
    required:true,
  },
});

userSchema.plugin(uniqueValidator)

const User = mongoose.model("User", userSchema);

export default User;
