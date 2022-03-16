import { Award } from "../db";
import { v4 as uuidv4 } from "uuid";

class awardService {
  // 사용자의 수상 내역을 받아 model로 전송
  static async addAward({ title, description }) {
    const id = uuidv4();
    const newAward = { id: id, title, description };

    const createdNewAward = await Award.create({ newAward });
    createdNewAward.errorMessage = null;
    return createdNewAward;
  }

  static async getAwards() {
    // 사용자의 모든 수상 내역을 가져온다
  }
}

export { awardService };
