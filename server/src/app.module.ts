import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { BlogsModule } from './blogs/blogs.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BlogsModule, AuthModule],
})
export class AppModule {}
