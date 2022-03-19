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

  static async findByUserId({ user_id }) {
    const educations = await EducationModel.find({ user_id });
    return educations;
  }

  static async update({ id, fieldToUpdate, newValue }) {
    const filter = { id };
    const update = { [fieldToUpdate]: newValue };
    const option = { returnOriginal: false };

    const updateEducation = await EducationModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    return updateEducation;
  }

  static async findBySchool({ school }) {
    const isSchool = await EducationModel.find({ school });
    return isSchool;
  }
}

export { Education };
