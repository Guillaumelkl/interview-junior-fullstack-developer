import { Injectable } from '@nestjs/common';
import citiesData from './cities.json';

@Injectable()
export class AppService {
  getCitiesByQuery(query: string, page: number, perPage: number) {
    query = query.trim().toLowerCase();
    const matchCities = citiesData.filter((city) =>
      city.cityName.toLowerCase().includes(query),
    );

    const startIdx = (page - 1) * perPage;
    const endIdx = startIdx + perPage;
    const citiesForPage = matchCities.slice(startIdx, endIdx);

    return citiesForPage;
  }
}
