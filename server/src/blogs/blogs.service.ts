import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Blog } from './blog.entity';
import { BlogsRepository } from './blog.repository';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogsRepository)
    private blogsRepository: BlogsRepository,
  ) {}

  getBlogs(user: User): Promise<Blog[]> {
    return this.blogsRepository.getBlogs(user);
  }

  createBlog(createBlogDto: CreateBlogDto, user: User): Promise<Blog> {
    return this.blogsRepository.createBlog(createBlogDto, user);
  }

  getBlogById(id: number, user: User): Promise<Blog> {
    return this.blogsRepository.findOne({ where: { id, email: user.email } });
  }

  getAll(): Promise<Blog[]> {
    return this.blogsRepository.getAll();
  }
}
