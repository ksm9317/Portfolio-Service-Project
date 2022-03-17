import { Education } from "../db";
import { v4 as uuidv4 } from "uuid";

class educationService {
  static async addEducation({ school, major, position }) {
    // education 추가
  }

  static async getEducation({ id }) {
    // education의 id를 기준으로 확인
  }

  static async getEducations({ user_id }) {
    // 사용자 id를 기준으로 모든 학력 가져오기
  }

  static async setEducations({ id, toUpdate }) {
    // 학력 id를 기준으로 수정
  }
}

export { educationService };
