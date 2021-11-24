import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArmchairComponent } from "./armchair/armchair.component";
import { HomeGardenComponent } from "./home-garden/home-garden.component";
import { DefaultComponent } from "./default/default.component";
const routes: Routes = [
  { path: 'armchair', component: ArmchairComponent },
  { path: 'home-garden', component: HomeGardenComponent },
  { path: '**', component: DefaultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
