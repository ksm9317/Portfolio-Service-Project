import is from "@sindresorhus/is";
import { Router } from "express";

import { login_required } from "../middlewares/login_required";
import { awardService } from "../services/awardService";

const awardRouter = Router();

awardRouter.get("/getUserId", login_required, async (req, res, next) => {
  try {
    const user_id = req.currentUserId;
    res.status(200).json(user_id);
  } catch (error) {
    next(error);
  }
});

awardRouter.post("/award/getUser", login_required, async (req, res, next) => {
  try {
    const user_id = req.currentUserId;
    const body = req.body;
    const title = req.body.title;
    const description = req.body.description;

    // 데이터를 award db에 추가하기
    const newAward = await awardService.addAward({
      user_id,
      title,
      description,
    });

    if (newAward.errorMessage) {
      throw new Error(newAward.errorMessage);
    }

    res.status(200).json(newAward);
  } catch (e) {
    next(e);
  }
});

// 로그인된 사용자만 수상 내역을 추가할 수 있음
awardRouter.post("/award/create", login_required, async (req, res, next) => {
  try {
    // req에서 수상 내역으로 저장할 데이터 받아오기
    const user_id = req.currentUserId;
    console.log(user_id);
    const title = req.body.title;
    const description = req.body.description;

    // 데이터를 award db에 추가하기
    const newAward = await awardService.addAward({
      user_id,
      title,
      description,
    });

    if (newAward.errorMessage) {
      throw new Error(newAward.errorMessage);
    }

    res.status(200).json(newAward);
  } catch (e) {
    next(e);
  }
  // 수상 내역 추가 성공
});

awardRouter.get("/awards/:id", login_required, async (req, res, next) => {
  // 수상 내역 id를 기준으로 사용자의 수상 내역 가져오기
  try {
    const awardId = req.params.id;
    const award = await awardService.getAward({ awardId });

    if (award.errorMessage) {
      throw new Error(award.errorMessage);
    }

    res.status(200).json(award);
  } catch (error) {
    next(error);
  }
  // id를 기준으로 사용자 수상 내역 가져오기 완료
});

awardRouter.put("/awards/:id", login_required, async (req, res, next) => {
  // id를 기준으로 사용자의 수상 내역 수정하기
  try {
    const id = req.params.id;
    // 수정할 데이터
    const title = req.body.title ?? null;
    const description = req.body.description ?? null;

    const update = { title, description };

    // db정보를 찾기
    const updateAward = await awardService.setAward({ id, update });

    if (updateAward.errorMessage) {
      throw new Error(updateAward.errorMessage);
    }

    res.status(200).json(updateAward);
  } catch (error) {
    next(error);
  }
  // update award content finish
});

awardRouter.get(
  "/awardlist/:user_id",
  login_required,
  async (req, res, next) => {
    // 사용자의 모든 수상내역 가져오기
    try {
      const user_id = req.currentUserId;
      const awards = await awardService.getAwards({ user_id });

      if (awards.errorMessage) {
        throw new Error(awards.errorMessage);
      }

      res.status(200).json(awards);
    } catch (error) {
      next(error);
    }
  }
);

awardRouter.delete(
  "/awardDelete/:id",
  login_required,
  async (req, res, next) => {
    try {
      const id = req.params.id;
    } catch (error) {
      next(error);
    }
  }
);

export { awardRouter };
