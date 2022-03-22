import { CommnetModel } from "../schemas/comment";

class Comment {
  static create({ newComment }) {
    return CommnetModel.create(newComment);
  }

  static async getAllComments({ commnetTo }) {
    return CommnetModel.find({ commnetTo });
  }
}

export { Comment };
