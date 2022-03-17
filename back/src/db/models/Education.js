import { EducationModel } from "../schemas/education";

class Education {
  static async create({ newEducation }) {
    const createNewEducation = await EducationModel.create(newEducation);
    return createNewEducation;
  }

  static async findById({ newEducation }) {}

  static async findByUserId({ newEducation }) {}

  static async findAll({ newEducation }) {}

  static async update({ newEducation }) {}
}

export { Education };
