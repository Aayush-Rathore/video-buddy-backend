import zod from "zod";

class BaseValidations {
  protected title = zod.string().min(10).max(100);
  protected description = zod.string().max(500).optional();
  protected isPublic = zod.boolean().optional();
}

export default BaseValidations;
