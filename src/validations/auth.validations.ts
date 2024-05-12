import zod from "zod";
import BaseValidations from "./base.validations";

class AuthValidations extends BaseValidations {
  public SignUp = zod
    .object({
      name: this.name,
      email: this.email,
      password: this.password,
      username: this.username,
    })
    .strict();

  public Login = zod
    .object({
      email: this.email.optional(),
      username: this.username.optional(),
      password: this.password,
    })
    .strict()
    .refine(
      (data) => {
        const { email = null, username = null } = data;
        return (
          (email !== null && username === null) ||
          (email === null && username !== null)
        );
      },
      {
        message: "Either email or username must be provided, but not both.",
        path: ["email", "username"],
      }
    );
}

export default AuthValidations;
