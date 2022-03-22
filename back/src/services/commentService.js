import { Comment } from "../db";
import { v4 as uuidv4 } from "uuid";

class commentService {
  static async addComment({ commnetTo, commenter, content }) {
    // comment unique id
    const id = uuidv4();
    const newComment = { id, commnetTo, commenter, content };
  }
}

export { commentService };
