import { CommnetModel } from "../schemas/comment";

class Comment {
  static create({ newComment }) {
    // 새 댓글 추가하기
    return CommnetModel.create(newComment);
  }

  static findAllComment({ commentTo }) {
    // comment를 받는 사람 기준으로 모든 댓글 조회하기
    return CommnetModel.find({ commentTo });
  }

  static delete({ id, commenter }) {
    // 댓글을 단 사람과 해당 댓글의 id를 이용해서 삭제
    return CommnetModel.deleteOne({ id, commenter });
  }
}

export { Comment };
