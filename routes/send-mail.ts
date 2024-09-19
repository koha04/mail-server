import { Router, type Request, type Response } from "express";
import { sendMail } from "../utils/mail";
import multer from "multer";

const upload = multer({
  dest: "uploads/",
});

const router = Router();

const sendMailTemplate = (req: Request, res: Response) => {
  const { file: _, ...rest } = req.body;
  const files = req.files;

  const mailData = {
    ...rest,
    attachments:
      (files?.length as number) > 0
        ? (files as Express.Multer.File[]).map((file) => {
            return { filename: file.originalname, path: file.path };
          })
        : [],
  };

  sendMail(mailData);
  return res.status(200).json({ message: "OK" });
};

router.post("/send-mail", upload.array("file"), sendMailTemplate);

export default router;
