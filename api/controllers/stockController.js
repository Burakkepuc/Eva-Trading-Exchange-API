import StockService from "../services/stockService";

class StockController {
  static async getAll(req, res) {
    try {
      const result = await StockService.getAll(req, res);
      return res.status(result.type ? 200 : 400).json(result);
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message });
    }
  }
}



export default StockController;