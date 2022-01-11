import { Component, OnInit } from '@angular/core';
import { analyzeNgModules } from '@angular/compiler';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JQueryStyleEventEmitter, NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { DatastoreService } from '../datastore.service';
import { HttpClient } from '@angular/common/http';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent{

  
  url = "https://i.pinimg.com/564x/8e/74/57/8e7457680bff54675b859b14064ae907.jpg";

  onFileSelected(event: any) {
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event: any) => {
      this.url = event.target.result
    }
  }

  pageTitle : string = "Add-Meall";
  //@Output() onSelfDestruction: EventEmitter<string> = new EventEmitter<string>();

  //validate items
  
  itemCtrl : FormControl = new FormControl(null, [
    Validators.required,
    Validators.maxLength(150)]);
  nameCtrl : FormControl = new FormControl(null, [
      Validators.required,
      Validators.minLength(2)]);
  calorieCtrl : FormControl = new FormControl(null, [Validators.required]);

  isShow = true;
  isSubmit = false;
  
 
  toggleDisplay()
    {
      this.isShow = false;
    }

  entryGroup: FormGroup = new FormGroup({
    item: this.itemCtrl,
    calorie: this.calorieCtrl,
    name: this.nameCtrl
  });
  constructor(public datastore : DatastoreService) { }

  ngOnInit(): void {
  }

  
  /* totalCalorie(){
    var TotalCalorie = this.calorieCtrl.value + this.totalCalorie
  } */

  onSubmit(event: Event){
    if(this.entryGroup.valid){
      //var TotalCalorie = this.calorieCtrl.value + this.totalCalorie
      this.isSubmit = true;
      this.datastore.addScan(`Name: ${this.nameCtrl.value} -- Ingredients: ${this.itemCtrl.value} -- Calorie: ${this.calorieCtrl.value} `);
      //this.datastore.addCalorie(`Total Calorie = ${this.totalCalorie.toString()}`);
      (event.currentTarget as HTMLFormElement).reset();
    }
  }


}
