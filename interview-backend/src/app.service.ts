import { Injectable } from '@nestjs/common';
import * as citiesData from './cities.json';

@Injectable()
export class CityService {
  findCities(query = '', page: number, pageSize: number): any {
    const normalizedQuery = query.toLowerCase().trim();
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const filteredCities = citiesData.filter((city) =>
      city.cityName.toLowerCase().includes(normalizedQuery),
    );

    const citiesOnPage = filteredCities.slice(startIndex, endIndex);
    const totalCitiesMatchingQuery = filteredCities.length;

    return {
      cities: citiesOnPage,
      totalCount: totalCitiesMatchingQuery,
    };
  }
}
