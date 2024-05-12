import zod from "zod";

class BaseValidations {
  protected name = zod.string();
  protected username = zod.string();
  protected email = zod.string().email();
  protected password = zod.string();
}

export default BaseValidations;
