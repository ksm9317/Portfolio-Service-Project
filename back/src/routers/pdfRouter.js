import { Router } from "express";
import { pdfService } from "../services/pdfService";
const path = require("path");

const pdfRouter = Router();

pdfRouter.get("/pdf/:user_id", async (req, res) => {
  const user_id = req.params.user_id;
  const { name, email, tel } = req.body;
  console.log(user_id);
  const data = await pdfService.pdfConverter({ user_id, name, email, tel });
  console.log(data);
  res.contentType("application/pdf");
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "../../", data));
});
export { pdfRouter };
