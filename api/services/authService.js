import db from '../../src/models/index'
import bcrypt from 'bcrypt'
import Token from '../helpers/token'

class AuthService {

  static async register(req) {
    try {
      const { name, email, password } = req.body;
      const checkUser = await db.Users.findOne({ where: { email } })
      if (checkUser) {
        return { type: false, message: 'This User already exist,please check your email or password' }
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await db.Users.create({
        name,
        email,
        password: hashedPassword
      })

      return {
        type: true,
        data: { id: user.id, email: user.email, name: user.name }
      }
    } catch (error) {
      return { type: false, message: 'An error occurred during registration' };
    }
  }

  static async login(req) {
    try {
      const { email, password } = req.body;
      const checkUser = await db.Users.findOne({ where: { email } })
      if (!checkUser) {
        return { type: false, message: 'User not found' }
      }

      const comparePassword = bcrypt.compareSync(password, checkUser.password)
      if (!comparePassword) {
        return { type: false, message: 'Username or password is not correct. Please Check.' }
      }

      const token = await Token.generateToken(checkUser);

      return { type: true, data: token, message: 'User logged in successfully' }

    } catch (error) {
      return { type: false, message: 'An error occurred during log-in' };
    }
  }


}


export default AuthService;