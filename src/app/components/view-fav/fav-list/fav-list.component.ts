import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {
@Input() weather:any;
  constructor() { }

  ngOnInit() {
  }

}
