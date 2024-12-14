import jwt from 'jsonwebtoken';
import dotenve from 'dotenv';
dotenve.config();
import models from '../database/models';

const { User } = models;
console.log(User); 


export default (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  const token = req.headers.authorization.split(" ")[1];

  console.log(token,'tokensss');
  return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' }, (error, decoded) => {
    if (error) {
      return res.status(401).send({ error });
    }
    req.decoded = decoded;
    console.log(req.decoded);
  return models.User.findByPk(decoded.userId).then((user) => {
        if (!user) {
          return res.status(401).send({ error: 'User does not exist' });
        }
        return next();
      });
  });
};