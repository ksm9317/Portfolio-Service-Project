import { CommnetModel } from "../schemas/comment";

class Comment {
  static create({ newComment }) {
    return CommnetModel.create(newComment);
  }

  static async findAllComment({ commentTo }) {
    return CommnetModel.find({ commentTo });
  }
}

export { Comment };
