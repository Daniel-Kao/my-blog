import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Kk539241',
  database: 'myblog',
  entities: ['dist/**/*.entity{.js,.ts}'],
  synchronize: true,
};
