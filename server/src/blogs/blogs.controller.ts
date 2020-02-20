import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ResponseInterceptor } from './response.interceptor';

@Controller('blogs')
@UseInterceptors(new ResponseInterceptor())
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get('/:id')
  getBlogById(@Param('id', ParseIntPipe) id: number): Promise<Blog> {
    return this.blogsService.getBlogById(id);
  }

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
