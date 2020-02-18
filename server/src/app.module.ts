import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BlogsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
