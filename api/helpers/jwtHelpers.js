import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const hashingPassword = async (passwordNotHashed) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(
    passwordNotHashed,
    salt
  );
  return hashedPassword;
};

const isMatchPass = async (notHashedPass, hashedPass) => {
  const isMatch = await bcrypt.compare(
    notHashedPass,
    hashedPass
  );
  return isMatch;
};

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
};

export { hashingPassword, generateToken,isMatchPass };
