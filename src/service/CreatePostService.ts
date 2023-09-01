import { IPostRepository } from "../interfaces/IPostRepository";

class CreatePostService {
  constructor(private PostRepository: IPostRepository) {}

  public async execute(title: string, content: string, userId: string) {
    const post = await this.PostRepository.create(title, content, userId);
    return post;
  }
}

export { CreatePostService };
