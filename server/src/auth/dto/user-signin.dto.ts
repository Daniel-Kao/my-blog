import { IsEmail } from 'class-validator';
import { Column } from 'typeorm';

export class UserSignInDto {
  @IsEmail()
  email: string;

  @Column()
  password: string;
}
