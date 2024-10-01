
import db from '../../src/models/index'

class UserService {
  static async updateBalance(req, res) {
    try {
      const userId = req.user.user_id;
      const balance = parseFloat(req.body.balance);

      if (isNaN(balance) || balance <= 0) {
        return { type: false, message: 'Amount should be greater than 0 and should be number' }
      }
      const user = await db.Users.findByPk(userId);
      user.balance += balance;
      await user.save();

      return { type: true, data: user.balance, message: `Your balanced increased to $${balance}` }
    } catch (error) {
      return { type: false, message: 'An error occurred during balance data changed' };
    }
  }

  static async getUserStocks(req, res) {
    try {
      const userId = req.user.user_id;

      const userStocks = await db.UserStocks.findAll({
        where: { user_id: userId },
        include: [
          { model: db.Stocks, attributes: ['id', 'symbol', 'price', 'quantity'] }
        ]
      })

      return { type: true, data: userStocks, message: 'All user stocks get in portfolio' }
    } catch (error) {
      return { type: false, message: 'An error occurred during get user stocks' };

    }
  }
}

export default UserService;
