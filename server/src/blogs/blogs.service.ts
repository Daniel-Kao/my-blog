import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from './blog.entity';
import { BlogsRepository } from './blog.repository';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class BlogsService {
  constructor(
    @InjectRepository(BlogsRepository)
    private blogsRepository: BlogsRepository,
  ) {}

  getBlogs(): Promise<Blog[]> {
    return this.blogsRepository.getBlogs();
  }

  createBlog(createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsRepository.createBlog(createBlogDto);
  }
  getBlogById(id: number): Promise<Blog> {
    return this.blogsRepository.findOne(id);
  }
}
