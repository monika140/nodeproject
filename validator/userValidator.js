const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phoneNo: Joi.string().required(),
  address: Joi.string().required(),
});

module.exports = userSchema;
