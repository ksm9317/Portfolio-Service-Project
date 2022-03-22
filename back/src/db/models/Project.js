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

  static async projectDelete({projectid}){
    const getDeleteProject = await ProjectModel.findOneAndDelete({id: projectid});
    return getDeleteProject;
  }

  static async update({projectid,fieldtoUpdate,newValue}){
    const filter = {projectid};
    const update = {[fieldtoUpdate] : newValue};
    const option = { returnOriginal : false};

    const updateProject = await ProjectModel.findOneAndUpdate(
      filter,
      update,
      option
    );
    
    //console.log("업데이트 내용",updateProject);
    return updateProject;
  }

  static async findByUserId({ user_id }){
    const getProjectList = await ProjectModel.find({user_id : user_id});
    return getProjectList;
  }
}

export { Project };