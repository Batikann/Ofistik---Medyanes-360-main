import bcrypt from 'bcryptjs';

const DecryptPassword = async (LoginPassword, DbPassword) => {
  try {
    if (!LoginPassword || !DbPassword) {
      throw new Error('Password is empty');
    }
    const result = await bcrypt.compare(LoginPassword, DbPassword);
    if (!result) throw new Error('Password is wrong');
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default DecryptPassword;
