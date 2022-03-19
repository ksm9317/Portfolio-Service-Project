import { CertificateModel } from "../schemas/certificate";

class Certificate {
  static async addCertificate({ newPost }) {
    // form에서 입력을 받아
    const createNewPost = await CertificateModel.create(newPost);
    return createNewPost;
  }

  static async UpdateOne({ certificateid, title, description }) {
    //id는 글 고유의 id;
    const updatedPost = await CertificateModel.findOneAndUpdate(
      { id: certificateid },
      {
        title: title,
        description: description,
      },
      { returnOriginal: false }
    );
    console.log(updatedPost);
    return updatedPost;
  }

  static async findByNameOrId({ title, user_id }) {
    // 수료한 교육의 이름을 받아 찾는 함수입니다. 중복체크등에서 쓰입니다.
    const found = await CertificateModel.findOne({
      title: title,
      user_id: user_id,
    });
    if (found) return true; //찾았으면 true
    return false;
  }

  static async findAllPosts({ user_id }) {
    // 한 지은이의 모든 포스트를 찾아 반환해줍니다.
    const foundAll = await CertificateModel.find({ user_id: user_id });
    return foundAll;
  }

  static async deletePost({ user_id, title }) {
    // 지은이와 상장의 이름이 일치하는 객체를 골라 삭제하고 그 boolean값을 반환해줍니다.
    const deleted = await CertificateModel.findOneAndDelete({
      user_id: user_id,
      title: title,
    });
    return deleted;
  }
  static async findByObjectId({ certificateid }) {
    console.log(certificateid);
    const result = await CertificateModel.findOne({ id: certificateid });
    console.log(result);
    return result;
  }
}

export { Certificate };
