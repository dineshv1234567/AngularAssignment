import { Injectable } from '@angular/core';
import {Url} from '../configurations/weatherMap.config';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {App} from '../configurations/json.config';

@Injectable()
export class WeatherFindService {

  constructor(private http : Http) { }

private headers = new Headers({'Content-Type':'application/json'});

  getWeather(searchInput : String) {
    return this.http.get(Url.apiSite+searchInput+Url.key)
    .map(data => data.json(),
    (err) => {
      console.log("error encountered");
    });
  }

   private handleError(error: Response){
     return Observable.throw(error.statusText);
   }

  addFav(weatherInput){
    return this.http.post(App.apiUrl+"db",weatherInput, {headers: this.headers})
    .map(data => data.json(),
   (error: any)=>{this.handleError(error);
   }
   );
  }

    showFav() {
    return this.http.get(App.apiUrl+"db")
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

// deleteMovie(movieRecievedBymovieComponentToDelete) {
//  return this.http.delete(App.apiUrl+"movies/"+movieRecievedBymovieComponentToDelete.id, { headers: this.headers })
//   .map(data => data.json(),
// (error: any)=>this.handleError(error));
// } 

}

