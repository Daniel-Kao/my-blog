import { Optional } from '@nestjs/common';
import { IsOptional } from 'class-validator';

export class CreateBlogDto {
  @IsOptional()
  title: string;

  @IsOptional()
  content: string;

  @Optional()
  pubslished: number;
}
