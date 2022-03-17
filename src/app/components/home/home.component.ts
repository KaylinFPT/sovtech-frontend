import { Component, OnInit } from '@angular/core';
import { chuckJoke } from 'src/app/models/chuckJoke';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedValue!: string;
  randomJoke?: chuckJoke;

  constructor(private api: ApiService) { }

  categories : string[] = [];
  

  ngOnInit(): void {
    this.api.getCategories().subscribe((data) =>{ this.categories = data})


  }

  onSelect(){
    this.api.getRandomJoke(this.selectedValue).subscribe((data) => this.randomJoke = data)
  }

}
