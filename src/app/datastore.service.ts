import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  private scans: string[] = [];
  //private calorie: string[] = [];
  private windowObject: any = window as any;

  private websqlDb: any;


  constructor() { 
    const saveData = window.localStorage.getItem('scanArray');
    if(saveData != null){
      this.scans = JSON.parse(saveData);
      //this.calorie = 
    }
  }
  addScan(message: string){
    this.scans.push(message);
    this.saveChange();
  }

  /* addCalorie(message : string){
    this.calorie.push(message);
    this.saveChange();
  } */

  removeItem(i: number){
    this.scans.splice(i, 1);
    this.saveChange();
  }
  clear(){
    this.scans = [];
    this.saveChange();
  }

  addToPlan(){
    return(this.scans);
  }

  getScans(){
    return(this.scans);
  }

  /* getCalorie(){
    return(this.calorie);
  } */

  private saveChange(){
    window.localStorage.setItem('scanArray', JSON.stringify(this.scans)); }
}

