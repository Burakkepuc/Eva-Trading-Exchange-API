
import db from '../../src/models/index'
class StockService {

  static async getAll(req, res) {
    try {
      const stocks = await db.Stocks.findAll({})
      return { type: true, data: stocks, message: "All stocks get" }
    } catch (error) {
      return { type: false, message: 'An error occurred during get all stocks' };

    }
  }


}

export default StockService;