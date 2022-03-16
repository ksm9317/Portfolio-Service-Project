import { Award } from "../db";
import { v4 as uuidv4 } from "uuid";

class awardService {
  // 사용자의 수상 내역을 받아 model로 전송
  static async addAward({ user_id, title, description }) {
    // 수상 내역의 고유 id 부여 --> user_id와 다름
    const id = uuidv4();
    const newAward = { id, user_id, title, description };

    const createdNewAward = await Award.create({ newAward });
    createdNewAward.errorMessage = null;
    return createdNewAward;
  }

  static async getAwards({ id }) {
    // 사용자의 수상 내역을 수상 내역 id를 기준으로 하나 가져옴
    const user = await Award.findById({ id });
    return user;
  }
}

export { awardService };
