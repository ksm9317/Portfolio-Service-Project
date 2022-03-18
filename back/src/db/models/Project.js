import {ProjectModel} from "../schemas/project";
import { UserModel } from "../schemas/user";


class Project{

    static async findById({ user_id }) {
        const user = await UserModel.findOne({ id: user_id });
        return user;
      }

      static async findById({ user_id }) {
        const userPortfolio = await ProjectModel.find({ id: user_id });
        return user;
      }

}