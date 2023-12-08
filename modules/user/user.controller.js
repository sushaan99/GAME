const bcrypt = require("bcrypt");
const Model = require("./user.model");

const create = async (payload) => {
  const { password } = payload;
  const passwordHash = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
  payload.password = passwordHash;
  const newUser = await Model.create(payload);
  return newUser;
//   return await Model.create(payload)
};

const login = async (email, password) => {
  const user = await Model.findOne({ email }).select("+password");
  if (!user) throw new Error("User not found");
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Email or Password is invalid");
  return "Login Successful";
};

module.exports = { create, login};
