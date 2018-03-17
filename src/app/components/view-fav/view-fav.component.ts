import { Component, OnInit } from '@angular/core';
import {WeatherFindService} from '../../services/weather-find.service';

@Component({
  selector: 'app-view-fav',
  templateUrl: './view-fav.component.html',
  styleUrls: ['./view-fav.component.css'],
  providers:[WeatherFindService]
})
export class ViewFavComponent implements OnInit {

public weatherList:Array<any>=[];
  constructor(private weatherFindService:WeatherFindService ) { }

  ngOnInit() {
    this.weatherFindService.showFav().subscribe((res)=>{
      this.weatherList=res.db;
      console.log(this.weatherList);
    },(err)=>{
      console.log("error encountered");
    }) ;
  }


}
