import { UserService } from './user.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    private readonly userReposityory;
    constructor(userService: UserService, userReposityory: Repository<User>);
    findAll(ip: string, agent: string): {
        ip: string;
        agent: string;
    };
}
