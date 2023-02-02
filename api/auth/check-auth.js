import jwt from 'jsonwebtoken';

module.exports = (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).json({
      message: 'Authentication failed',
    });
  }
};
