import { CreateUserDto, UserLoginDto } from './dto/createUser.dto'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './model/User.entity';
import * as bcrypt from 'bcrypt';
import { identity } from 'rxjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    console.log(salt, 'salt');

    const hash = await bcrypt.hash(createUserDto.password, salt);
    console.log(hash, 'hash');

    const newUser = this.UsersRepository.create({
      ...createUserDto,
      password: hash,
    });
    return this.UsersRepository.save(newUser);
  }

  async login(UserLoginDto: UserLoginDto) {
    const User = await this.UsersRepository.findOneBy({
      username: UserLoginDto.username,
    });

    if (!User) {
      throw new HttpException("User doesn't exists", HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(
      UserLoginDto.password,
      User.password,
    );

    return isMatch && 'User logged in';
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(personal_id: string): Promise<any> {
    console.log(personal_id);

    const user = await this.usersRepository.findOneBy({
     id: personal_id
    });
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.UsersRepository.delete(id);
  }
}
