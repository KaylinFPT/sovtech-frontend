import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'people', component: PeopleComponent},
  {path:'search', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
