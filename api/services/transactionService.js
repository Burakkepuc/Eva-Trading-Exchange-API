import db from '../../src/models/index'


class TransactionService {
  static async buy(req, res) {
    try {

      const userId = req.user.user_id;
      const { stockId } = req.params;
      const quantity = parseInt(req.body.quantity);
      if (isNaN(quantity) || quantity <= 0) {
        return { type: false, message: 'Quantity should be a valid positive number and should be a number' };
      }

      const user = await db.Users.findByPk(userId);
      const stock = await db.Stocks.findByPk(stockId)

      if (!user) {
        return { type: false, message: 'User not found' }
      }

      if (!stock) {
        return { type: false, message: 'Stock not found' }
      }

      const totalCost = stock.price * quantity;
      if (user.balance < totalCost) {
        return { type: false, message: "Insufficient balance " }
      }

      if (stock.quantity < quantity) {
        return { type: false, message: "Insufficient stock on market" }
      }

      let userStock = await db.UserStocks.findOne({ where: { user_id: userId, stock_id: stockId } })

      if (userStock) {
        userStock.quantity += quantity;
      } else {
        userStock = await db.UserStocks.create({
          user_id: userId,
          stock_id: stockId,
          quantity
        })
      }
      await userStock.save()

      user.balance -= totalCost;
      await user.save();

      stock.quantity -= quantity;
      await stock.save();

      const transaction = await db.Transactions.create({
        user_id: userId,
        stock_id: stockId,
        type: 'BUY',
        quantity,
        price: stock.price
      })

      return { type: true, data: transaction, message: "Transaction is successfull" }

    } catch (error) {
      return { type: false, message: 'An error occurred during transaction' };

    }
  }

  static async sell(req, res) {
    try {
      const userId = req.user.user_id;
      const { stockId } = req.params;
      const { quantity } = req.body;
      if (isNaN(quantity) || quantity <= 0) {
        return { type: false, message: 'Quantity should be a valid positive number and should be a number' };
      }

      const user = await db.Users.findByPk(userId);
      const stock = await db.Stocks.findByPk(stockId);

      if (!user) {
        return { type: false, message: 'User not found' }
      }

      if (!stock) {
        return { type: false, message: 'User not found' }
      }

      let userStock = await db.UserStocks.findOne({ where: { user_id: userId, stock_id: stockId } });

      if (!userStock || userStock.quantity < quantity) {
        return { type: false, message: 'Insufficient stocks to sell' };
      }

      const totalValue = stock.price * quantity;
      userStock.quantity -= quantity;

      if (userStock.quantity === 0) {
        await userStock.destroy();
      } else {
        await userStock.save();
      }

      user.balance += totalValue;
      await user.save()

      stock.quantity += quantity;
      await stock.save();

      const transaction = await db.Transactions.create({
        user_id: userId,
        stock_id: stockId,
        type: 'SELL',
        quantity,
        price: stock.price
      })

      return { type: true, data: transaction, message: 'Transaction is successful' };

    } catch (error) {
      return { type: false, message: 'An error occurred during transaction' };
    }
  }
}


export default TransactionService;