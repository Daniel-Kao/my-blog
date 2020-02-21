import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserSignUpDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
