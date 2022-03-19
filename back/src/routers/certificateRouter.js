import { Router } from "express";
import { certificationService } from "../services/certificateService";

const certificateRouter = Router();

certificateRouter.post(
  "/certificate/create",
  certificationService.authenticateJWT,
  async (req, res) => {
    //create 함수입니다. 프론트엔드로부터 수료한 상장(certName)과 설명(certDescription), 그리고 지은이(author)를 json 객체로 전달받습니다.
    const { title, user_id, description, timestamps } = req.body;
    const result = await certificationService.addCertification({
      title,
      user_id,
      description,
      timestamps,
    });
    res.send(result);
  }
);

certificateRouter.get(
  `/certificatelist/:user_id`,
  certificationService.authenticateJWT,
  async (req, res) => {
    //read 함수입니다. 프론트엔드로부터 지은이만 전달받습니다.
    const { user_id } = req.params.user_id;
    const result = await certificationService.returnAllCertificate({ user_id });
    if (result.length == 0) {
      res.send(`아직 ${user_id} 님이 작성하신 수상 이력이 없습니다.`);
      return;
    }
    res.send(result);
  }
);

certificateRouter.get(
  "/certeficates/:id",
  certificationService.authenticateJWT,
  async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const result = await certificationService.findCertificate({ id });
    res.send(result);
  }
);

certificateRouter.delete(
  "/certificate/:id/delete",
  certificationService.authenticateJWT,
  async (req, res) => {
    //delete 함수입니다. 지은이와 상장의 이름만 전달받습니다.
    const { user_id, title } = req.body;
    const result = await certificationService.deleteOneCertificate({
      user_id,
      title,
    });
    if (result === null) {
      res.send(`There is no Author with the name ${user_id}`);
      return;
    }
    res.send(result);
  }
);

certificateRouter.put(
  "/certificates/:id",
  certificationService.authenticateJWT,
  async (req, res) => {
    const { title, description } = req.body;
    const id = req.params.id;
    const result = await certificationService.updateCertification({
      title,
      id,
      description,
    });
    if (result === null) {
      res.send("rejected");
      return;
    }
    res.send(result);
  }
);

export { certificateRouter };
