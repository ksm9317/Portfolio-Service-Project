import { Comment } from "../db";
import { v4 as uuidv4 } from "uuid";

class commentService {
  static async addComment({ commentTo, commenter, content }) {
    //   comment의 고유 id
    const id = uuidv4();
    const newComment = { commentTo, commenter, id, content };

    const addComment = await Comment.create({ newComment });
    return addComment;
  }

  static getAllComments({ commentTo }) {
    return Comment.findAllComment({ commentTo });
  }

  static deleteCommnet({ id, commenter }) {
    return Comment.delete({ id, commenter });
  }
}

export { commentService };
