import * as yup from "yup";

const emailAddresses = ["test@gmail.com", "test2@gmail.com", "test3@gmail.com"];
// replace data with api or pattern matching data store in db in email format

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const SignUpSchema = yup.object({
  username: yup.string().min(2).max(25).required("required!"),

  email: yup
    .string()
    .matches(/^(?!.*@[^,]*,)/)
    .lowercase()
    .email("must be valid email!")
    .notOneOf(emailAddresses, "email already taken!")
    .required("required!"),

  password: yup
    .string()
    .matches(lowercaseRegex, "one lowercase required!")
    .matches(uppercaseRegex, "one uppercase required!")
    .matches(numericRegex, "one number required!")
    .min(8, "minimum 8 characters required!")
    .required("required!"),

});


