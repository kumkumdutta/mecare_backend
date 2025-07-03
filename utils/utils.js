import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import env from "dotenv"
env.config()

const hashPassword = async (password) => {

const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

 const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

const generateToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, process.env.SECRET_KEY, { expiresIn: '7d' });
}

export {
    hashPassword,
    comparePassword,
    generateToken
}