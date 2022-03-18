import { Schema, model } from "mongoose";

const ProjectSchema = new Schema({ 
  //user_id
    user_id:{
      type: String,
      required:true,
    },
    //title
    title: {
      type : String,
      required : true,
    },
    //description
    decription: {
      type : String,
      required : true,
    },
    //from_data
    from_data: {
      type : String,
      required : true,
    },
    //to_data
    to_data: {
      type : String,
      required : true,
    }
  });

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };
