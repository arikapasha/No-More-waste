import express from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import { db } from "./db.js";
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors"

//import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(path.join(__dirname, 'index.html'));


const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../build')));


//app.use(bodyParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/uploads')
  },
  filename: function (req, file, cb) {
    
    cb(null, Date.now()+file.originalname)
  }
})

const upload = multer({ storage: storage })

//const upload = multer({ dest: "./uploads/" });
app.post("/api/upload", upload.single("file"), function(req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(8800, () => {
  console.log("connected");
});

db.connect(function(err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});
