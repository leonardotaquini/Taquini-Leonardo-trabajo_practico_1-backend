import bcrypt from "bcrypt";


 const hashPassword = async(password) => {
  const passwordHashed = await bcrypt.hash(password, 10);
  return passwordHashed;
};

 const comparePassword = async(password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export { hashPassword, comparePassword };