import { Component, OnInit ,Input } from '@angular/core';
import {Url} from '../../../configurations/weatherMap.config';
import {WeatherFindService} from '../../../services/weather-find.service';

@Component({
  selector: 'app-weather-search-result',
  templateUrl: './weather-search-result.component.html',
  styleUrls: ['./weather-search-result.component.css'],
  providers:[WeatherFindService]
})
export class WeatherSearchResultComponent implements OnInit {
@Input() weatherRes = [];
ext:String;

  constructor(private weatherFindService:WeatherFindService) {this.ext=".png"; }

  ngOnInit() {
  }

addToFav(){
	    this.weatherFindService.addFav(this.weatherRes).subscribe((res)=> {
      alert("added");
    }
    ,(err)=> {
      alert("can't add duplicate");
    });
}
}
