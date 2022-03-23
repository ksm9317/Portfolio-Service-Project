import is from "@sindresorhus/is";
import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { projectService } from "../services/projectService";

const projectRouter = Router();

projectRouter.use(login_required);

projectRouter.post("/project/create", async (req,res,next) => {
    try {
        if (is.emptyObject(req.body)) {
          throw new Error(
            "headers의 Content-Type을 application/json으로 설정해주세요"
            );
        }
        // req 데이터 받아오기
            const user_id = req.body.user_id;
            const title = req.body.title;
            const description = req.body.description;
            const from_data = req.body.from_data;
            const to_data = req.body.to_data;

        //db추가하기
            const newProject =  await projectService.addProject({
                user_id,
                title,
                description,
                from_data,
                to_data,
            });
        

            if (newProject.errorMessage) {
                throw new Error(newProject.errorMessage);
            };

            res.status(201).json(newProject);
        } catch(error){
            next(error);
        }
});

projectRouter.get("/projects/:id", async (req,res,next)=>{
    try{
    const projectId = req.params.id;
    //console.log("Router",projectId);
    const project = await projectService.getProject({projectId});

    if (project.errorMessage){
        throw new Error(project.errorMessage);
    }
        res.status(200).json(project);
    } catch(error){
        next(error);
    }
});

projectRouter.delete("/projects/:id/delete",async (req,res,next)=>{
    try{
        const projectId = req.params.id;
        const deleteProject = await projectService.deletProject({projectId})

        if (updateProject.errorMessage){
            throw new Error(updateProject.errorMessage);
           }
           
           res.json(deleteProject);
    }catch(e){
        next(e);
    }
})

projectRouter.put("/projects/:id", async (req,res,next)=>{
    try{
        const id = req.params.id;

        const title = req.body.title ?? null;
        const description = req.body.description ?? null;
        const from_data = req.body.from_data ?? null;
        const to_data = req.body.to_data ?? null;

        const update = {id,title,description,from_data,to_data};

        const updateProject = await projectService.putProject({update});

        if (updateProject.errorMessage){
         throw new Error(updateProject.errorMessage);
        }
        
        res.json(updateProject);
    }catch(error){
        next(error);
    }
});

projectRouter.get("/projectlist/:user_id", async (req,res,next)=>{
    try {
        const user_id = req.params.user_id;
        const projectlist = await projectService.projectList({ user_id });

     
        if (projectlist.errorMessage){
            throw new Error(projectlist.errorMessage);
        }
        
        res.json(projectlist);
    }catch(error){
        next(error);
    }
});

export { projectRouter };