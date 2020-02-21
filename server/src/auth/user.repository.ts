import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';
import { UserSignInDto } from './dto/user-signin.dto';
import { UserSignUpDto } from './dto/user-signup.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp(userSignUpDto: UserSignUpDto): Promise<User> {
    const { name, email, password } = userSignUpDto;

    const user = new User();

    user.name = name;
    user.email = email;
    user.salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, user.salt);

    try {
      await user.save();
    } catch (error) {
      if (error.code === '23505') {
        throw new BadRequestException('用户名或邮箱已存在！');
      }
    }

    delete user.password;

    return user;
  }

  async validatePassword(userSignInDto: UserSignInDto): Promise<string> {
    const { email, password } = userSignInDto;

    const user = await this.findOne({ email });

    if (user && (await user.validatePassword(password))) {
      return user.email;
    } else {
      return null;
    }
  }
}
