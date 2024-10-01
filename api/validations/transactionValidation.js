import Joi from '@hapi/joi'


class TransactionValidation {

  static async validatequantity(req) {
    try {
      const { body } = req;
      const quantitySchema = Joi.object({
        quantity: Joi.number().min(1).required(),
      })

      const { error } = quantitySchema.validate(body);
      if (error) {
        return { type: false, message: error.details[0].message };
      }
      return { type: true }

    } catch (error) {
      return { type: false, message: error.message };

    }
  }



}

export default TransactionValidation;