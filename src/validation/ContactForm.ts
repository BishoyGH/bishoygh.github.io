import Joi from "joi";

export const Schema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.empty": "your email cannot be empty",
      "string.email": "you must give valid email",
    }),
  message: Joi.string().min(5).max(250).required().messages({
    "string.empty": "your message cannot be empty",
    "string.min": "your message is very short",
    "string.max": "your message is very long. please make it shorter",
  }),
});
