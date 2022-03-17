import { Component, OnInit } from '@angular/core';
import { SwPeople } from 'src/app/models/SwPeople';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {


  dataSource: SwPeople[] = [];
  displayedColumns: string[] = ['name', 'height', 'mass', 'hair_color', 'skin_color','eye_color','birth_year','gender'];


  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSwapiPeople().subscribe((data) =>{ this.dataSource = data.results})
  }

}
