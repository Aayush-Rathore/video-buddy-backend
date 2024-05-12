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
}

export default AuthValidations;
