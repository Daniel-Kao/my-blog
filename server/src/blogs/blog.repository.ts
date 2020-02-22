import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

@EntityRepository(Blog)
export class BlogsRepository extends Repository<Blog> {
  async getBlogs(user: User): Promise<Blog[]> {
    const query = this.createQueryBuilder('blog');

    query.select(['blog.id', 'blog.title', 'blog.updatedAt']);

    query.andWhere('blog.userId = :userId', { userId: user.id });

    query.where('blog.published = :published', { published: 1 });
    return await query.getRawMany();
  }

  async createBlog(createBlogDto: CreateBlogDto, user: User): Promise<Blog> {
    const { title, content } = createBlogDto;

    const blog = new Blog();

    blog.title = title;
    blog.content = content;
    blog.user = user;

    await blog.save();

    delete blog.user;

    return blog;
  }

  async getAll(): Promise<Blog[]> {
    const query = this.createQueryBuilder('blog');

    query.select(['blog.id', 'blog.title', 'blog.updatedAt']);

    return await query.getMany();
  }
}
