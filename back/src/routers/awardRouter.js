import { Router } from "express";

import { login_required } from "../middlewares/login_required";
import { awardService } from "../services/awardService";

const awardRouter = Router();

awardRouter.post("/user/login", async (req, res, next) => {
  // 로그인 토큰 발급용
});

// 로그인된 사용자만 수상 내역을 추가할 수 있음
awardRouter.post("/award/create", login_required, async (req, res, next) => {
  try {
    //   Content-type Error
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req에서 수상 내역으로 저장할 데이터 받아오기
    const awardTitle = req.body.awardTitle;
    const rank = req.body.rank;
    const content = req.body.content;

    // 데이터를 award db에 추가하기
    const newAward = await awardService.addAward({
      awardTitle,
      rank,
      content,
    });

    if (newAward.errorMessage) {
      throw new Error(newAward.errorMessage);
    }

    res.status(200).json(newAward);
  } catch (e) {
    next(e);
  }
});

awardRouter.get("/awards/:id", login_required, async (req, res, next) => {
  // id를 기준으로 사용자의 수상 내역 가져오기
});

awardRouter.put("/awards/:id", login_required, (req, res, nex) => {
  // id를 기준으로 사용자의 수상 내역 수정하기
});

awardRouter.get("/awardlist/:user_id", login_required, (req, res, next) => {
  // 사용자의 모든 수상내역 가져오기
});
