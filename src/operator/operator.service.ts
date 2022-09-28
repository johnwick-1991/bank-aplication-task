import { User } from 'src/Users/model/User.entity';
import { CreateOperatorDto, LoginOperatorDto } from './dto/operator.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operator } from './model/operator.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class OperatorService {
  constructor(
    @InjectRepository(Operator)
    private operatorsRepository: Repository<Operator>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createOperatorDto: CreateOperatorDto): Promise<Operator> {
    const salt = await bcrypt.genSalt();
    console.log(salt, 'salt');

    const hash = await bcrypt.hash(createOperatorDto.password, salt);
    console.log(hash, 'hash');

    const newOperator = this.operatorsRepository.create({
      ...createOperatorDto,
      password: hash,
    });
    return this.operatorsRepository.save(newOperator);
  }

  async login(loginOperatorDto: LoginOperatorDto) {
    const operator = await this.operatorsRepository.findOneBy({
      username: loginOperatorDto.username,
    });

    if (!operator) {
      throw new HttpException("operator doesn't exists", HttpStatus.NOT_FOUND);
    }

    const isMatch = await bcrypt.compare(
      loginOperatorDto.password,
      operator.password,
    );

    return isMatch && 'Operator logged in';
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(personalId: string): Promise<any> {
    console.log(personalId);

    const user = await this.usersRepository.findOneBy({
      id: personalId
    });
    return user;
  }

  async remove(id: string): Promise<void> {
    await this.operatorsRepository.delete(id);
  }
}