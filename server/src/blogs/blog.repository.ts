import { Blog } from './blog.entity';
import { Repository, EntityRepository } from 'typeorm';
import { CreateBlogDto } from './dto/create-blog.dto';

@EntityRepository(Blog)
export class BlogsRepository extends Repository<Blog> {
  async getBlogs(): Promise<Blog[]> {
    const query = this.createQueryBuilder('blog');

    return await query.getMany();
  }

  async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    const { title, content } = createBlogDto;

    const blog = new Blog();

    blog.title = title;
    blog.content = content;

    await blog.save();

    return blog;
  }
}
