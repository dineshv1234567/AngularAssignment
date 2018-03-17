import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	weatherResult=[];
  constructor() { }

  ngOnInit() {
  }

weatherRecieve(event){
	this.weatherResult=event.weatherResult;
console.log("In Parent");
	console.log(this.weatherResult);
}
}
