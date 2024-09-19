import { type Response } from "express";
import { join } from "path";

export const renderTemplates = (res: Response, html: string) => {
  res.sendFile(join(process.cwd(), "public", "templates", html));
};
