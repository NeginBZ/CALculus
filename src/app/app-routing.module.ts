import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMealComponent } from './add-meal/add-meal.component';
import { HomeComponent } from './home/home.component';
import { MealPlanComponent } from './meal-plan/meal-plan.component';

const routes: Routes = [
  {
    path: 'entry',
    component: AddMealComponent
  },
  {
    path:'',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'meal-plan',
    component: MealPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
