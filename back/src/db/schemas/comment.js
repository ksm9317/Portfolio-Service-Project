import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    content: {
      type: true,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CommentModel = model("Comment", CommentSchema);
export { CommentModel };
