import zod from "zod";
import AuthValidations from "../../validations/auth.validations";

const authValidations = new AuthValidations();

export type IUserSignUp = zod.infer<typeof authValidations.SignUp>;
