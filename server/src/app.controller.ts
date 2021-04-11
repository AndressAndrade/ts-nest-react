import { Controller, Get } from '@nestjs/common';
import { AppService, Route } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('routes')
  getRoutes(): Route[] {
    return this.appService.getRoutes();
  }
}
