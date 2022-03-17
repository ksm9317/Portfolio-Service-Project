import { EducationModel } from "../schemas/education";

class Education {
  static async create({ newEducation }) {
    const createNewEducation = await EducationModel.create(newEducation);
    return createNewEducation;
  }

  static async findById({ newEducation }) {}

  static async findByUserId({ newEducation }) {}

  static async findAll({ newEducation }) {}

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
}

export { Education };
