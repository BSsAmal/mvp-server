import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRouter);

const CONNECTION_URL =
  "mongodb+srv://AMAL:mvpproject@cluster0.k56k7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = 5000;

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set("useFindAndModify", false);

app.listen(PORT, () => console.log(`server running on port :${PORT}`));
