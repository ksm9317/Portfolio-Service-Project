import { Education } from "../db";
import { v4 as uuidv4 } from "uuid";

class educationService {
  static async addEducation({ user_id, school, major, position }) {
    // education 추가
    // TODO: 학력 존재하는지 확인하기
    // TODO: 학교 이름으로 존재하면 등록되어 있다고 하기

    // education 고유 id 발급
    const id = uuidv4();
    const newEducation = { user_id, id, school, major, position };

    // db에 저장하기
    const createEducation = await Education.create({ newEducation });
    createEducation.errorMessage = null;
    return createEducation;
  }

  static async getEducation({ id }) {
    // education의 id를 기준으로 확인
    const education = await Education.findById({ id });
    return education;
  }

  static async getEducations({ user_id }) {
    // 사용자 id를 기준으로 모든 학력 가져오기
  }

  static async setEducations({ id, toUpdate }) {
    // 학력 id를 기준으로 수정
  }
}

export { educationService };
