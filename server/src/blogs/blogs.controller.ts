import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Body,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { Blog } from './blog.entity';
import { CreateBlogDto } from './dto/create-blog.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get()
  getBlogs(): Promise<Blog[]> {
    return this.blogsService.getBlogs();
  }
  @Post()
  @UsePipes(ValidationPipe)
  createBlog(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
    return this.blogsService.createBlog(createBlogDto);
  }
}
