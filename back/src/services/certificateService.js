import jwt from "jsonwebtoken";
import { Certificate } from "../db";
import dotenv from "dotenv";
dotenv.config();
class certificationService {
  //crud 순으로 재현합니다.

  static async authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
          return res.sendStatus(403);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
  }

  static async updateCertification({ id, title, description }) {
    const updated = await Certificate.UpdateOne({
      id,
      title,
      description,
    });
  }
  static async addCertification({
    //create, return 값은 생성된 certificate 객체
    user_id,
    title,
    description,
    timestamps,
  }) {
    const cert = await Certificate.findByNameOrId({
      title: title,
      user_id: user_id,
    });
    if (cert) {
      const errorMessage =
        "이미 등록한 적이 있습니다. 다른 사항을 입력해주세요.";
      return { errorMessage };
    }

    const newPost = { user_id, title, description, timestamps };
    Certificate.addCertificate({ newPost });
    return newPost;
  }

  static async returnAllCertificate({ user_id }) {
    // read, return 값은 찾아낸 certificate 객체 전부
    const foundAll = Certificate.findAllPosts({ user_id });
    return foundAll;
  }
  static async deleteOneCertificate({ user_id, title }) {
    // delete, return값은 지우는데 성공했는지 boolean 값
    const deleted = Certificate.deletePost({ user_id, title });
    return deleted;
  }

  static async findCertificate({ id }) {
    // read, return 값은 찾아낸 certificate 객체 전부
    console.log(id);
    const foundAll = Certificate.findByObjectId({ id });
    console.log(foundAll);
    return foundAll;
  }
}

// 2022.03.16 15:04 테스트 완료

export { certificationService };
