import { AwardModel } from "../schemas/award";

class Award {
  // 수상 내역을 새로 생성합니다.
  static async create({ newAward }) {
    const createNewAward = await AwardModel.create(newAward);
    return createNewAward;
  }
}

export { Award };
