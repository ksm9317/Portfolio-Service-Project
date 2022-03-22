import { Router } from "express";

import { commentService } from "../services/commentService";
import { login_required } from "../middlewares/login_required";

const commentRouter = Router();

commentRouter.post(
  "/comment/create/:user_id",
  login_required,
  async (req, res, next) => {
    const commentTo = req.params.user_id;
    const commenter = req.currentUserId;
    const content = req.body.content;

    const newComment = await commentService.addComment({
      commentTo,
      commenter,
      content,
    });

    if (newComment.errorMessage) {
      throw new Error(newComment.errorMessage);
    }

    res.status(201).json(newComment);
  }
);

export { commentRouter };
