import { EducationModel } from "../schemas/education";

class Education {
  static async create({ newEducation }) {
    const createNewEducation = await EducationModel.create(newEducation);
    return createNewEducation;
  }

  static async findById({ id }) {
    // id를 기준으로 하나만 찾아야 하므로 findOne을 사용
    const education = await EducationModel.findOne({ id });
    return education;
  }

  static async findByUserId({ newEducation }) {}

  static async findAll({ newEducation }) {}

  static async update({ newEducation }) {}
}

export { Education };
