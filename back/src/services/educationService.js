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
  }

  static async getEducations({ user_id }) {
    // 사용자 id를 기준으로 모든 학력 가져오기
  }

  static async setEducations({ id, updateEducation }) {
    // 학력 id를 기준으로 수정
    let education = await Education.findById({ id });

    if (!education) {
      const errorMessage = "해당 학력이 존재하지 않습니다.";
      return { errorMessage };
    }

    // 업데이트 대상 있는지 확인하기
    if (updateEducation.school) {
      const fieldToUpdate = "school";
      const newValue = updateEducation.school;
      education = await Education.update({ id, fieldToUpdate, newValue });
    }

    if (updateEducation.major) {
      const fieldToUpdate = "major";
      const newValue = updateEducation.major;
      education = await Education.update({ id, fieldToUpdate, newValue });
    }

    if (updateEducation.position) {
      const fieldToUpdate = "position";
      const newValue = updateEducation.position;
      education = await Education.update({ id, fieldToUpdate, newValue });
    }

    return education;
  }
}

export { educationService };
