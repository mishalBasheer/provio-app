import User from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//Creating new user and encrypting the password and storing it in the database
const newUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(
      req.body.password,
      salt
    );
    const { name, email, mobile } = req.body;
    const result = await User.create({
      name,
      email,
      mobile,
      password: hashedPassword,
    });
    res.json({
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
const loginCheck = async (req, res, next) => {
  try {
    const user = await User.findOne({
      mobile: req.body.mobile,
    });
    if (!user)
      return res
        .status(401)
        .json({ message: 'cannot find user' });
    if (
      await bcrypt.compare(req.body.password, user.password)
    ) {
      //Generating token after user password is authenticated (JWT)
      const token = jwt.sign(
        { name: user.name, userid: user._id },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: '1h',
        }
      );
      res.status(200).json({ token, expiresIn: 3600 });
    } else {
      res.status(401).json({ message: 'wrong password' });
    }
  } catch (err) {
    res.status(403).json({ error: err });
  }
};

export { newUser, loginCheck };
