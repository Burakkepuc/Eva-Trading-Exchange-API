import AuthService from '../services/authService'
import AuthValidation from "../validations/authValidation";

class AuthController {

  static async register(req, res) {
    try {
      const validateRegister = await AuthValidation.validateRegister(req)

      if (!validateRegister.type) {
        return res.status(400).json({ type: false, message: validateRegister.message });
      }

      const result = await AuthService.register(req, res);
      return res.status(result.type ? 201 : 400).json(result)
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message })
    }
  }

  static async login(req, res) {
    try {
      const validateLogin = await AuthValidation.validateLogin(req)

      if (!validateLogin.type) {
        return res.status(400).json(result.type ? 200 : 400).json(result)
      }

      const result = await AuthService.login(req, res);
      console
      return res.status(result.type ? 200 : 400).json(result);
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message })
    }
  }

}


export default AuthController;