// city-search.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent {
  searchQuery = '';
  searchResults: any[];

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    if (!this.searchQuery) {
      return;
    }

    // Send the search query to the backend API
    this.http
      .get<any>(`http://localhost:3000/cities?query=${encodeURIComponent(this.searchQuery)}`)
      .subscribe((response) => {
        this.searchResults = response.cities;
      });
  }
}
