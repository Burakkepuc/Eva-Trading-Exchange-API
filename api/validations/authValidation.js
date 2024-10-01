import Joi from '@hapi/joi'


class AuthValidation {

  static async validateRegister(req) {
    try {
      const { body } = req;
      const registerSchema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(5).max(20).required(),
        email: Joi.string().email().required(),
      })

      const { error } = registerSchema.validate(body);
      if (error) {
        return { type: false, message: error.details[0].message };
      }
      return { type: true }

    } catch (error) {
      return { type: false, message: error.message };

    }
  }

  static async validateLogin(req) {
    try {
      const { body } = req;
      const loginSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
      })

      const { error } = loginSchema.validate(body);

      if (error) {
        return { type: false, message: error.details[0].message };
      }
      return { type: true }

    } catch (error) {
      return { type: false, message: error.message };
    }
  }

}

export default AuthValidation;