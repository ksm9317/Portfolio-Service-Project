import { Schema, model } from "mongoose";

const awardSchema = new Schema({
  //  제공된 api 명세서를 따름
  user_id: {
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

  // 직접 생성한 스키마입니다.
  // id: {
  //   //   고유 ID
  //   type: String,
  //   required: true,
  // },
  // awardee: {
  //   type: String,
  //   required: true,
  // },
  // awardTitle: {
  //   //   참여한 대회 이름
  //   type: String,
  //   required: true,
  // },
  // rank: {
  //   //   first prize
  //   type: String,
  //   required: true,
  // },
  // content: {
  //   //   경진대회 활동에 대한 간단한 설명
  //   type: String,
  //   required: true,
  // },
});

const awardModel = model("Award", awardSchema);

export { awardModel };
