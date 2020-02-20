import { EntityRepository, Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

@EntityRepository(Blog)
export class BlogsRepository extends Repository<Blog> {
  async getBlogs(): Promise<Blog[]> {
    const query = this.createQueryBuilder('blog');

    query.select(['blog.id', 'blog.title', 'blog.desc', 'blog.updatedAt']);

    return await query.getRawMany();
  }

  async createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    const { title, desc, content } = createBlogDto;

    const blog = new Blog();

    blog.title = title;
    blog.desc = desc;
    blog.content = content;

    await blog.save();

    return blog;
  }
}
