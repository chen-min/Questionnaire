import { Controller, Post, Body, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { GetUserIp, GetUserAgent } from '../utils/UserMessageTool';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User) private readonly userReposityory: Repository<User>,
  ) {}

  @Post()
  findAll(@GetUserIp() ip: string, @GetUserAgent() agent: string) {
    return { ip, agent };
  }
}
