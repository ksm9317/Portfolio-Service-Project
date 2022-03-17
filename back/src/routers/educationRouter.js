import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { educationService } from "../services/educationService";

const educationRouter = Router();
educationRouter.use(login_required);

educationRouter.post("/education/create", async (req, res, next) => {
  // 학력 생성하기
});

educationRouter.get("/educations/:id", async (req, res, next) => {
  // 학력 id를 기준으로 확인
});

educationRouter.put("/educations/:id", async (req, res, next) => {
  // 학력 id를 기준으로 수정
});

educationRouter.get("/educationlist/:id", async (req, res, next) => {
  // 사용자 id를 기준으로 확인
});

export { educationRouter };
