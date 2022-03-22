import { Project } from "../db";


class projectService{
    static async addProject({user_id,title,description,from_data,to_data}){
        const newProject ={ user_id, title, description, from_data, to_data};

        const createdNewProject =  await Project.create({newProject});
        createdNewProject.errorMessage=null;
        
        return createdNewProject;
    }

    static async getProject({projectId}){
        const project = await Project.findByObjectId({id :projectId});
        return project;
    }
    
    static async deletProject({projectId}){
        const project = await Project.projectDelete({id : projectId});
        return project;
    }
    
    static async putProject({projectId, update}){

    let project = await Project.findByObjectId({id :projectId});
    let user_id_info = update.user_id;
    user_id_info = project.user_id;
    const fieldtoUpdate_user = "user_id";
    project = await Project.update({projectId,fieldtoUpdate_user,user_id_info});

        if(!project){
            return "project가 존재하지 않습니다.";
        }

        if (update.title){
            const fieldtoUpdate="title";
            const newValue = update.title;
            project = await Project.update({projectId,fieldtoUpdate,newValue});
        }

        if (update.description){
            const fieldtoUpdate="description";
            const newValue = update.description;
            project = await Project.update({projectId,fieldtoUpdate,newValue});
        }

        if (update.from_data){
            const fieldtoUpdate="from_data";
            const newValue = update.from_data;
            project = await Project.update({projectId,fieldtoUpdate,newValue});
        }

        if (update.to_data){
            const fieldtoUpdate="to_data";
            const newValue = update.to_data;
            project = await Project.update({projectId,fieldtoUpdate,newValue});
        }

        return project;
    }

    static async projectList({ user_id }){
        const project = await Project.findByUserId({ user_id : user_id});
        return project;
    }
    

}

export {projectService}