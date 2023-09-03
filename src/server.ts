import Express, { response, request } from "express";
import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";
import cors from "cors"

const app = Express();
app.use(Express.json());
const PORT = process.env.PORT || 8000;

app.use((request, response, next) => {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "*");
  response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  app.use(cors());
  next();
});

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/createUsers", UserController.createUser);
app.post("/createPosts", PostController.createPost);
app.get("/listPost/:id", PostController.listPost);
app.get("/listAllPosts", PostController.listAllPosts)
app.put("/updatePost/:id", PostController.updatePost);
app.delete("/deletePost/:id", PostController.deletePost);


app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
