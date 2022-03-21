import { Award } from "../db";
import { v4 as uuidv4 } from "uuid";

class awardService {
  // 사용자의 수상 내역을 받아 model로 전송
  static async addAward({ user_id, title, description }) {
    // 수상 내역이 존재하는지 확인
    const existAward = await Award.getAwardName({ title });
    if (existAward && existAward.user_id === user_id) {
      const errorMessage = "해당 수상 내역은 이미 존재합니다.";
      return { errorMessage };
    }

    // 수상 내역의 고유 id 부여 --> user_id와 다름
    const id = uuidv4();
    const newAward = { id, user_id, title, description };

    const createdNewAward = await Award.create({ newAward });
    createdNewAward.errorMessage = null;
    return createdNewAward;
  }

  static async getAward({ awardId }) {
    // 사용자의 수상 내역을 수상 내역 id를 기준으로 하나 가져옴
    const user = await Award.findById({ awardId });
    return user;
  }

  static async getAwards({ user_id }) {
    // 사용자의 수상 내역을 수상 내역 id를 기준으로 하나 가져옴
    const user = await Award.findByUserId({ user_id });
    return user;
  }

  static async setAward({ id, update }) {
    // 사용자의 수상내역을 수정한다
    // 받은 id를 가진 수상 내역이 존재하는지 확인하기
    let award = await Award.findById({ id });

    // db에 존재하지 않는경우 에러 발생
    if (!award) {
      const errorMessage = "수상 내역이 없습니다.";
      return { errorMessage };
    }

    // title과 description 업데이트
    if (update.title) {
      const fieldToUpdate = "title";
      const newValue = update.title;
      award = await Award.update({ id, fieldToUpdate, newValue });
    }

    if (update.description) {
      const fieldToUpdate = "description";
      const newValue = update.description;
      award = await Award.update({ id, fieldToUpdate, newValue });
    }

    return award;
  }
}

export { awardService };
