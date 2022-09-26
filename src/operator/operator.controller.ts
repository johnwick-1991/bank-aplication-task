import { CreateOperatorDto, LoginOperatorDto } from './dto/operator.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OperatorService } from './operator.service';

@Controller('operator')
export class OperatorController {
  constructor(private readonly operatorService: OperatorService) {}

  @Post('signup')
  create(@Body() createOperatorDto: CreateOperatorDto) {
    return this.operatorService.create(createOperatorDto);
  }

  @Post('signin')
  login(@Body() loginOperatorDto: LoginOperatorDto) {
    return this.operatorService.login(loginOperatorDto);
  }

  @Get('find/:personal_id')
  findOne(@Param('personal_id') personalId: string) {
    return this.operatorService.findOne(personalId);
  }

  @Get('find')
  findAll() {
    return this.operatorService.findAll();
  }
}
