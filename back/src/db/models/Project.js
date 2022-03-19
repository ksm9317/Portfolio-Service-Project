import { ProjectModel } from "../schemas/project";

class Project{

  static async create({ newProject }) {
    const createdNewProject = await ProjectModel.create(newProject);
    return createdNewProject;
  };

  static async findByObjectId({projectid}){
    const getProject = await ProjectModel.findOne({id : projectid});
    return getProject;
  }

  static async update({projectid,fieldtoUpdate,newValue}){
    const filter = {id : projectid};
    const update = {[fieldtoUpdate] : newValue};
    const option = { returnOriginal : false};

    const updateProject = await ProjectModel.findOneAndUpdate(
      filter,
      update,
      option
    );

    return updateProject;
  }

}

export { Project };