import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { ResponseInterceptor } from './response.interceptor';

@Controller('blogs')
@UseInterceptors(new ResponseInterceptor())
@UseGuards(AuthGuard())
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get('/:id')
  getBlogById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Blog> {
    return this.blogsService.getBlogById(id, user);
  }

  @Get()
  getBlogs(@GetUser() user: User): Promise<Blog[]> {
    return this.blogsService.getBlogs(user);
  }
  @Post()
  @UsePipes(ValidationPipe)
  createBlog(
    @Body() createBlogDto: CreateBlogDto,
    @GetUser() user: User,
  ): Promise<Blog> {
    return this.blogsService.createBlog(createBlogDto, user);
  }
}
