import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('cities')
export class AppController {
  constructor(private readonly AppService: AppService) {}

  @Get()
  getCities(@Query('query') query: string, @Query('page') page: number) {
    const perPage = 5;
    return this.AppService.getCitiesByQuery(query, page, perPage);
  }
}
