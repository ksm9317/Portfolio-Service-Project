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

commentRouter.get(
  "/commentList/:user_id",
  login_required,
  async (req, res, next) => {
    try {
      const commentTo = req.params.user_id;

      const commentList = await commentService.getAllComments({
        commentTo,
      });

      if (commentList.errorMessage) {
        throw new Error(commentList.errorMessage);
      }

      res.status(200).json(commentList);
    } catch (error) {
      next(error);
    }
  }
);

commentRouter.delete(
  "/deleteComment/:id",
  login_required,
  async (req, res, next) => {
    try {
      const id = req.params.id;
      const commenter = req.currentUserId;

      const del = await commentService.deleteCommnet({ id, commenter });

      if (del.errorMessage) {
        throw new Error(del.errorMessage);
      }

      res.status(200).json({ status: "succ" });
    } catch (error) {
      next(error);
    }
  }
);
export { commentRouter };
