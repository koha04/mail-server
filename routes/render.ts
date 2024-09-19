import { Router, type Request, type Response } from "express";
import { renderTemplates } from "../utils/render-templates";

const router = Router();

const renderHomePage = (req: Request, res: Response) => {
  renderTemplates(res, "index.html");
};

router.get("/", renderHomePage);

export default router;
