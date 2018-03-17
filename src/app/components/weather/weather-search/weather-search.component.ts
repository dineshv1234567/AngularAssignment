import { Component, OnInit , Output ,EventEmitter } from '@angular/core';
import {WeatherFindService} from '../../../services/weather-find.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css'],
  providers:[WeatherFindService]
})
export class WeatherSearchComponent implements OnInit {
	@Output() weatherSend=new EventEmitter<any>();
	searchInput:string;
	weatherResult=[];

  constructor(private weatherFindService:WeatherFindService) { }

  ngOnInit() {
  }

searchWeather(){
this.weatherFindService.getWeather(this.searchInput).subscribe((res)=>{
	this.weatherResult=res;
	this.weatherSend.emit({
		"weatherResult":this.weatherResult;
	})

	console.log("In Child");
	console.log(this.weatherResult);
},
(err)=>{
console.log("error encountered");
});
}
}
