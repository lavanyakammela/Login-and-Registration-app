const Joi = require('joi');

const signupSchema = Joi.object({
  name: Joi.string().min(3).required(), // Use 'name' if your frontend sends 'name'
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};

module.exports = {
  signupValidation: validate(signupSchema),
  loginValidation: validate(loginSchema)
};
