import { Component, OnInit } from '@angular/core';
import { chuckJoke } from 'src/app/models/chuckJoke';
import { SwPeople } from 'src/app/models/SwPeople';
import { ApiService } from 'src/app/services/api.service';
import { PeopleComponent } from '../people/people.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchWord: string = "";
  jokes ?: chuckJoke[];
  people ?: SwPeople[];
  total: number = 0;
  count: number = 0;
  isLoading:boolean =false;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  Blah(){
    this.isLoading =true;
    if(this.searchWord != ""){    
      
      
      this.api.getSearch(this.searchWord).subscribe((data) =>{
        this.jokes = data.chuck.result;
        this.people = data.swapi.results; 
        this.total = data.chuck.total;
        this.count = data.swapi.count;
        console.log(data) })

       
    }
    else{
      this.people =[]; this.jokes = [];
      this.total = 0; this.count = 0;
    }
    this.isLoading =false;

  }

}
