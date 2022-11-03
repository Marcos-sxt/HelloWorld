import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Hello')
  getHello(): string {
    return this.appService.getHello();
  }

@Get('/BSM')
Instrutores(): string {
  return this.appService.getBSM();
}
@Get('/Obj')
Cidade(): string {
  return this.appService.getObjdeAprendizagem();
}
}