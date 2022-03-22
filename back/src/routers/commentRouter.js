import { Router } from "express";

import { login_required } from "../middlewares/login_required";
import { commentService } from "../services/commentService";

const commentRouter = Router();

commentRouter.post(
  // comment 추가 하기
  "/comment/create",
  login_required,
  async (req, res, next) => {
    const commentTo = null;
    const commeter = req.currentUerId;
    const content = req.body.comment;
  }
);

export { commentRouter };
