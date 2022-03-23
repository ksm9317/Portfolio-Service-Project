import { CommnetModel } from "../schemas/comment";

class Comment {
  static create({ newComment }) {
    return CommnetModel.create(newComment);
  }

  static findAllComment({ commentTo }) {
    return CommnetModel.find({ commentTo });
  }

  static delete({ id, commenter }) {
    return CommnetModel.deleteOne({ id, commenter });
  }
}

export { Comment };
