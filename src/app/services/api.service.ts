import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllSwapi } from '../models/AllSwapi';
import { chuckJoke } from '../models/chuckJoke';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiURL = 'https://sovtechapi.azurewebsites.net/';

  constructor(private http: HttpClient) { }


  getCategories(){

    const x = this.http.get(this.apiURL);

    return this.http.get<string[]>(this.apiURL + "chuck/categories");

  }

  getRandomJoke(category: string){
    return this.http.get<chuckJoke>("https://api.chucknorris.io/jokes/random?category=" + category);
  }

  getSwapiPeople(){
    return this.http.get<AllSwapi>(this.apiURL + "swapi/people");
  }

  getSearch(query: string){
    return this.http.get<string>(this.apiURL + "search?query=" + query);

  }
}
