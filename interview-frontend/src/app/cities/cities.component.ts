import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
    constructor(private http : HttpClient) { }
    cities: any = [];
    ngOnInit() {
      this.http.get('http://localhost:3000/cities').subscribe(data => {
        console.log(data);
      })
    }
    search(searchQuery : string){
      this.http.get('http://localhost:3000/cities?query=' + searchQuery).subscribe((data : any) => {
        console.log(data);
        this.cities = data.cities;
      })
    }
}
