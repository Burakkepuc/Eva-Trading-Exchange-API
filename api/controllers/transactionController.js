import TransactionService from "../services/transactionService";
import TransactionValidation from "../validations/transactionValidation";

class TransactionController {
  static async buy(req, res) {
    try {
      const validateQuantity = await TransactionValidation.validatequantity(req)

      if (!validateQuantity.type) {
        return res.status(400).json({ type: false, message: validateQuantity.message });
      }
      const result = await TransactionService.buy(req, res);
      return res.status(result.type ? 201 : 400).json(result);
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message });
    }
  }

  static async sell(req, res) {
    try {
      const validateQuantity = await TransactionValidation.validatequantity(req)

      if (!validateQuantity.type) {
        return res.status(400).json({ type: false, message: validateQuantity.message });
      }
      const result = await TransactionService.sell(req, res);
      return res.status(result.type ? 201 : 400).json(result);
    } catch (error) {
      return res.status(500).json({ type: false, message: error.message });
    }
  }
}



export default TransactionController;