"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const CreatePostService_1 = require("../service/CreatePostService");
const PostRepository_1 = require("../repositories/PostRepository");
exports.default = {
    createPost(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, content, userId } = request.body;
                const createPost = new CreatePostService_1.CreatePostService(new PostRepository_1.PostRepository());
                const post = yield createPost.execute(title, content, userId);
                return response.json({
                    error: false,
                    message: "Sucesso: Post cadastrado com sucesso",
                    post,
                });
            }
            catch (error) {
                return response.json({ message: error.message });
            }
        });
    },
    listPost(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const post = yield database_1.prisma.post.findUnique({ where: { id } });
                if (!post) {
                    return response.json({
                        error: true,
                        message: "Error: Post não encontrado!",
                    });
                }
                return response.json({
                    error: false,
                    post,
                });
            }
            catch (error) {
                return response.json({ message: error.message });
            }
        });
    },
    listAllPosts(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const posts = yield database_1.prisma.post.findMany();
                if (!posts) {
                    return response.json({
                        error: true,
                        message: "Error: Não há nenhum post no momento.",
                    });
                }
                return response.json({
                    error: false,
                    posts,
                });
            }
            catch (error) {
                return response.json({ message: error.message });
            }
        });
    },
    updatePost(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const { title, content } = request.body;
                let post = yield database_1.prisma.post.findUnique({ where: { id } });
                if (!post) {
                    return response.json({
                        error: true,
                        message: "Error: Post não encontrado!",
                    });
                }
                post = yield database_1.prisma.post.update({
                    where: { id },
                    data: { title, content },
                });
                return response.json({
                    error: false,
                    message: "Sucesso: Post atualizado com sucesso!",
                    post,
                });
            }
            catch (error) {
                return response.json({ message: error.message });
            }
        });
    },
    deletePost(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = request.params;
                const post = yield database_1.prisma.post.findUnique({ where: { id } });
                if (!post) {
                    return response.json({
                        error: true,
                        message: "Error: Post não encontrado!",
                    });
                }
                yield database_1.prisma.post.delete({ where: { id } });
                return response.json({
                    error: false,
                    message: "Sucesso: Post deletado com sucesso!",
                    post,
                });
            }
            catch (error) {
                return response.json({ message: error.message });
            }
        });
    },
};
