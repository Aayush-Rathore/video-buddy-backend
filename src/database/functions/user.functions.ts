import { User } from "../models/user.model";
import { IUserSignUp } from "@/types/other/zod.types";

type PFindOne = { email?: string; username?: string };

class UserDB {
  public async FindOne(params: PFindOne) {
    const { email, username } = params;
    const user = await User.findOne({
      $or: [{ email }, { username }],
    }).select("+password");
    return user;
  }

  public async CreateOne(params: IUserSignUp) {
    try {
      const user = await User.create(params);
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

export default UserDB;
