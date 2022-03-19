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
}

export { Project };