import UserService from "../services/userService";
import UserValidation from "../validations/userValidation";

class UserController {

  static async updateBalance(req, res) {
    try {
      const validateBalance = await UserValidation.validateBalance(req)

      if (!validateBalance.type) {
        return res.status(400).json({ type: false, message: validateBalance.message });
      }
      const result = await UserService.updateBalance(req, res);
      return res.status(result.type ? 200 : 400).json(result);
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message });
    }
  }
  static async getUserStocks(req, res) {
    try {

      const result = await UserService.getUserStocks(req, res);
      return res.status(result.type ? 200 : 400).json(result);
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message });
    }
  }
}

export default UserController;