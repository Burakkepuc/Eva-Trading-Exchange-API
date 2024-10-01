import Joi from '@hapi/joi'


class UserValidation {

  static async validateBalance(req) {
    try {
      const { body } = req;
      const balanceSchema = Joi.object({
        balance: Joi.number().min(1).required(),
      })

      const { error } = balanceSchema.validate(body);
      if (error) {
        return { type: false, message: error.details[0].message };
      }
      return { type: true }

    } catch (error) {
      return { type: false, message: error.message };

    }
  }



}

export default UserValidation;