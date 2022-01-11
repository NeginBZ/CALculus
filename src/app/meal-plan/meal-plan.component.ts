import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-meal-plan',
  templateUrl: './meal-plan.component.html',
  styleUrls: ['./meal-plan.component.scss']
})
export class MealPlanComponent implements OnInit {
  pageTitle: string="Meal-Plan";
  dataSource = DatastoreService
  constructor(public datastore: DatastoreService) { }

  ngOnInit(): void {
  }
  
  clearHistory(){
    this.datastore.clear();
  }

  onItemClick(index:number){
    this.datastore.removeItem(index);
  }
}
