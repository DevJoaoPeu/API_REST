import { Request, Response } from "express";
import { prisma } from "../database";
import { CreatePostService } from "../service/CreatePostService";
import { PostRepository } from "../repositories/PostRepository";

export default {
  async createPost(request: Request, response: Response) {
    try {
      const { title, content, userId } = request.body;

      const createPost = new CreatePostService(new PostRepository());

      const post = await createPost.execute(title, content, userId);

      return response.json({
        error: false,
        message: "Sucesso: Post cadastrado com sucesso",
        post,
      });
    } catch (error) {
      return response.json({ message: error.message });
    }
  },

  async listPost(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const post = await prisma.post.findUnique({ where: { id } });

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
    } catch (error) {
      return response.json({ message: error.message });
    }
  },
  async listAllPosts(request: Request, response: Response) {
    try {
      const posts = await prisma.post.findMany();
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
    } catch (error) {
      return response.json({ message: error.message });
    }
  },

  async updatePost(request: Request, response: Response) {
    try {
      const { id } = request.params;
      const { title, content } = request.body;

      let post = await prisma.post.findUnique({ where: { id } });

      if (!post) {
        return response.json({
          error: true,
          message: "Error: Post não encontrado!",
        });
      }

      post = await prisma.post.update({
        where: { id },
        data: { title, content },
      });

      return response.json({
        error: false,
        message: "Sucesso: Post atualizado com sucesso!",
        post,
      });
    } catch (error) {
      return response.json({ message: error.message });
    }
  },

  async deletePost(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const post = await prisma.post.findUnique({ where: { id } });

      if (!post) {
        return response.json({
          error: true,
          message: "Error: Post não encontrado!",
        });
      }

      await prisma.post.delete({ where: { id } });

      return response.json({
        error: false,
        message: "Sucesso: Post deletado com sucesso!",
        post,
      });
    } catch (error) {
      return response.json({ message: error.message });
    }
  },
};
