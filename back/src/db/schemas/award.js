import { Schema, model } from "mongoose";

// 스키마 시작 알파벳은 무조건 UpperCase
const AwardSchema = new Schema({
  //  제공된 api 명세서를 따름
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Model name must be uppercase
const AwardModel = model("Award", AwardSchema);

export { AwardModel };
