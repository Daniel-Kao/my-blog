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
export class BlogsController {
  constructor(private blogsService: BlogsService) {}

  @Get('/all')
  getAllBlogs(): Promise<Blog[]> {
    return this.blogsService.getAll();
  }

  @Get('/:id')
  @UseGuards(AuthGuard())
  getBlogById(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<Blog> {
    return this.blogsService.getBlogById(id, user);
  }

  @Get()
  @UseGuards(AuthGuard())
  getBlogs(@GetUser() user: User): Promise<Blog[]> {
    return this.blogsService.getBlogs(user);
  }

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  createBlog(
    @Body() createBlogDto: CreateBlogDto,
    @GetUser() user: User,
  ): Promise<Blog> {
    return this.blogsService.createBlog(createBlogDto, user);
  }
}
