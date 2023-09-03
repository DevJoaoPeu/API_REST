"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserController_1 = __importDefault(require("./controllers/UserController"));
const PostController_1 = __importDefault(require("./controllers/PostController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 8000;
app.get("/", (request, response) => {
    response.send("Hello World!");
});
app.post("/createUsers", UserController_1.default.createUser);
app.post("/createPosts", PostController_1.default.createPost);
app.get("/listPost/:id", PostController_1.default.listPost);
app.get("/listAllPosts", PostController_1.default.listAllPosts);
app.put("/updatePost/:id", PostController_1.default.updatePost);
app.delete("/deletePost/:id", PostController_1.default.deletePost);
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`);
});
