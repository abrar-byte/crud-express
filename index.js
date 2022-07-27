import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/users", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})
app.use(cors());
app.use(express.json());
// app.use(UserRoute);

app.listen(process.env.PORT || 5000, ()=> console.log('Server up and running...'));