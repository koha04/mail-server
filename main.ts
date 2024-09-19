import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import { PORT } from "./configs/env.variables";
import sendMail from "./routes/send-mail";
import render from "./routes/render";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", sendMail);
app.use("/", render);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
