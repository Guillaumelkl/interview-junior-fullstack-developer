import { Controller, Get, Query } from '@nestjs/common';
import { CityService } from './app.service';

@Controller('/cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  getCities(
    @Query('query') query: string,
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 5,
  ) {
    return this.cityService.findCities(query, page, pageSize);
  }
}
