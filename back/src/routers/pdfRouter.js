import { Router } from "express";
import { pdfService } from "../services/pdfService";
const path = require("path");

const pdfRouter = Router();

pdfRouter.get("/pdf/:user_id", async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const { name, email, tel } = req.body;
    const data = await pdfService.pdfConverter({ user_id, name, email, tel });
    console.log(data);
    res.contentType("application/pdf");
    console.log(__dirname);
    res.sendFile(path.join(__dirname, "../../", data));
  } catch (e) {
    console.log(e);
  }
});
export { pdfRouter };
