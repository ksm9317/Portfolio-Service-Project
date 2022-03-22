import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    commentTo: {
      // comment를 받는 사람의 id
      type: String,
      required: true,
    },
    commenter: {
      // comment를 다는 사람 id
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = model("Comment", CommentSchema);
export { CommentModel };
