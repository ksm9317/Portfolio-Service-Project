import { Award } from "../db";
import { v4 as uuidv4 } from "uuid";

class awardService {
  // 사용자의 수상 내역을 받아 model로 전송
  static async addAward({ awardee, awardTitle, rand, content }) {
    const id = uuidv4();
    const createdNewAward = await Award.create({ newAward });
    createdNewAward.errorMessage = null;
    return createdNewAward;
  }
}

export { awardService };
