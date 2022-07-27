import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "./controllers/UserController.js";

const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})
app.use(cors());
app.use(express.json());
// app.use(UserRoute);
app.get('/users', getUsers);
app.get('/users/:id', getUserById);
app.post('/users', createUser);
app.patch('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);


app.listen(process.env.PORT || 5000, ()=> console.log('Server up and running...'));