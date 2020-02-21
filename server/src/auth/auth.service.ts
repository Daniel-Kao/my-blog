import { Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSignInDto } from './dto/user-signin.dto';
import { UserSignUpDto } from './dto/user-signup.dto';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  signUp(userSignUpDto: UserSignUpDto): Promise<User> {
    return this.userRepository.signUp(userSignUpDto);
  }

  async signIn(userSignInDto: UserSignInDto): Promise<{ accessToken }> {
    const email = await this.userRepository.validatePassword(userSignInDto);

    if (!email) {
      throw new NotFoundException();
    }

    const payload: JwtPayload = { email };

    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
