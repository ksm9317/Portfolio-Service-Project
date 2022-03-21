import { AwardModel } from "../schemas/award";

class Award {
  // 수상 내역을 새로 생성합니다.
  static async create({ newAward }) {
    const createNewAward = await AwardModel.create(newAward);
    return createNewAward;
  }

  // 수상 내역의 title을 기준으로 검색
  static async getAwardName({ title }) {
    const isAward = await AwardModel.findOne({ title });
    return isAward;
  }

  // 사용자 id로 수상 내역 찾기
  static async findById({ awardId }) {
    const userAward = await AwardModel.find({ id: awardId });
    return userAward;
  }

  // 사용자 id를 사용해서 사용자의 모든 수상 내역을 가져오기
  static async findByUserId({ user_id }) {
    const userAward = await AwardModel.find({ user_id });
    return userAward;
  }

  // 수상 내역 수정하기
  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updateAward = await AwardModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updateAward;
  }
}

export { Award };
