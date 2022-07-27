import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import User from './models/UserModel';

const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.get("/users", function (req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
} catch (error) {
    console.log(error.message);
}
})
app.use(cors());
app.use(express.json());
// app.use(UserRoute);

app.listen(process.env.PORT || 5000, ()=> console.log('Server up and running...'));