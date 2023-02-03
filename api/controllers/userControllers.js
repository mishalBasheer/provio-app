import User from '../models/userModel.js';
import {
  generateToken,
  hashingPassword,
  isMatchPass,
} from '../helpers/jwtHelpers.js';

//Creating new user and encrypting the password and storing it in the database
const newUser = async (req, res) => {
  try {
    //hashing the password
    const hashedPassword = hashingPassword(
      req.body.password
    );
    const { name, email, mobile } = req.body;
    const result = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });
    res.status(200).json({
      message: 'new User added successfully',
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: 'error occured while adding a new user',
      error: err,
    });
  }
};

//Authenticating User details while login
const loginCheck = async (req, res) => {
  try {
    const user = await User.findOne({
      mobile: req.body.mobile,
    });
    if (!user)
      return res
        .status(401)
        .json({ message: 'cannot find user' });
    if (
      isMatchPass(req.body.password,user.password)
    ) {
      const payload = {
        name: user.name,
        userid: user._id,
      };
      //Generating token after user password is authenticated (JWT)
      const token = generateToken(payload);

      res.status(200).json({ token, expiresIn: 3600 });
    } else {
      res.status(401).json({ message: 'wrong password' });
    }
  } catch (err) {
    res.status(403).json({ error: err });
  }
};

export { newUser, loginCheck };
